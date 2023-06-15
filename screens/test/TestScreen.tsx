import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';

function TestScreen(): JSX.Element {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<YoutubeIframeRef>(null);

  useEffect(() => {
    // playerRef.current
    //   ?.getDuration()
    //   .then(getDuration => setDuration(getDuration));
  });

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }
  }, []);

  const params = {
    modestbranding: true,
    controls: true,
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <Pressable onPress={togglePlaying}> */}
        <View>
          <YoutubePlayer
            initialPlayerParams={params}
            height={300}
            play={playing}
            videoId={'8JVAIJy8kJA'}
            onChangeState={onStateChange}
            ref={playerRef}
          />
          <Pressable
            // TouchableOpacity to "steal" taps
            // absolutely positioned to the top
            // height must be adjusted to
            // just cover the top 3 dots
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              top: 0,
              right: 0,
              height: 50,
              width: 300,
              position: 'absolute',
            }}
          />
        </View>
        {/* </Pressable> */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default TestScreen;
