export default tourGuides = [
  {
    id: 1,
    name: "Eunwoo",
    about: "Hello! My name is Eunwoo",
    nationality: require("./assets/korea.png"),
    rating: 4.8,
    category: {
      age: 23,
      gender: "M",
      price: 100,
    },
    places: ["China Town", "Wakeboarding at Taco Lake", "King Rama IX Park"],
    languages: ["Korean", "English"],
    description:
      "I was born and raised in both South Korea and fluent in both English and Korean! :) II will be starting a Neurosciences PhD at Stanford University this year (2020). 저는 한국에서 태어나서 미국으로 이민 온 후, 고등학교를 전교1등으로 졸업하고, 노트르담 대학교에서 신경과학을 전공했습니다. 올해 (2020년) 스탠포드 대학교에서 신경과학 박사과정을 시작할 예정이며, 여름방학을 한국어와 영어를 가르치면서 보내려고 합니다. ^^",
    status: "online",
    cover: require("./assets/videoPlayer.png"),
    photo: require("./assets/eunwoo.png"),
    photos: [
      require("./assets/eunwoo1.jpg"),
      require("./assets/eunwoo4.jpg"),
      require("./assets/eunwoo3.jpg"),
      require("./assets/eunwoo2.jpg"),
    ],
    tourPlaces: {
      "China Town":
        "Do you know where is the best place to eat Chicken and Beer? Yes, Yaowarat is the place. You can enjoy delicious food and great view at night. Also souvenirs and temples are located around.. Let's go this awesome place together!",
      "Wakeboarding at Taco Lake":
        "Terrific experience for people who loves extreme sport. WakeBoarding is One of the best sporty outdoor activities. It is a community friendly and very chill place for everyone.",
      "King Rama IX Park":
        "Who is looking for a natural escape? Come this way. King Rama IX Park have a lovely botany, boat rides on the lake and sounds of wildlife. You would not believe that you were in the city. Perfect picnic place for family, youngsters and lovers.",
    },
  },

  {
    id: 2,
    name: "Suzy Bae",
    about: "About me",
    nationality: require("./assets/korea.png"),
    rating: 4.3,
    category: {
      age: 22,
      gender: "F",
      price: 100,
    },
    places: ["China Town", "Baiyoke Tower", "Dog in Town Ari"],
    languages: ["Korean", "English", "Mandarin", "Thai"],
    description:
      "I studied English in Ireland so I can speak Korean and English Fluently. I have lots of interest so we can talk easily from funny things to serious things. I love playing piano and guitar.",
    status: "online",
    cover: require("./assets/videoPlayer.png"),
    photo: require("./assets/suzyBae.png"),
    photos: [
      require("./assets/suzyBae1.jpeg"),
      require("./assets/suzyBae2.jpeg"),
      require("./assets/suzyBae3.jpg"),
      require("./assets/suzyBae4.jpeg"),
    ],
    tourPlaces: {
      "China Town":
        "Do you know where is the best place to eat Chicken and Beer? Yes, Yaowarat is the place. You can enjoy delicious food and great view at night. Also souvenirs and temples are located around.. Let's go this awesome place together!",
      "Baiyoke Tower":
        "Have you heard about Baiyoke Tower? You can enjoy shopping, food and sightseeing here all at one time! Why don't you look around the tallest building in Thailand!? ",
      "Dog in Town Ari":
        "I love dogs do you also love dogs? Who is looking for a cozy cafe with four paws companion, Dog in Town Ari is absolutely great place to spend your afternoon tea at. Dog Lover you are welcome to take picture and plays the dogs along with our amazing coffee and desserts!",
    },
  },
  {
    id: 3,
    name: "Jisoo",
    about: "Hi~ my name is Jisoo member of BlackPink",
    nationality: require("./assets/korea.png"),
    rating: 4.5,
    category: {
      age: 24,
      gender: "F",
      price: 120,
    },
    places: [
      "Royal Palace",
      "China Town",
      "King Rama IX Park",
      "Dog in Town Ari",
    ],
    languages: ["Korean", "English", "Mandarin"],
    description:
      "My name is Jisoo and a native Korean speaker in Seoul. I can speak English and French so if you want to communicate with me in those languages, don't hesitate! I've learned new languages as you guys, so I can understand how difficult it is to get used to a new language. I really love to teach something to other people and talk with various kinds of topics.",
    status: "online",
    cover: require("./assets/videoPlayer.png"),
    photo: require("./assets/jisoo.png"),
    photos: [
      require("./assets/jisoo1.jpg"),
      require("./assets/jisoo2.jpeg"),
      require("./assets/jisoo3.jpg"),
      require("./assets/jisoo4.jpg"),
    ],
    tourPlaces: {
      "Royal Palace":
        "The dazzling, spectacular Royal Palace is undoubtedly the most famous landmark in Bangkok. Who loves the Historical and Artistic side of Thailand do not missed out to visit this. Gorgeous place to take photos of beautiful architecture and intricate details. ",
      "China Town":
        "Do you know where is the best place to eat Chicken and Beer? Yes, Yaowarat is the place. You can enjoy delicious food and great view at night. Also souvenirs and temples are located around.. Let's go this awesome place together!",
      "King Rama IX Park":
        "Who is looking for a natural escape? Come this way. King Rama IX Park have a lovely botany, boat rides on the lake and sounds of wildlife. You would not believe that you were in the city. Perfect picnic place for family, youngsters and lovers.",
      "Dog in Town Ari":
        "I love dogs do you also love dogs? Who is looking for a cozy cafe with four paws companion, Dog in Town Ari is absolutely great place to spend your afternoon tea at. Dog Lover you are welcome to take picture and plays the dogs along with our amazing coffee and desserts!",
    },
  },
  {
    id: 4,
    name: "Yangyang",
    about: "I am an actor from China",
    nationality: require("./assets/china.png"),
    rating: 4.5,
    category: {
      age: 26,
      gender: "M",
      price: 180,
    },
    places: [
      "Royal Palace",
      "Damneon Saduak Floating Market",
      "Baiyoke Tower",
      "Wakeboarding at Taco Lake",
    ],
    languages: ["Mandarin"],
    description:
      "Hi, everyone! My name is Yangyang. I’m a postgraduate student in Beijing University. My major is an actor in China. I’ve been teaching Chinese Mandarin for about 2 years. I also have lots of experiences in online teaching. I am a very easy-going and patient teacher. Hope you make great progress in studying Chinese. 大家好！我叫晏嘉欣。我是北京师范大学的一名在读研究生。我的专业是汉语国际教育。我喜欢弹古筝，喜欢旅游，喜欢读书。我已经有两年的汉语教学经验了，也有较为丰富的线上汉语教学经验。我是一个和蔼可亲、耐心细致的老师，希望你在我的课堂上学有所成、学有所获。",
    status: "offline",
    cover: require("./assets/videoPlayer.png"),
    photo: require("./assets/yangyang.png"),
    photos: [
      require("./assets/yangyang1.jpg"),
      require("./assets/yangyang2.jpg"),
      require("./assets/yangyang3.jpeg"),
    ],
    tourPlaces: {
      "Royal Palace":
        "The dazzling, spectacular Royal Palace is undoubtedly the most famous landmark in Bangkok. Who loves the Historical and Artistic side of Thailand do not missed out to visit this. Gorgeous place to take photos of beautiful architecture and intricate details. ",
      "Damneon Saduak Floating Market":
        "Have you ever ride in a canal that surrounded by numerous street food options. Experiences it with us at the Floating market, a place where you can find cheap local products and friendly locals. Get ready for variety of shooting points!",
      "Baiyoke Tower":
        "Have you heard about Baiyoke Tower? You can enjoy shopping, food and sightseeing here all at one time! Why don't you look around the tallest building in Thailand!? ",
      "Wakeboarding at Taco Lake":
        "Terrific experience for people who loves extreme sport. WakeBoarding is One of the best sporty outdoor activities. It is a community friendly and very chill place for everyone.",
    },
  },
];
