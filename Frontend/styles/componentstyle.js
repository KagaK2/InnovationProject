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
    marginLeft: 16,
    paddingTop: 50,
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
    height: 130,
    width: '90%',
  },
  image: {
    width: 250,
    height: 130,
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
    marginBottom: 5,
    width: '90%',
    borderWidth: 0.01,
  },
  image: {
    width: '100%',
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
