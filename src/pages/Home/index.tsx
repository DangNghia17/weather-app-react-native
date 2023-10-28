import React, { useContext, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  ImageBackground,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { format } from 'date-fns';

import {
  ActivityContainer,
  Container,
  Footer,
  Header,
  HeaderLocation,
  Main,
  Temperature,
  TemperatureText,
  Text,
  Image,
  ImageView,
  ReloadButton,
} from './styles'

import Geolocation from 'react-native-geolocation-service'

import appConfig from '../../../app.json'
import api from '../../services/api'
import { capitalize } from '../../utils/capitalize'

import WorldMap from '../../assets/WorldMap/WorldMap.png'

import ThemeSwitcher from '../../components/ThemeSwitcher'
import { ThemeContext } from 'styled-components'
import WeatherData from '../../types/WeatherData'
import weatherImage from '../../utils/weatherImage'

import { WEATHER_API_KEY } from '@env'


function Home() {
  const [location, setLocation] = useState<Geolocation.GeoPosition | null>(null)
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null)
  const [loadingData, setLoadingData] = useState(false)

  const { colors } = useContext(ThemeContext)

  useEffect(() => {
    const fetchData = async () => {
      const hasPermission = await hasLocationPermission();
      if (hasPermission) {
        getLocation();
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (location?.coords?.latitude && location?.coords?.longitude) {
      LoadWeatherData()
    }
  }, [location])

 async function LoadWeatherData() {
   setLoadingData(true)
   try {
     const { data } = await api.get(
       `weather?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=${ WEATHER_API_KEY }&units=metric&lang=vi`,
     )
     setWeatherData(data);
     console.log(data);
   } catch (error) {
     Alert.alert(
       'Lỗi kết nối',
       'Kiểm tra kết nối internet của bạn và thử lại',
     )
   }
   setLoadingData(false)
 }

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Không thể mở cài đặt')
      })
    }

    const status = await Geolocation.requestAuthorization('whenInUse')

    if (status === 'granted') {
      return true
    }

    if (status === 'denied') {
      Alert.alert('Quyền vị trí bị từ chối')
    }

    if (status === 'disabled') {
      Alert.alert(
        `Bật Dịch vụ định vị để cho phép "${appConfig.displayName}" để xác định vị trí của bạn.`,
        '',
        [
          { text: 'Chuyển đến Cài đặt', onPress: openSetting },
          { text: "Không sử dụng vị trí", onPress: () => {} },
        ],
      )
    }

    return false
  }

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS()
      return hasPermission
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )

    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Quyền truy cập vị trí bị người dùng từ chối.',
        ToastAndroid.LONG,
      )
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Người dùng đã thu hồi quyền vị trí.',
        ToastAndroid.LONG,
      )
    }

    return false
  }

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission()

    if (!hasPermission) {
      return
    }

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position)
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message)
        setLocation(null)
        console.log(error, 'error')
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        // enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        // forceRequestLocation: forceLocation,
        // showLocationDialog: locationDialog,
      },
    )
  }
const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
const currentYear = currentDate.getFullYear();

const formattedTime = `${currentHour}:${currentMinute}`;
const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;



  return (
    <Container>
      <Header>
        {!loadingData && weatherData && (
          <View style={{ flexDirection: 'row' }}>
            <HeaderLocation style={{ fontWeight: 'bold' }}>
              {weatherData.name},
            </HeaderLocation>
            <HeaderLocation> {weatherData.sys.country}</HeaderLocation>
          </View>
        )}
        <ThemeSwitcher />
      </Header>

      <ImageBackground
        resizeMode="stretch"
        source={WorldMap}
        style={{
          width: '100%',
          height: '40%',
          flex: 1,
          alignItems: 'center',
        }}
      >
        {!loadingData ? (
          <Main>
            <Temperature>
              {weatherData?.main.temp && weatherData?.weather[0].description && (
                <>
                  <ImageView>
                          <Text style={{ fontSize: 20 , paddingTop: 160 }}>Giờ hiện tại : {formattedTime} - {formattedDate}</Text>
                    {weatherData?.weather[0].icon && (
                      <Image
                        source={weatherImage(weatherData?.weather[0].icon)}
                      />
                    )}
                  </ImageView>
                 <Text style={{ fontSize: 30 }}>{capitalize(weatherData?.weather[0].description)}</Text>
                 <Text style={{ fontSize: 20 }}>Độ ẩm: {weatherData?.main.humidity}%</Text>
                 <Text style={{ fontSize: 20 }}>Áp suất: {weatherData?.main.pressure} hPa</Text>
                 <Text style={{ fontSize: 15 }}>Cấp độ gió: {weatherData?.wind.deg}°</Text>
                 <Text style={{ fontSize: 18 }}>Tốc độ gió: {weatherData?.wind.speed} m/s</Text>


                 <TemperatureText>
                    {weatherData?.main.temp.toFixed(0)}
                    <TemperatureText style={{ color: colors.primary }}>
                      ℃
                    </TemperatureText>
                  </TemperatureText>
                </>
              )}
              <ReloadButton onPress={() => LoadWeatherData()}>

                <Image source={require('../../assets/refresh.png')} style={{width: 40 , height: 40 , marginTop : 30}} />

              </ReloadButton>
            </Temperature>

            <Footer>
              {weatherData?.main && (
                <>
                  <Text style={{ fontSize: 20 }} >
                    Thấp nhất: {weatherData?.main.temp_min}
                    <Text style={{ color: colors.primary , fontSize: 18  }}>℃</Text>
                  </Text>
                  <Text style={{ fontSize: 20 }} >
                    Cao nhất: {weatherData?.main.temp_max}
                    <Text style={{ color: colors.primary , fontSize: 18 }}>℃</Text>
                  </Text>
                </>
              )}
            </Footer>
          </Main>
        ) : (
          <ActivityContainer>
            <ActivityIndicator size="large" color={colors.text} />
          </ActivityContainer>
        )}
      </ImageBackground>
    </Container>
  )
}

export default Home
