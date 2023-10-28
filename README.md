Đã gitignore android/ trong .gitignore

'.env' para '.env'(Weather API)
# Dùng nodejs v16 , API mobile 32 ,gradle 7.5.1
"react": "^18.2.0",
"react-native": "^0.70.13",
"react-native-vector-icons": "^9.2.0",


rồi vào sửa url restAPI trong các file data( cụ thể là data.tsx , thay đổi biến apiURL) bằng cách :
1. terminal : ipconfig
2. tìm port đang chạy (ipv4 address) và copy
3. sửa lại urlAPI giống
Example : http://192.168.1.18:3000/api/news

4. run file db trước khi run dự án bằng cách terminal thư mục connectDB và node server.js




