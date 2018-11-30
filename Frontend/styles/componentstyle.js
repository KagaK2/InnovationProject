import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
  },
  largeBody: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
  secondBody: {
    fontSize: 12,
    opacity: 70,
  },
  placeholder: {
    fontSize: 12,
    opacity: 70,
    fontStyle: 'italic',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  appBody: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 50,
  },
  focusAppBody: {
    flex: 1,
  },
  focusColorBody: {
    backgroundColor: 'grey',
  },
  colorBody: {
    backgroundColor: 'white',
  },
  jumbo: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  bigJumbo: {
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 4,
  },
  tags: {
    backgroundColor: '#FFA06E',
    padding: 8,
    borderRadius: 50,
    borderWidth: 0.01,
    marginRight: 5,
  },
  tagText: {
    color: "#FFFFFF",
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileIcon: {
    borderWidth:1,
    borderColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderRadius:20,
  },
  profileIconContainer: {
    paddingHorizontal: 10,
  },
  hurray: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 'bold',
  },
  numberOfEvents: {
    color: "#000000",
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  eventIcon: {
    borderWidth:1,
    borderColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius: 5,
    borderWidth: 0.01,
  },
  otherUserAppBody: {
    flex: 1,
    paddingLeft: 16,
  },
});
export const SmallCardStyle = StyleSheet.create({
  card: {
    marginRight:8,
    marginBottom:8,
    width: '45%',
  },
  image : {
    borderRadius: 4,
    borderWidth: 0.01,
    width: '100%',
    height: 119,
  },
  date : {
    color: '#BABABA',
  },
  title: {
    color: '#262626',
  },
});
export const CarouselCardStyle = StyleSheet.create({
  card: {
    height: 140,
    width: '90%',
  },
  image: {
    width: 230,
    height: 140,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  }
});
export const ThumbnailCardStyle = StyleSheet.create({
  card: {
    marginRight:8,
    marginBottom:8,
    width: '45%',
  },
  image: {
    borderRadius: 4,
    borderWidth: 0.01,
    width: '100%',
    height: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const BigCardStyle = StyleSheet.create({
  card: {
    paddingVertical: 16,
    marginVertical: 7,
    //width: '90%',
    borderWidth: 0.01,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 5,

  },
  image: {
    width: null,
    height: 160,
    marginVertical: 16,
    //resizeMode: 'stretch',
  },
  hashtagdate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
  },
  titleText: {
    paddingLeft: 16,
    marginTop: 13,
  },
  going: {
    paddingLeft: 16,
  }
});

export const SearchBarStyle = StyleSheet.create({
  searchBar: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    borderRadius: 7,
    padding: 8,
    marginTop: 10,
    marginRight: 16,
  }
});
