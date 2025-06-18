// app/splash2.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import TText from './components/StyledText';


export default function SplashTwo() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home'); 
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/splashimg.jpg')} 
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
        <SafeAreaView >
        <View className='flex flex-col items-center h-[100%] justify-evenly'>
            <View className='px-10'>
                <TText className='text-center text-[20px] mb-4 font-montserrat-semibold'>OUR VISION</TText>
                <TText className='text-center'>To proclaim the Gospel of Jesus Christ to all people in a comprehensive way from our locality to the rest of the world.</TText>
            </View>
            <View className='px-10'>
                <TText className='text-center text-[20px] mb-4 font-montserrat-semibold'>OUR MISSION</TText>
                <TText className='text-center'>Our mission is to prepare the people for the kingdom of God through Evangelism, Christian Education and Christ love.</TText>
            </View>
            <View className='px-10'>
                <TText className='text-center text-[20px] mb-4 font-montserrat-semibold'>OUR CORE VALUES</TText>
                <TText className='text-center'>Holiness & Soul Winning</TText>
            </View>
        </View>
        </SafeAreaView>
    </ImageBackground>
  );
}


