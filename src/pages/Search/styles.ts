import styled from 'styled-components/native'
import {StyleSheet} from "react-native";

export const Container = styled.SafeAreaView`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex: 1;
  align-items: center;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 20px;
`

export const Main = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`

export const Temperature = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const TemperatureText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 75px;
  text-align: center;
  font-weight: bold;
`

export const ActivityContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const ImageView = styled.View`
  width: 100%;
  align-items: center;
`

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`
export const styles = StyleSheet.create({
  imageSearch: {
    height: 30,
    width: 30,
  },
  imageVoice: {
    width: 18, // Độ rộng của biểu tượng tìm kiếm
    height: 30, // Chiều cao của biểu tượng tìm kiếm
    // resizeMode: 'contain', // Đảm bảo rằng biểu tượng không bị méo
    marginLeft: 15
  }
})
