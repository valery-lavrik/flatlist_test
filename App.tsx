import React from 'react';
import { FlatList, Dimensions, Image } from 'react-native';



export default function App() {

    const IMAGES = [{ "id": 54760676, "url": "https://img.com-x.life/comix/17767/610982/1733835303.7601.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 0 }, { "id": 54760677, "url": "https://img.com-x.life/comix/17767/610982/1733835304.6572.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 1 }, { "id": 54760678, "url": "https://img.com-x.life/comix/17767/610982/1733835305.5284.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 2 }, { "id": 54760679, "url": "https://img.com-x.life/comix/17767/610982/1733835306.4632.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 2000, "height": 1538, "index": 3 }, { "id": 54760680, "url": "https://img.com-x.life/comix/17767/610982/1733835307.9671.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 4 }, { "id": 54760681, "url": "https://img.com-x.life/comix/17767/610982/1733835308.9042.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 5 }, { "id": 54760682, "url": "https://img.com-x.life/comix/17767/610982/1733835309.8052.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 6 }, { "id": 54760683, "url": "https://img.com-x.life/comix/17767/610982/1733835310.6976.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 7 }, { "id": 54760684, "url": "https://img.com-x.life/comix/17767/610982/1733835311.5839.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 2000, "height": 1538, "index": 8 }, { "id": 54760685, "url": "https://img.com-x.life/comix/17767/610982/1733835313.1639.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 2000, "height": 1538, "index": 9 }, { "id": 54760686, "url": "https://img.com-x.life/comix/17767/610982/1733835314.679.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 10 }, { "id": 54760687, "url": "https://img.com-x.life/comix/17767/610982/1733835315.5782.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 11 }, { "id": 54760688, "url": "https://img.com-x.life/comix/17767/610982/1733835316.4692.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 12 }, { "id": 54760689, "url": "https://img.com-x.life/comix/17767/610982/1733835317.383.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 13 }, { "id": 54760690, "url": "https://img.com-x.life/comix/17767/610982/1733835318.379.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 14 }, { "id": 54760691, "url": "https://img.com-x.life/comix/17767/610982/1733835319.2762.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 15 }, { "id": 54760692, "url": "https://img.com-x.life/comix/17767/610982/1733835320.1779.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 2000, "height": 1538, "index": 16 }, { "id": 54760693, "url": "https://img.com-x.life/comix/17767/610982/1733835321.7229.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 17 }, { "id": 54760694, "url": "https://img.com-x.life/comix/17767/610982/1733835322.6278.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 18 }, { "id": 54760695, "url": "https://img.com-x.life/comix/17767/610982/1733835323.5127.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 19 }, { "id": 54760696, "url": "https://img.com-x.life/comix/17767/610982/1733835324.4145.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 20 }, { "id": 54760697, "url": "https://img.com-x.life/comix/17767/610982/1733835325.3065.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 21 }, { "id": 54760698, "url": "https://img.com-x.life/comix/17767/610982/1733835326.2234.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 1200, "height": 1845, "index": 22 }, { "id": 54760699, "url": "https://img.com-x.life/comix/17767/610982/1733835327.1076.jpg", "headers": { "Referer": "https://com-x.life/" }, "cache_key": "2818811-0", "width": 2000, "height": 1538, "index": 23 }];

    const W = Dimensions.get('screen').width;
    const initialScrollIndex = 20;

    const gettSizeOfTheImageToTheScreen = (item) => parseInt(((W / item.width) * item.height), 10)



    const cumulativeHeights = React.useMemo(() => {
        return IMAGES.reduce((acc, item, index) => {
            const currentHeight = gettSizeOfTheImageToTheScreen(item);
            acc.push((acc[index - 1] || 0) + currentHeight); // Add current height to the previous sum
            return acc;
        }, []);
    }, [IMAGES, W]);



    const gettSizeOfAllImagesToTheScreen = (index) => cumulativeHeights[index - 1] || 0; // Return 0 for index 0


    return (
        <FlatList
            data={IMAGES}
            initialNumToRender={3}
            maxToRenderPerBatch={2}
            initialScrollIndex={initialScrollIndex}
            keyExtractor={(item) => `${item.id}`}
            getItemLayout={(data, index) => {
                const ITEM_HEIGHT = gettSizeOfTheImageToTheScreen(data[index]);

                return {
                    length: ITEM_HEIGHT,
                    offset: gettSizeOfAllImagesToTheScreen(index),
                    index,
                };
            }}
            renderItem={({ item }) => (
                <Image
                    style={{
                        width: W,
                        height: gettSizeOfTheImageToTheScreen(item),
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: item.url,
                        headers: item.headers,
                    }}
                />
            )}
        />
    );
}
