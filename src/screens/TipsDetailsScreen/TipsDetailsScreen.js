import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import {COLORS, FONTS} from '../../constants/Theme';
import {Appbar} from 'react-native-paper';

const HEALTH_TIPS_DATA = {
  'Nutrition Tips': [
    {
      title: '1. Keep up fruit and vegetable intake',
      description:
        'Purchasing, storing and cooking fresh vegetables can be challenging in a lockdown, especially when parents are advised to limit trips outside of the home. But wherever possible, it’s important to ensure children are still getting plenty of fruit and vegetables in their diet.\n\n Whenever it is possible to get hold of fresh produce, do so. As well as being eaten fresh, fruits and vegetables can be frozen where possible and will retain most of their nutrients and flavor. Using fresh vegetables to cook large batches of soups, stews or other dishes will make them last longer and provide meal options for a few days. These can also be frozen where possible and then quickly reheated.',
      category: 'Nutrition Tips',
    },
    {
      title:
        '2. Swap in healthy dried or canned alternatives when fresh produce is not available',
      description:
        'Fresh produce is almost always the best option, but when it is not available there are plenty of healthy alternatives that are easy to store and prepare.\n\nCanned beans and chickpeas, which provide an abundance of nutrients, can be stored for months or even years, and can be included in meals in many ways. Canned oily fish such as sardines, mackerel and salmon are rich in protein, omega 3 fatty acids and a range of vitamins and minerals. These can be used cold in sandwiches, salads or pasta dishes, or cooked as part of a warm meal.\n\nCanned vegetables, such as tomatoes, do tend to contain lower quantities of vitamins than fresh produce, but they are a great fallback option when fresh produce or frozen vegetables are hard to come by.\n\nried goods like dried beans, pulses and grains such as lentils, split peas, rice, couscous or quinoa are also nutritious, long-lasting options that are tasty, affordable and filling. Rolled oats cooked with milk or water can serve as an excellent breakfast option, and can be spiced up with yoghurt, chopped fruits or raisins. ',
      category: 'Nutrition Tips',
    },
    {
      title: '3. Build up a stock of healthy snacks',
      description:
        'Children often need to eat a snack or two during the day to keep them going. Rather than giving kids sweets or salty snacks, opt for healthier options like nuts, cheese, yoghurt (preferably unsweetened), chopped or dried fruits, boiled eggs, or other locally available healthy options. These foods are nutritious, more filling, and help build healthy eating habits that last a lifetime.',
      category: 'Nutrition Tips',
    },
    {
      title: '4. Limit highly processed foods',
      description:
        'While using fresh produce may not always be possible, try to limit the amount of highly processed foods in your shopping basket. Ready-to-eat meals, packaged snacks and desserts are often high in saturated fat, sugars and salt. If you do purchase processed foods, look at the label and try to choose healthier options containing less of these substances. Try to also avoid sugary drinks and instead drink lots of water. Adding fruits or vegetables like lemon, lime, cucumber slices or berries to water is a great way to add an extra twist of flavor.',
      category: 'Nutrition Tips',
    },
    {
      title:
        '5. Make cooking and eating a fun and meaningful part of your family routine',
      description:
        'Cooking and eating together is a great way to create healthy routines, strengthen family bonds and have fun. Wherever you can, involve your children in food preparation – small children can help with washing or sorting food items while older children can take on more complex tasks and help to set the table.\n\nTry as much as possible to stick to fixed mealtimes as a family. Such structures and routine can help reduce anxiety for children in these stressful situations.',
      category: 'Nutrition Tips',
    },
  ],
  'Fitness Tips': [
    {
      title: '1. Take advantage of free virtual workout classes',
      description:
        'Let the exercise come to you. Many fitness companies are offering free virtual classes and resources to access from anywhere, at any time.Nike now offers their Nike Training Club Premium service for free, with nearly 200 streaming workouts and tips from Nike’s own experts. Orangetheory Fitness offers free 30-minute workouts every day, while Peloton offers a free 90-day trial, including virtual strength training and yoga classes — not requiring a Peloton treadmill or bike.Need a hand with strength training at home? Noel suggests using milk cartons, soup cans or water bottles to add a little weight lifting into your routine.',
      category: 'Fitness Tips',
    },
    {
      title: '2. Never underestimate the power of stretching',
      description:
        'One nice thing about stretching is you don’t need much space to do it. At-home yoga or even simple stretches can relieve muscle tension and help realign your posture. Get creative: Noel suggests using a belt, tie, towel or other household items to help stretch out.\n\nFor individuals working at a home desk all day, try some simple stretches to open up your chest and back: Stand straight and lean down to touch your toes, or link your hands behind your back and bend over to elongate your spine.\n\nAnother stretch for improving posture is the shoulder roll: Sit or stand comfortably. As you inhale, raise your shoulders to your ears. As you exhale, pull your shoulder blades down and together. Do this five or 10 times in a row, a few times a day.',
      category: 'Fitness Tips',
    },
    {
      title: '3. You’re never too old to rock out',
      description:
        "It's no secret that professional dancers are in incredible shape, but you don't have to be a pro to reap the health benefits of dancing. Turn on those guilty pleasure tunes or livestream one of the countless free concerts on social media — and dance.\n\nA 150-pound person can burn 95 calories dancing for just 15 minutes — that's four to five songs — and it’s one of the greatest (and most enjoyable) stress-relieving activities.",
      category: 'Fitness Tips',
    },
    {
      title: '4. Yoga',
      description:
        'Yoga can be done just about anywhere. All you need to get started is a mat, comfortable attire and a program to follow. Yoga mats and other equipment can be ordered for home delivery from multiple online outlets. You can find a wealth of tutorials on YouTube or in your app store , including:\n\n1. Beginner’s Guide from YogaInternational.com\n\n2. Yoga for Beginners on YouTube\n\n3. 10 Best Yoga Apps from Women’s Health Magazine',
      category: 'Fitness Tips',
    },
  ],
  'Mental Health Tips': [
    {
      title: '1. Be social',
      description:
        'The first stage is to keeping your cool when you feel anxious or lonely. Remember: if your entire company is working remotely, they’re likely experiencing the same kind of stress. It’s important to know you’re not alone. And the best way to do that is to connect with each other more often than ever. But that also does not mean that you’re constantly on phone or messaging platforms, because that may hamper work.\n\nBeing social can also help you stay productive. Plan regular 1:1s to check 1:1s to check in on your teammates emotionally as well as professionally. Use instant messaging and tools like Asana to keep your team on track. The more you move forward as normal, the more things will keep feeling normal.',
      category: 'Mental Health Tips',
    },
    {
      title: '2. 24*7 social media is a big NO',
      description:
        'It’s okay to log off. In fact, it’s okay to completely unplug at times. Give yourself that break from both social media and work—the do not disturb function is there for a reason. Your work will still be there after you finish your meal. Use tools like Screen Time to manage your social media usage and be cautious about fake news. Take the time to seek out accounts that help your mental well-being to counteract the stress of social media.',
      category: 'Mental Health Tips',
    },
    {
      title: '3. Stay active',
      description:
        'It’s easy to spend your entire remote workday on your couch or bed, in your pyjamas, staring at a screen for nine hours straight. But that’s not good for your body. The steps you take in an office, for instance walking to conference rooms for meetings, going to the bathroom or downstairs to pick up your lunch or even walking to a co-worker’s desk can be replicated at home—consider taking “desk breaks” where you move to a different workspace. And get some sunshine and fresh air outside! Download a yoga app or a fitness app, do that 30 mins of workout every day. Maybe, even in between work hours.',
      category: 'Mental Health Tips',
    },
    {
      title: '4. Create and maintain a routine',
      description:
        'In a daily office setting, you may spend an hour commuting to work and 30 minutes settling into the office, take a 10 a.m. coffee break with your co-worker, and then work straight until lunch. It’s even more difficult to build your day like this when you’re working from home. So get dressed and ready for your day when you wake up, even if that means just changing from your pyjamas to another set of pyjamas. Make your favourite coffee and breakfast and take the usual breaks that you would in the office. Take that lunch break and nourish yourself away from your workspace as you would do at your office. And at the end of the day, log off from work completely.',
      category: 'Mental Health Tips',
    },
    {
      title: '5. Find your calm',
      description:
        'Managing your mental wellness is just as important after work as it is during working hours. So once you log off, put your phone on ‘do not disturb’ and seek comfort in the things that matter to you and make you happy. Focusing on a hobby, watching a film or reading a book, making a phone call to a friend or a family member, taking a nap, or cooking your favourite meal. You’ve put in a hard day in the middle of a hard time—you deserve to be well.',
      category: 'Mental Health Tips',
    },
  ],
  'Hygiene Tips': [
    {
      title: '1. Personal hygiene',
      description:
        'Yes, we know you’ve heard all this a million times already. It bears repeating. There are a lot of things we don’t know about this virus, but we do know it spreads through respiratory droplets produced when an infected person coughs or sneezes. Other individuals may be infected when they touch a surface that has virus particles on it and then touch their own mouth, nose, or eyes. Hand hygiene is the very best weapon in any fight between human and contagious disease.\n\n1. Wash your hands frequently with soap and water, scrubbing for at least 20 seconds, or use an alcohol-based hand sanitizer.\n\n2. Don’t touch your face. This is a lot harder than it sounds and requires conscious effort. The average person touches their face 23 times an hour, and about half of the time, they’re touching their mouth, eyes, or nose — the mucosal surfaces that COVID-19 infects.\n\n3. Cover coughs and sneezes with the inside of your elbow or upper arm.\n\n4. Stay home if you are feeling sick, and seek appropriate medical guidance.',
      category: 'Hygiene Tips',
    },
    {
      title: '2. Cleaning around the home',
      description:
        'Use the right product. According to the CDC, diluted household bleach solutions, alcohol solutions with at least 70% alcohol, and most common EPA-registered household disinfectants should be effective against the COVID-19 virus. See the CDC’s environmental cleaning and disinfection recommendations and this list of EPA-registered disinfectants.\n\nUse the product right. First, clean dirt off of the surface. Then wipe the surface with disinfectant. Leave the surface wet with disinfectant for as many minutes as the product instructions require. This is a vital step that people often miss. It’s not enough to just wipe the surface and go.\n\nDo not reuse disinfectant wipes on multiple surfaces. This can transfer germs from the used wipe to other surfaces. Use one wipe for each surface and then throw it out.\n\nDo not dry surfaces after wiping them down. Surfaces you are disinfecting need to stay wet for the amount of time listed on the label. The contact time with the disinfectant is what actually kills the germs.',
      category: 'Hygiene Tips',
    },
    {
      title: '3. Cleaning clothes',
      description:
        'Launder items with laundry soap or household detergent. Consider using a detergent that contains bleach. However, be sure to read the product description and guidelines to avoid potentially ruining certain clothing items. Consider soaking clothes in a solution containing quaternary ammonium before washing them.\n\nChoose the warmest available water setting. The WHO recommend water temperatures between 60–90°C (140–194°F). However, high temperatures can damage or shrink delicate clothing items, so remember to read the care labels.\n\nDisinfect laundry baskets with 0.1% sodium hypochlorite or one of these household disinfectants, which the Environmental Protection Agency (EPA) have approved.\n\nWear gloves when doing laundry. Wash the hands with warm water and soap immediately after removing the gloves. If gloves are not available, wash the hands immediately after handling dirty clothing and avoid touching the face.',
      category: 'Hygiene Tips',
    },
    {
      title: '4. Handling and preparing food',
      description:
        'While at present there is no evidence of people catching the COVID-19 virus from food or food packaging, it may be possible that people can become infected by touching a surface or object contaminated by the virus and then touching their face. The greater risk comes from being in close contact with other people while outside food shopping or receiving a food delivery (as receiving any delivery in areas with local transmission). As always, good hygiene is important when handling food to prevent any food-borne illnesses.\n\nRemove any unnecessary packaging and dispose into a waste bin with a lid.Remove food from take-out containers, place on a clean plate and dispose of the container. Packaging like cans can be wiped clean with a disinfectant before being opened or stored. Wash unpackaged produce, such as fruit and vegetables, thoroughly under running water.Wash your hands with soap and water, or use an alcohol-based hand rub, immediately afterwards.\n\nWash your hands thoroughly with soap and water for at least 20 seconds before preparing any food.Use separate chopping boards to prepare uncooked meat and fish.Cook food to the recommended temperature.Where possible, keep perishable items refrigerated or frozen, and pay attention to product expiry dates. Aim to recycle or dispose of food waste and packaging in an appropriate and sanitary manner, avoiding build-up of refuse which could attract pests.Wash your hands with soap and water for at least 20 seconds before eating and make sure your children do the same.Always use clean utensils and plates.',
      category: 'Hygiene Tips',
    },
    {
      title: '5. Practice “social distancing”',
      description:
        'Social distancing is exactly what it sounds like: keeping your distance from other people. It’s often used to describe public health measures imposed by local governments — measures like quarantining the sick, closing schools, and canceling public gatherings. And, when it’s done early enough during a pandemic illness, it’s been shown to save lives. But you don’t have to wait for the government to tell you what to do; here’s what you can do now:\n\n1. Keep your distance. The number of people in any given location is important, but density is even more important. Respiratory droplets from a cough or sneeze can travel up to six feet and be inhaled into the lungs of people within range. Protect yourself by staying out of range.\n\n2. Don’t hug or shake hands. If you have to meet with someone in person, find an alternative greeting. While research has shown that fist bumps —and even high fives — transfer far less bacteria than a handshake, more distant options are better. Tip your hat, wave, or curtsy.\n\n3. Make a conscious effort to avoid crowds. For example, with warmer weather upon us, think about walking or riding a bike to campus instead of taking the subway or a bus. This recommendation relates both to keeping your distance and avoiding contaminated surfaces, because the more people, the more those common surfaces get touched.',
      category: 'Hygiene Tips',
    },
  ],
};

const TipsDetailsScreen = props => {
  const {category} = props.route.params;
  console.log(HEALTH_TIPS_DATA[category]);
  console.log({category});
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: COLORS.secondary,
          justifyContent: 'center',
        }}>
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title={category} titleStyle={{...FONTS.h3}} />
      </Appbar.Header>
      <FlatList
        data={HEALTH_TIPS_DATA[category]}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

function renderItem(item) {
  return (
    <View style={styles.healthTipsCard}>
      <Text style={styles.healthTipstitle}>{item.title}</Text>
      <Text style={{...FONTS.body4, color: COLORS.black}}>
        {item.description}
      </Text>
    </View>
  );
}

export default TipsDetailsScreen;
