import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",

  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: 'black',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 13,
    marginLeft: 10,
    marginRight: 13,
    borderWidth: 1, // Độ rộng của viền
    borderColor: 'white', // Màu sắc của viền
  },


  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  roundedImage: {
    width: 200,
    height: 130,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10

  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    color: "white",
    marginRight: 30,
    fontSize: 17,
    fontWeight: "900",
    fontStyle: "italic",
    textTransform: "capitalize",
    marginTop: 12,
    marginLeft: 25,
    alignSelf: "center",
    lineHeight: 25, // Điều chỉnh độ cao của mỗi hàng
    maxHeight: 25, // Số lượng hàng * độ cao của mỗi hàng
  },

  contentLocationText: {
    color: "white",
    alignSelf: "flex-end",
    marginRight: 10,
    fontStyle: "italic",
    marginBottom: 12,
    marginTop: 15
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  fiveStar: {
    width: 120,
    height: 60,
    alignSelf: "flex-end",
    marginTop: -130,
    marginRight: 15,
    marginBottom: 10
  },
  price: {
    color: "white",
    fontSize: 15,
    fontStyle: "italic",
    alignSelf: "flex-end",
    marginRight: 10,

  },
  heightCardContainer: {
    height: 88
  },
  searchInput: {
    width: 300,
    height: 40,
    marginBottom: 13,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20, // Số này có thể được điều chỉnh để làm tròn góc nút
    paddingHorizontal: 15, // Để tăng khoảng cách giữa nội dung và viền
    borderWidth: 1, // Thêm đường viền nếu cần
    borderColor: "#ccc", // Màu của đường viền (nếu được thêm),
    color: "black",

  },
  searchIcon: {
    width: 30, // Độ rộng của biểu tượng tìm kiếm
    height: 30, // Chiều cao của biểu tượng tìm kiếm
    resizeMode: 'contain', // Đảm bảo rằng biểu tượng không bị méo
    marginBottom: 13,
    marginLeft: 15
  },
  searchContainer: {
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    paddingHorizontal: 16, // Padding ở cả hai bên
    borderRadius: 8, // Bo tròn góc
  },


});

export default styles
