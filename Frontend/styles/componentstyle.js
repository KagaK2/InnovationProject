import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  headline: {
    fontSize: 40,
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
    marginLeft: 24,
  },
  colorBody: {
    backgroundColor: 'white',
  },
  jumbo: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFA06E',
    borderRadius: 4,
  },
});
export const SmallCardStyle = StyleSheet.create({
  card: {
    marginRight:8,
    marginBottom:8,
  },
  image : {
    borderRadius: 4,
    borderWidth: 0.01,
    width: 135,
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
    width: 300,
    height: 130,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const ThumbnailCardStyle = StyleSheet.create({
  card: {
    marginRight:8,
    marginBottom:8,
  },
  image: {
    borderRadius: 4,
    borderWidth: 0.01,
    width: 135,
    height: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const BigCardStyle = StyleSheet.create({
  card: {
    paddingVertical: 16,
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 160,
    marginVertical: 16,
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