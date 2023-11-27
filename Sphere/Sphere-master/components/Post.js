// import { Image } from 'expo-image';

// import { View, Text } from 'react-native';
// import React from 'react';

// const url = 'https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/MRM_8583.JPG.webp';

// const Post = () => {
// 	const user = 'Satyam Wakchaure';
// 	const image = 'https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/MRM_8583.JPG.webp';
// 	const caption = 'This is a caption';
// 	return (
// 		<View>
// 			<Text>Post</Text>
// 			<Image source={url} className='  bg-white' style={{ width: '90%', height: 600 }} />
// 		</View>
// 	);
// };

// export default Post;
import React from 'react';
import { Image } from 'expo-image';
import { View, Text, ScrollView } from 'react-native';

const PostComponent = () => {
	return (
		<>
			{CellPost.map((post, index) => (
				<View
					key={index}
					className=' bg-[#222429] mx-2 my-1 rounded-md py-1 border border-black'>
					<View className=' p-1 w-full'>
						<Text className='text-white font-bold text-xl'>{post.name}</Text>
						<View className='flex-row justify-between'>
							<Text className='text-white/40 font-bold text-xs'>
								{post.name.replaceAll(' ', '').toLowerCase()}@paruluniversity.ac.in
							</Text>
							<Text className='text-white/40 font-bold text-xs'>2 days ago</Text>
						</View>
						<View className='w-full py-1'>
							<Image
								source={post.image}
								className=' rounded-md bg-white '
								style={{ aspectRatio: 16 / 9 }}
							/>
						</View>
					</View>
					<Text className='text-white/80 font-bold text-base py-2'>{post.caption}</Text>
					<View className='h-[1px] w-full bg-white/40 mt-1' />
				</View>
			))}
		</>
	);
};

export default PostComponent;

const CellPost = [
	{
		name: 'Cultural Affairs Cell',
		image: 'https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		caption: 'Putting the Vibrant in Be here, Be Vibrant',
	},
	{
		name: 'Internship Cell',
		image: 'https://plus.unsplash.com/premium_photo-1679547202646-331fe6ce8a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
		caption: 'Start early as an Intern',
	},
	{
		name: 'International Relations Cell',
		image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		caption: 'We are the bridge between you and the world',
	},
];

const Post = {
	arr: [
		'https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1692607146112-a25194375acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1692680887038-db37974e11ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1674773521442-81fa271b842d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1682903316408-ef37087a9fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1691854897534-228254c8a180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1682465124091-e3ba769564c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1692520703852-ecfefd7eb377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1685868556097-641c237f3fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1692715984205-451b1055249e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1692651294894-53c2f0a39064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1692712798353-a7754b750186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1692834101474-73911dfb4344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1692776205655-a10831536e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/file-1682622660962-5e4aae8e7b30image?dpr=2&auto=format&fit=crop&w=416&q=60',
		'https://images.unsplash.com/photo-1692318587239-75e0f05035ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1688510700053-a2ff570b9789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&w=1000&q=80',
		'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1669881240408-173209990149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1667796404562-6362e48ceb6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1692611901108-8d2e9442ae79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1692210495986-4e1c7dc883de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
	],
	arr2: [
		'https://media.istockphoto.com/id/842177604/photo/kathak-dancers-footwork.webp?b=1&s=170667a&w=0&k=20&c=RPox4PTsgsDDXoMn4yX_YlzajICrTBB9hF5Tc3l-fM8=',
		'https://media.istockphoto.com/id/151522831/photo/indian-female-performing-dance.webp?b=1&s=170667a&w=0&k=20&c=7aHUs3xrdvf8coLZNu5jMTcrJLR8HFybD-_rTK29JTQ=',
		'https://media.istockphoto.com/id/1278904330/photo/young-woman-diwali-celebration-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=xwzktVhmGpg1Sp4b5O4Bp4Uy3vrR3r2Fs7XYolNH9Go=',
		'https://media.istockphoto.com/id/172332576/photo/traditional-dancer-in-india.webp?b=1&s=170667a&w=0&k=20&c=-50IJseViQuHSjePZCymdJPkrz8rfK5D9JiG4-fPo58=',
		'https://media.istockphoto.com/id/502859607/photo/beautiful-girl-dancer-of-indian-classical-dance-bharatanatyam.webp?b=1&s=170667a&w=0&k=20&c=3o2NU1O5kFj-5tT-eMVEEAQ8rBfviBEEz8Vu4ZIeW-E=',
		'https://media.istockphoto.com/id/944112198/photo/dance-form-indian-classical-feet-with-ghungru-bharatnatyam-katthak.webp?b=1&s=170667a&w=0&k=20&c=2n3uTav4s60nJIbf_0I2WcZ15PsXQHy5A94wW623kX4=',
		'https://media.istockphoto.com/id/994292088/photo/traditional-indian-dancers.webp?b=1&s=170667a&w=0&k=20&c=UZJmkLXN0D5fVmhwUQxUCxF67YJdoH1f1vcGSxYNNro=',
		'https://media.istockphoto.com/id/507423458/photo/girl-dancing-classical-indin-dance-kuchipudi.webp?b=1&s=170667a&w=0&k=20&c=2YdSo0l-FAIOPzc4V4ct0Mic_fvx7rmKLJqWCrx8ytM=',
		'https://media.istockphoto.com/id/622917288/photo/thai-classical-mask-dance-of-the-ramayana-epic.webp?b=1&s=170667a&w=0&k=20&c=nhsj8jTFCO2Z-xh-AMxehXFEshp1keOYXHVx5j33hUk=',
		'https://media.istockphoto.com/id/1455317358/photo/happy-young-beautiful-girl-playing-with-colours-on-the-occasion-of-holi-festival.webp?b=1&s=170667a&w=0&k=20&c=Mtb3L9m4K6TpMpQYvEQBJoipv8RSDSzKfWrhaWbQ1lU=',
		'https://media.istockphoto.com/id/509995196/photo/portrait-of-beautiful-indian-woman-in-traditional-clothing.webp?b=1&s=170667a&w=0&k=20&c=SFErxqifpzHadvtke1SJdMignfav-RCmvv4ad2bMqrI=',
		'https://media.istockphoto.com/id/849698772/photo/bollywood-dancers-dress.webp?b=1&s=170667a&w=0&k=20&c=CJQMMAcAc2goMLE98nZSumn5JPo9bt8ci067YS-JYx4=',
		'https://media.istockphoto.com/id/1023344480/photo/dancing-performance-on-stage.webp?b=1&s=170667a&w=0&k=20&c=7N9kep6yv1Iaqx54IbLNkLXKl3gNblBij3bD7eydmyc=',
		'https://media.istockphoto.com/id/168521057/photo/traditional-indian-dancers.webp?b=1&s=170667a&w=0&k=20&c=yRJrySXwMiEkP0xwFUiyKTBx8I-HRiMA2V1QJ_aFsVU=',
		'https://media.istockphoto.com/id/533327527/photo/indian-women-throwing-colored-holi-powder.webp?b=1&s=170667a&w=0&k=20&c=KSpLZV9zPBfT-tYzkpxhMrmk90tBWa_C33IOgN6FkzQ=',
		'https://media.istockphoto.com/id/484400522/photo/taj-mahal-dream.webp?b=1&s=170667a&w=0&k=20&c=0wU9gBiIVZechRmrAt20Eh_FrimVmP3Bvxy75q_OzcU=',
		'https://media.istockphoto.com/id/125144157/photo/beautiful-rajasthani-girl-dancing.webp?b=1&s=170667a&w=0&k=20&c=IxsWOBnbIFOlyJF1Dr5SsTf1zKPGKB4tbit5610wsao=',
		'https://media.istockphoto.com/id/1135984800/photo/young-lady-performing-traditional-indian-folk-dance.webp?b=1&s=170667a&w=0&k=20&c=6vSiMF1UXlm4GElyVTF1_IVUVaANfBYsCwHLykcDzm4=',
		'https://media.istockphoto.com/id/478141600/photo/celebrating-the-holi-festival-of-colors.webp?b=1&s=170667a&w=0&k=20&c=J-nVIcWjcYZV0_tlD4DZM6g21YFpvkvkWFjKfpBLc-o=',
		'https://media.istockphoto.com/id/94365555/photo/avahittha-hasta-of-indian-dance-bharata-natyam.webp?b=1&s=170667a&w=0&k=20&c=SbXvcd5PVZIU5UXTGsnrDlm19jcJgN9Q19sIoqiX5KM=',
		'https://plus.unsplash.com/premium_photo-1682096128630-c5ec99af10f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1632292611299-980426b386a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1569851935333-6ca1448cc299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1682093662445-e0580ae4904d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1547106510-6aec13ee41ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1626193082209-e405220d147b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1593408995262-1d8933c37afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://plus.unsplash.com/premium_photo-1682093611462-76ab04a16263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1626193080663-0587c0d0f994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1593507721017-4072754a93ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1583661676314-155d504c12ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/file-1635990755334-4bfd90f37242image?dpr=2&auto=format&fit=crop&w=416&q=60',
		'https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1547106500-9b566874481b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
		'https://images.unsplash.com/photo-1524080909555-5ca9077eaeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://images.unsplash.com/photo-1589363348179-3cced6b7b6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGRhbmNlfGVufDB8fDB8fHww&w=1000&q=80',
		'https://media.istockphoto.com/id/638509358/photo/family-and-traditional-music-group-from-rajasthan-india.webp?b=1&s=170667a&w=0&k=20&c=2zLujKVWtDGVal5a91Atj7Xz4KAcQBBKDeMUn3o6lQA=',
		'https://media.istockphoto.com/id/1305862517/photo/feet-of-indian-classical-girl-kathak-dancer-in-traditional-dress-or-costume-and-ghungroo.webp?b=1&s=170667a&w=0&k=20&c=hL2-vwSt6JFNnZREyu3rsshI0gU-7PwTgGVjRY5tUyU=',
		'https://media.istockphoto.com/id/164631313/photo/dancer.webp?b=1&s=170667a&w=0&k=20&c=z3TQNIZmZMhu5WY0VGSLV9Ttkqt1NRft8VDQoHvK950=',
		'https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.webp?b=1&s=170667a&w=0&k=20&c=IMWmDwwPtjUYDcdDWtJpTlMExkzgpocNaH2NhzbVe04=',
		'https://media.istockphoto.com/id/638509358/photo/family-and-traditional-music-group-from-rajasthan-india.webp?b=1&s=170667a&w=0&k=20&c=2zLujKVWtDGVal5a91Atj7Xz4KAcQBBKDeMUn3o6lQA=',
		'https://media.istockphoto.com/id/1305862517/photo/feet-of-indian-classical-girl-kathak-dancer-in-traditional-dress-or-costume-and-ghungroo.webp?b=1&s=170667a&w=0&k=20&c=hL2-vwSt6JFNnZREyu3rsshI0gU-7PwTgGVjRY5tUyU=',
		'https://media.istockphoto.com/id/164631313/photo/dancer.webp?b=1&s=170667a&w=0&k=20&c=z3TQNIZmZMhu5WY0VGSLV9Ttkqt1NRft8VDQoHvK950=',
		'https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.webp?b=1&s=170667a&w=0&k=20&c=IMWmDwwPtjUYDcdDWtJpTlMExkzgpocNaH2NhzbVe04=',
		'https://media.istockphoto.com/id/476021886/photo/beautiful-young-ballet-dancer-jumping-on-a-lilac-background.webp?b=1&s=170667a&w=0&k=20&c=MpJYlEJktBj3n29c_VMjfgFpLT5YF63tUg61RcseGxU=',
		'https://media.istockphoto.com/id/471957987/photo/beautiful-girl-dancer-of-indian-classical-dance-bharatanatyam.webp?b=1&s=170667a&w=0&k=20&c=-XXLJ-JK_aQeFNaFxRBnGvg6tMD6IdT4VqyJyBEOd00=',
		'https://media.istockphoto.com/id/472165062/photo/beautiful-girl-in-sari.webp?b=1&s=170667a&w=0&k=20&c=U_RrjS_oyS7GlQyFIRV1OJO-Cd-kUeeLGZyI1mo1bpY=',
		'https://media.istockphoto.com/id/155380404/photo/indian-female-classical-dancer-bharata-natyam.webp?b=1&s=170667a&w=0&k=20&c=jVwemcFf7VfnTItUERgHO3Fw950bxTdKl0T5UbyaVzE=',
	],
};

const posts = [
	{
		name: 'Cultural Department',
		image: 'https://media.istockphoto.com/id/484400522/photo/taj-mahal-dream.webp?b=1&s=170667a&w=0&k=20&c=0wU9gBiIVZechRmrAt20Eh_FrimVmP3Bvxy75q_OzcU=',
		caption: 'Putting the Vibrant in Be here, Be Vibrant',
	},
	{
		name: 'Internship Cell',
		image: 'https://plus.unsplash.com/premium_photo-1679547202646-331fe6ce8a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
		caption: 'Start early as an Intern',
	},
	{
		name: 'Internal Relations Cell',
		image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		caption: 'We are the bridge between you and the world',
	},
];
