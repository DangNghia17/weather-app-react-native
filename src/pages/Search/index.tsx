import React, { useCallback, useContext, useRef, useState } from 'react'
import { ActivityIndicator, Alert, ImageBackground } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from '../../components/Input'
import ThemeSwitcher from '../../components/ThemeSwitcher'

import apiOpenweather from '../../services/apiOpenweather'
import * as Yup from 'yup'

import WeatherData from '../../types/WeatherData'
import { WEATHER_API_KEY } from '@env'

import {
  ActivityContainer,
  Container,
  Header,
  ImageView,
  Image,
  Main,
  Temperature,
  TemperatureText,
  Text,
  Content, styles,
} from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import weatherImage from '../../utils/weatherImage'
import { ThemeContext } from 'styled-components'
import { capitalize } from '../../utils/capitalize'

import WorldMap from '../../assets/WorldMap/WorldMap.png'

interface SearchFormData {
  search: string
}

function Search() {
  const formRef = useRef<FormHandles>(null)
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null)
  const [loadingData, setLoadingData] = useState(false)

  const { colors } = useContext(ThemeContext)

  const handleSearch = useCallback(async (data: SearchFormData, { reset }) => {
    try {
      setLoadingData(true)
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        search: Yup.string().required('Nhập tên của một thành phố'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
      const response = await apiOpenweather.get(
        `/weather?q=${data.search}&appid=${ WEATHER_API_KEY }&units=metric&lang=vi`,
      )
      setWeatherData(response.data)
      setLoadingData(false)
      reset()
    } catch (err) {
      setLoadingData(false)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      if (err.response?.data?.message === 'city not found') {
        formRef.current?.setErrors({
          search: 'Không tìm thấy thành phố',
        })

        Alert.alert(
          'Không tìm thấy thành phố',
          'Kiểm tra tên thành phố và thử lại',
        )
        return
      }

      Alert.alert(
        'Lỗi tìm kiếm',
     'Đã xảy ra lỗi khi tìm kiếm thành phố, vui lòng thử lại',
      )
    }
  }, [])

  return (
    <Container>
      <Header>
        <Text>Tìm kiếm thời tiết theo thành phố</Text>
        <ThemeSwitcher/>
      </Header>

      <Main>
        <Form ref={formRef} onSubmit={handleSearch}>
          <Input
            name="search"
            icon="search-location"
            placeholder="Madrid,New york,Hue,Ha noi ..."
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
            containerStyle={{ marginTop: 20 }}
          />
        </Form>
        <ImageBackground
          resizeMode="stretch"
          source={WorldMap}
          style={{
            width: '100%',
            height: '50%',
            flex: 1,
            alignItems: 'center',
          }}
        >
          {!loadingData ? (
            <>
              {weatherData?.main.temp && weatherData?.weather[0].description && (
                <Content>
                  <ImageView>
                    {weatherData?.weather[0].icon && (
                      <Image
                        source={weatherImage(weatherData?.weather[0].icon)}
                      />
                    )}
                  </ImageView>
                   <Text style={{ fontSize: 40 }}>
                     {weatherData.name}, {weatherData.sys.country}
                   </Text>
                    <Text style={{ fontSize: 20 }}>{capitalize(weatherData?.weather[0].description)}</Text>
                      <Text style={{ fontSize: 20 }}>Độ ẩm: {weatherData?.main.humidity}%</Text>
                       <Text style={{ fontSize: 20 }}>Áp suất: {weatherData?.main.pressure} hPa</Text>
                     <Text style={{ fontSize: 20 }}>Mực nước biển: {weatherData?.main.sea_level} m</Text>
                      <Text style={{ fontSize: 15 }}>Cấp độ gió: {weatherData?.wind.deg}°</Text>
                        <Text style={{ fontSize: 18 }}>Tốc độ gió: {weatherData?.wind.speed} m/s</Text>
                  <Temperature>

                    <TemperatureText>
                      {weatherData?.main.temp.toFixed(0)}
                      <TemperatureText style={{ color: colors.primary }}>
                        ℃
                      </TemperatureText>
                    </TemperatureText>
                  </Temperature>
                </Content>
              )}
            </>
          ) : (
            <ActivityContainer>
              <ActivityIndicator size="large" color={colors.text} />
            </ActivityContainer>
          )}
        </ImageBackground>
      </Main>
    </Container>
  )
}

export default Search
