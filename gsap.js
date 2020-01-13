

            var t1 = new TimelineMax();
            t1.fromTo("#instagram",2, {
                x = -200,
                opacity=0,
            },
            {
                x = 0,
                opacity=1,
                ease:Expo.easeOut,
            })
            .fromTo("#background", 2,
            {
                x:-100,
            },
            {
                x:0,
                opacity:1,
                ease:Expo.easeOut,
            },"-=1")