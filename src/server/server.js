import { createServer, Model, RestSerializer, belongsTo, hasMany } from "miragejs";


createServer({
  models: {
    users: Model.extend({
      ratings: hasMany(),
      reviews: hasMany(),
      pendings: hasMany(),
      purchases: hasMany(),
    }),

    ratings: Model.extend({
      users: belongsTo(),
      products: belongsTo(),
    }),

    reviews: Model.extend({
      users: belongsTo(),
      products: belongsTo(),
    }),

    pendings: Model.extend({
      users: belongsTo(),
      products: belongsTo(),
    }),

    purchases: Model.extend({
      users: belongsTo(),
      products: belongsTo(),
    }),

    products: Model.extend({
      hosts: belongsTo(),
      ratings: hasMany(),
      reviews: hasMany(),
      pendings: hasMany(),
      gains: hasMany(),
    }),

    hosts: Model.extend({
      products: hasMany(),
      gains: hasMany(),
    }),

    gains: Model.extend({
      products: hasMany(),
      hosts: hasMany(),
    }),

  },

  serializers: {
    ratings: RestSerializer.extend({
      include: ["users", "products"],
      embed: true,
    }),

    reviews: RestSerializer.extend({
      include: ["users", "products"],
      embed: true,
    }),

    pendings: RestSerializer.extend({
      include: ["users", "products"],
      embed: true,
    }),

    purchases: RestSerializer.extend({
      include: ["users", "products"],
      embed: true,
    }),
  },

  seeds(server) {
    server.create("product", { category: "phones-and-tablets", name: "Apple IPhone 11 Pro Max 6.5-Inch (4GB RAM, 256GB ROM ) IOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone - Space Grey", price: 470000, imageUrl: "/assets/phones-and-tablets/iphone-11-pro-max.jpg", description: `Dimensions 158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)
    Weight 226 g (7.97 oz)
    Build Front/back glass, stainless steel frame
    SIM Single SIM (Nano-SIM and/or Electronic SIM card) or Dual SIM (Nano-SIM, dual stand-by) - for China
                   IP68 dust/water resistant (up to 4m for 30 mins)
    Apple Pay (Visa, MasterCard, AMEX certified)
    
    DISPLAY              
    
    
    Type Super Retina XDR OLED capacitive touchscreen, 16M colors
    Size 6.5 inches, 102.9 cm2 (~83.7% screen-to-body ratio)
    Resolution 1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)
    Protection Scratch-resistant glass, oleophobic coating
                   800 nits
    Dolby Vision
    HDR10
    Wide color gamut
    True-tone
    120 Hz touch-sensing
    
    PLATFORM        
    OS iOS 13
    Chipset Apple A13 Bionic (7 nm+)
    CPU Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)
    GPU Apple GPU (4-core graphics)
    
    MEMORY            
    Card slot No
    Internal 64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM
    
    MAIN CAMERA
    
    Triple 12 MP, f/1.8, 26mm (wide), 1/2.55", 1.4µm, PDAF, OIS
    12 MP, f/2.0, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom
    12 MP, f/2.4, 13mm (ultrawide)
    Features Quad-LED dual-tone flash, HDR (photo/panorama)
    Video 2160p@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.
    
    SELFIE CAMERA

    Dual 12 MP, f/2.2
    TOF 3D camera
    Features HDR
    Video 2160p@24/30/60fps, 1080p@30/60/120fps, gyro-EIS
    
    SOUND
     
    Loudspeaker Yes, with stereo speakers
    5mm jack No
    Active noise cancellation with dedicated mic
    
    Dolby Atmos
    Dolby Digital Plus
    
    BATTERY                            
       
    Non-removable Li-Ion 3969 mAh battery (15.04 Wh)
    Charging Fast battery charging 18W: 50% in 30 min
    USB Power Delivery 2.0
    Qi wireless charging
    Talk time Up to 20 h (multimedia)
    Music play Up to 80`});

    
    server.create("product", { category: "phones-and-tablets", name: "Apple Iphone XR 128gb Red, Free Case And Screen Guide", price: 300000, imageUrl: "/assets/phones-and-tablets/iphone-XR.jpg", description: `NETWORK   Technology   GSM / CDMA / HSPA / EVDO / LTELAUNCH   AnnounceD    2018, September          Status       Available. Released 2018, OctoberBODY   Dimensions   150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)          Weight       194 g (6.84 oz)          Build        Front/back glass, aluminum frame (7000 series)          SIM        Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) - for China                 IP67 dust/water resistant (up to 1m for 30 mins)                       Apple Pay (Visa, MasterCard, AMEX certified)DISPLAY   Type        IPS LCD capacitive touchscreen, 16M colors          Size        6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)          ResolutioN   828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)          Protection   Scratch-resistant glass, oleophobic coating                 True-tone                       Wide color gamut                       120 Hz touch-sensingPLATFORM  OS        iOS 12, upgradable to iOS 12.2          Chipset      Apple A12 Bionic (7 nm)          CPU        Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)          GPU          Apple GPU (4-core graphics)NETWORK   Technology   GSM / CDMA / HSPA / EVDO / LTELAUNCH   AnnounceD    2018, September          Status       Available. Released 2018, OctoberBODY   Dimensions   150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)          Weight       194 g (6.84 oz)          Build        Front/back glass, aluminum frame (7000 series)          SIM        Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) - for China                 IP67 dust/water resistant (up to 1m for 30 mins)                       Apple Pay (Visa, MasterCard, AMEX certified)DISPLAY   Type        IPS LCD capacitive touchscreen, 16M colors          Size        6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)          ResolutioN   828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)          Protection   Scratch-resistant glass, oleophobic coating                 True-tone                       Wide color gamut                       120 Hz touch-sensingPLATFORM  OS        iOS 12, upgradable to iOS 12.2          Chipset      Apple A12 Bionic (7 nm)          CPU        Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)          GPU          Apple GPU (4-core graphics)` });

    
    server.create("product", { category: "phones-and-tablets", name: 'Apple IPhone 14 Pro Max 6.7" 256GB - Dual Nano Sim - Deep Purple', price: 1150000, imageUrl: "/assets/phones-and-tablets/iphone-14-pro-max.jpg", description: `The best iPhone ever, version 2022, size XL - we have the iPhone 14 Pro. The list of novelties this year includes the notch morphing into a pill, the introduction of an Always-On display, and an all-new primary camera - and while you can get all of that on the 14 Pro, the extra screen estate and longevity coupled with the Max's 'ultimate' status mean it has a market niche of its own.

    The Face ID notch that's been with us since the iPhone X was nobody's favorite, and perhaps its reincarnation as a pill is a step towards its eventual removal. But not before turning the eyesore into a feature - the pill is a Dynamic Island of notifications, blurring the line between hardware and software.

    In a similar vein is the Always-On display - a software feature only made possible now in Apple's world thanks to LTPO displays being able to ramp down to 1Hz refresh rate.

    A massive increase in brightness is also among the key developments this year, this one solely in the hardware department.

    Late to yet another party, Apple finally joins virtually every other manufacturer and introduces a camera with a Quad Bayer type sensor - the specs on the 48MP main unit don't read like any other, so apparently, it's an exclusive design. The telephoto remains unchanged, but the ultra-wide has gotten a sensor size upgrade, while the front-facing one now features autofocus (and even OIS).

    On the hardware front, there's the mandatory chipset update, of course, and little else worth mentioning. Well, there's the blanked-out SIM card slot. Crash detection and emergency sort-of satellite connectivity are also on the list of new features combining software and hardware.

    iPhone 14 Pro and iPhone 14 Pro do not include a power adapter or Ear Pods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.

    We encourage you to re‑use your current USB‑A to lightning cables, power adapters and headphones that are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.
` });

    server.create("product", { category: "phones-and-tablets", name: 'Apple IPhone XS Max - 6.5" - 256GB ROM - 4GB RAM - IOS 12 - 4G Smartphone - 3174mAh - Space Grey + Back Case & Screen Guide', price: 310000, imageUrl: "/assets/phones-and-tablets/Iphone-XS-MAX.jpg", description: `NETWORK   Technology   GSM / CDMA / HSPA / EVDO / LTELAUNCH   Announced    2018, September          Status       Available. Released 2018, SeptemberBODY   Dimensions   157.5 x 77.4 x 7.7 mm (6.20 x 3.05 x 0.30 in)          Weight       208 g (7.34 oz)          Build        Front/back glass, stainless steel frame          SIM        Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) - for China                 IP68 dust/water resistant (up to 2m for 30 mins)                       Apple Pay (Visa, MasterCard, AMEX certified)DISPLAY   Type        OLED capacitive touchscreen, 16M colors          Size        6.5 inches, 102.9 cm2 (~84.4% screen-to-body ratio)          Resolution   1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)          Protection   Scratch-resistant glass, oleophobic coating                 Dolby Vision                       HDR10                       Wide color gamut                       3D Touch                       True-tone                       120 Hz touch-sensingPLATFORM  OS        iOS 12, upgradable to iOS 12.2          Chipset      Apple A12 Bionic (7 nm)          CPU        Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)          GPU        Apple GPU (4-core graphics)NETWORK   Technology   GSM / CDMA / HSPA / EVDO / LTELAUNCH   Announced    2018, September          Status       Available. Released 2018, SeptemberBODY   Dimensions   157.5 x 77.4 x 7.7 mm (6.20 x 3.05 x 0.30 in)          Weight       208 g (7.34 oz)          Build        Front/back glass, stainless steel frame          SIM        Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) - for China                 IP68 dust/water resistant (up to 2m for 30 mins)                       Apple Pay (Visa, MasterCard, AMEX certified)DISPLAY   Type        OLED capacitive touchscreen, 16M colors          Size        6.5 inches, 102.9 cm2 (~84.4% screen-to-body ratio)          Resolution   1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)  Protection   Scratch-resistant glass, oleophobic coating  Dolby Vision ` });

    server.create("product", { category: "phones-and-tablets", name: 'Tecno Pop 7 Pro 6.6", 4GB RAM + 64GB ROM, 5000mAh-Black', price: 68900, imageUrl: "/assets/phones-and-tablets/tecno-pop7.jpg", description: `Tecno took to its official social media handles to confirm the launch of the Tecno POP 7 Pro in the country. The Tecno POP 7 Pro, with a MediaTek Helio A22 processor, a 5,000mAh battery, and a 13MP main camera.

    Starting with the display of the device, the Tecno POP 7 Pro has a 6.6-inch HD+ display with a standard 60Hz refresh rate and a waterdrop notch at the top. Speaking of, the device has a 5MP selfie camera embedded underneath the notch. At the back, the device has a 13MP main camera, which is paired with a QVGA depth sensor and an LED flash. There is a rear mounted physical fingerprint scanner as well.
    
    Powering the Tecno POP 7 Pro is an octa-core MediaTek Helio A22 processor, which is coupled with 4GB of RAM and 64GB internal storage. In terms of software, the Tecno POP 7 Pro runs Android 12-based HiOS 12 out of the box. Lastly, the Tecno POP 7 Pro features a 5,000mAh battery with support for 10W charging. 
    
    6.6" HD+ Dot Notch Screen
    13MP AI Dual Camera with Dual Flash
    5MP Front Camera with Dual Flash
    64GB ROM + 4GB RAM (Up to 7GB with Memory Fusion) 
    5000mAh Long-lasting Battery with Type-C Port
    Android 12
    Fingerprint and Face ID
    Helio A22 Processor
    4G LTE
    Trendy Design` });

    server.create("product", { category: "phones-and-tablets", name: "XIAOMI Redmi A1+ 2GB RAM 32GB ROM 5000mAH - Blue", price: 65700, imageUrl: "/assets/phones-and-tablets/XIAOMI-REDMI.jpg", description: `General Features
    Platform: Android 12, MIUI 12
    Processor: MediaTek Helio G25 (Octa-core 2.0 GHz Cortex-A53)
    GPU: PowerVR GE8320 (650 MHz)
    Memory: 2GB RAM
    Colours:  Blue Color
    SIM Type: Nano-SIM
    SIM Count: Dual-SIM
    Display
    Display: 6.52-inch, IPS LCD Display, 20:9 ratio,  720 x 1600 Pixels
    Foldable Display: No
    Camera
    Rear Camera: 8MP
    Rear Camera Features: LED flash, HDR, Panorama, 1080 @ 30fps
    Front Camera: 8MP
    Storage
    Built-in Storage: 32GB
    Memory Card Support: Yes, microSDXC (dedicated slot)
    Network Support
    2G GSM: 850 / 900 / 1800 / 1900
    2G CDMA 1X: 850 / 900 / 1700(AWS) / 1900 / 2100 –
    4G LTE: Yes
    5G: No
    Internet & Connectivity
    GPRS: Yes
    EDGE: Yes
    3G/WCDMA/HSPA: Yes
    HSPA+: Yes
    CDMA EVDO: Yes
    4G LTE: Yes
    5G: No
    WLAN: Wi-Fi 802.11 b/g/n, Hotspot
    Wi-Fi Hotspot: Yes
    Bluetooth: Yes, Bluetooth 5.0, A2DP, LE
    NFC: No
    Infrared Blaster: Yes
    USB Port: Yes, USB Type-C (2.0), Reversible Connector
    Other Features
    Video Streaming: Yes
    Active Noise Cancellation: 
    Wireless Charging: No
    Built-in Mobile Payment: 
    Water Resistant: No
    Dust Resistant: No
    Battery
    Battery: 5000mAh Non-Removable Li-Po Battery` });

    server.create("product", { category: "phones-and-tablets", name: 'itel A60 6.6" HD+, 2GB RAM + 32GB ROM, 5000mAh, 4G LTE, 8MP + 5MP', price: 48350, imageUrl: "/assets/phones-and-tablets/itel-a60.jpg", description: `Itel A60
    4G LTE For EveryOne

    imageimageimageimageimageimageimageimage
    imageimageimageimageimageimageimage

    6.6 Inches Waterdrop FullScreen
    5000mAh Battery
    Dual Camera (8MP Rear + 5MP Selfie Camera)
    Fashionable Design
    2GB RAM + 32GB ROM
    Android ™12 (Go edition)
    Fingerprint Sensor & Face Unlock


    High-speed 4G
    Faster and More StableA60 high-speed 4G network allows everyone to enjoy a faster and smoother experience when scrolling social media and short videos, while the Multi-band 4G signal also brings a more stable calling experience.

    32+2GB Big Memory
    Enough for Smoother Experience
    32GB ROM large capacity and up to 128GB expandable memory give you enough space to store what you love, and 2GB RAM also brings a smoother experience for daily use.

    Bigger Vision to Appreciate Wider World
    6.6"HD+ Waterdrop FullScreen and 90% body-to-screen ratio, give a wide and Immersive viewing experience. You can enjoy your favorite content with a clearer display and more vibrant colors.

    5000mAh Large Battery
    Enjoy Your Time All-Day
    The massive battery keeps your phone going all day, so you can watch videos, browse the web and listen to music to your heart's content, without worrying about your battery life.

    Fashionable & Colorful Design
    A60 shows a sense of fashion and trend with a dual camera and lenticular texture design available in shades of blue, green, and black. Moreover, the textured right-angled edges design brings a higher level of a comfortable hand feel.

    Face Unlock & Fingerprint Sensor
    Dual Security Ensure Privacy
    Safer protection with face unlock and a fingerprint sensor to keep your data and privacy safe.

    Always Look Good In 8MP Camera
    The 8MP camera ensures clearer picture quality. With AI-powered autofocus technology, it can quickly identify skin color and scene lighting, and focus more accurately, allowing you to easily capture every unforgettable moment.


    Quality
    Resistance to Ordinary Drops
    Dust and Moisture-proof
    Safe use at Extreme temperatures
    Stable internal and External Structures

    Itel’s A-series devices are entry-level phones with the most basic specs and features. True to its lineage, itel A60 packs a 6.6-inch HD+ display, runs Android 12 Go Edition, powered by a 5000mAh battery and High Speed 4G LTE for faster downloads and more stable calls
    Being a basic, affordable smartphone, the itel A60 packs the most important features. There is no fast charging, no USB-C port, and no Gorilla Glass, among others. Its humble estate hasn’t kept it from having a fingerprint scanner and a 4G network though.
    The A60 has a premium and stylish design. It is powered by a yet-to-be named Quad-core chipset, and has 2 GB RAM and 32 GB internal storage memory. There is a microSD card slot, so you can expand the memory to store more videos and photos.

    Performance Parameters
    Display 6.6"HD+ Waterdrop FullScreenBattery Capacity 5000mAhMemory 32+2GBNetwork 4G/3G/2GRear Camera 8MPFront Camera 5MPSensor Face Unlock & Fingerprint SensorResolution 720*1612Operating System Android ™12（Go edition)` });

    server.create("product", { category: "phones-and-tablets", name: "Infinix Smart 7 HD 2GB RAM 64GB ROM 5000mAh", price: 56300, imageUrl: "/assets/phones-and-tablets/Infinix-Smart-7-HD.jpg", description: `6.6” WaterdropSunlight FullscreenCrispy-smooth Colors Even Under the Sun6.6”HD+ Resolution500nitsPeak BrightnessSmart 7 HD is outfitted with a bright 6.6-inch HD+ screen that boasts 500 nits of peak brightness, delivering a pleasing visual experience whether it’s outdoors or in sunny weather. It will provide you with a full cinematic view that's delightful to look at — every time.
    *Performance figures are based on tests conducted under Infinix labs. Actual performance may vary slightly due toenvironmental factors and real-life use conditions.
    5000mAh BatteryPowerhouseLongevity RedefinedMore life. That's what you can expect from this 5000mAh battery powerhouse. Enabled by Power Marathon Technology, the Smart 7 HD is built to last, whether you're listening to music, or binge-watching your favorite shows.


    Perfect selfies every timeThe 5MP front camera features automatic retouching to deliver perfect photos.
    5MP AISelfie camera with LED flash lightWith Selfie focus and dual flash, you’ll get a gentle background blur that makes you the star of the picture.
    Bring out your unique beautyThe SMART 7 HD front camera is embedded with an intelligent algorithm to make every selfie photo impeccable. It gives you more intelligent ways to customize images according to your own beauty styles such as 3D face improvement and skin tone identification. It also intelligently adapts to the optimal skin tone to make selfie photos more natural and unique.
    Capture Your Moments8MP Dual Rear Camera with Dual FlashlightEnhanced by an AI-powered 8MP dual camera, you can capture clearer, brighter, and more beautiful photos effortlessly with your new SMART 7 HD.
    Fingerprint & FacialUnlockEasily Unlock with A Mask OnSmart 7 HD can be unlocked in the blink of an eye with fingerprint or facialrecognition, providing both security and convenience.
    DTS Audio Processing+Beez 2.0Style Your Beats with Superior SoundThe Beez 2.0 brings out the best of your creativity by enabling you to compose your own music, input vocals, lyrics, and edit. Advanced sound technology and DTS audio processing provide the Smart 7 HD with a powerful musical experience that is pleasing to the senses.
    S-I Antibacterial MaterialInstant Health ProtectionIn the fight to combat the spread of diseases and other forms of bacteria, we have introduced Silver Ions (S-I) Antibacterial Material to our SMART 7 HD, making it tougher and more resistant against germs.
    Kids ModeMobile Phone Usage with CareKids Mode is the perfect solution to help protect your children from accessing potentially harmful or inappropriate information. Not only does it safeguard your children, but it also gives you peace of mind by allowing you to manage apps and other settings on your children's behalf.
    Color Your MomentsApp Lock Lock apps for privacy.
    X-Proof All your login accounts in one secure location.
    Xclone Obscure your screen in public.
    XvocalColorful Chatting with Voice ChangerWant to have more fun when chatting with your friends? Xvocal can help you distort your voice the way you want so as to protect the real you in the virtual world.
    Aura Waves Textured DesignNew Trendsetting LooksInspired by nature’s finest stones, Smart 7 HD is wrapped up in a shiny Aura Waves textured design that sparkles at every glance. Outlandish yet stylish, it comes in four youthful finishes that will make you stand out from the crowd.
    6.6” HD+ 500nits Waterdrop Sunlight DisplayMega 5000mAh Battery + Power Marathon5MP AI Selfie Camera & Flash LightFingerprint & Face UnlockDTS Audio Processing + Beez 2.0Antibacterial Material
` });

    server.create("product", { category: "phones-and-tablets", name: 'QUBO Big1 Plus - 6.26" 4500mAh, 2GB/32GB 5MP/8MP - Red', price: 34990, imageUrl: "/assets/phones-and-tablets/Quboo.jpg", description: `Qubo- comes from Spain, Europe,aims to bring consumers high-quality and cost-effective creative electronics products.
    Local service center,no worry about quality issues.
    Qubo BIG1 Plus- An value-for-money large screen & Big battery / large storage Android smartphones for you.

    Description:

    Powered by 4500mAh battery which lets you be more energetic in business, games,videos and reading. 

    5MP selfie camera allows you to enjoy your spare time.Beside, HD Rear Camera 8MP  megapixels enable you get High quality shooting moments.

    The Qubo BIG 1 Plus quipped with 6.26 inch FW+ IPS screen which will bring you a big view on games,videos,reading.

    With 32GB of hard disk which make you have more room to do more things you like, such games, videos,books and pictures. 

    Thanks to fingerprint recognition. You don’t need to remember a complex password,only your fingerprint can unlock the phone. 

    Use the latest android 10 OPERATING SYSTEM, App switching is faster and more efficient, with apps launching 10% faster than before.

    Main features:

    Display: 6.26 inch IPS FW+ waterdrop fullview screen
    Memory: RAM 2GB / ROM32GB ( Expandable up to 32GB via microSD card)
    Camera: Rear main camera 8.0MP with flashlight /Front camera 5.0MP
    Battery: 4500 mAh battery
    CPU: MTK6580A-Quad Core 1.3 GHz 
    GPU: ARM Mali400 MP2
    System OS: Android 10 (go edition)
    SIM Card: Nano SIM + Nano SIM
    GSM 900/1800
    3G WCDMA 900/2100
` });

    server.create("product", { category: "phones-and-tablets", name: 'Honor HUAWEI Honor 10 Lite 6.21" Dual Sim 6GB+128GB 4G LTE 13MP Camera Smartphone - Black', price: 69990, imageUrl: "/assets/phones-and-tablets/huawei-honor.jpg", description: `Product Description:
    The HUAWEI Honor 10 Lite smartphone with its AI-enabled features, such as the 24 MP AI Selfie Camera, AI-enhanced Calls, and HiVision Feature will elevate your senses for a delightful smartphone experience. Oh, and not to forget, this phone's Super Night Scene Mode paves the way for brilliant photographs in the night. It is powered by the Kirin 710 Chipset which ensures a seamless performance.

    Features:
    Capture Memories All Day, All Night:Whether it's a friendly lunch gathering or a fun night party, you can capture everything with this phone's 24 MP AI front camera. It is enhanced by the 4-in-1 Light Fusion Technology and Exposure Compensation Technology for effective pictures even during the night. What's more? This camera also recognizes eight selfie scenarios and optimizes the background, so that, you stand out in every picture.
    Selfies Just Got More Beautiful:This phone's selfie camera comes with an AI Beauty Algorithm that customizes beauty effects as per your age, gender, and skin tone, thereby making every picture of yours look naturally beautiful.
    AI Dual Camera for Breathtaking Portraits:Its 13 MP + 2 MP AI Dual Camera coupled with a wide f/1.8 aperture lens delivers pictures with better luminance and lesser noise. That's not all, it also recognizes different objects and scenarios and makes adjustments accordingly, thereby paving the way for perfect pictures in your album.
    Night Shots - Truly Romantic:You don't need a professional camera to capture brilliant pictures in the dark. This phone's Super Night Scene Mode lets you capture beautiful pictures in the night.
    Kirin 710 Chipset for a Smoother Performance:This phone is powered by the Kirin 710 Chipset which paves the way for seamless performance with reduced power consumption. It comes with 6 GB of RAM and an internal memory of 128 GB (expandable up to 512 GB).
    An Enviable Gaming Experience:With the presence of the GPU Turbo 2.0 processor, you can get set to enjoy your favourite games, such as PubG, with enhanced stability.
    Stylish, Just Like You:This phone's unique glass finish back adds a dash of style that you can flaunt while holding it in your hand.
    See More, Do More:This phone's Dewdrop Notch Display with a screen-to-body ratio of 91% paves the way for a unique viewing experience. What's more? It's 15.77 cm (6.20) FHD+ Display fits within a 13.2 cm (5.19) profile, thereby letting you hold this phone comfortably in your hands. It has an aspect ratio of 19.5:9.
    AR Mode for Added Fun:Add some goofiness to your pictures by switching to the AR Mode. You can change the background while clicking pictures, add effects to it, and do so much more.
    Studio-level Selfies At Your Fingertips:This phone's AI Selfie Camera lets you experiment with your selfies by helping you pick from various modes of lighting, such as Butterfly Lighting and Soft Lighting. So, every selfie that you click on this phone will have a touch of professionalism.
    EMUI 9 for an Enhanced Experience:The EMUI 9.0, powered by Android 9.0, is a simple interface that paves the way for greater AI capabilities for an immersive experience. It blends natural colour transitions for a translucent visual presentation. It also comes with intuitive gesture navigations, thereby making it more convenient to use.
    The Magic of AI:This phone comes with a host of AI-powered features. The HiVision Feature gives you more information about places, landmarks, and recipes that you may have come across while travelling. It also helps you measure food calories with volume estimation.
    AI-enhanced Calls:It enhances the quality of calls when the environment around is loud and clamorous. It also recognizes if a user has entered an elevator, thereby letting the phone recover quickly to a 4G signal.
` });

    server.create("product", { category: "phones-and-tablets", name: 'Tecno Phantom X (AC8) 6.7" FHD+, 8GB RAM + 256GB ROM, 50MP Triple Camera + 48MP Selfie, Android 11, 4700mAh, Helio G95 -SUNSET', price: 202990, imageUrl: "/assets/phones-and-tablets/tecno-phantom-x.jpg", description: `SPECIFICATIONS
    Summary
    Glass Front, Glass Back (Corning Gorilla Glass 5)
    6.7" FHD+ OLED Boundless Screen
    50MP Ultra-sensitive Triple Camera with 1/1.3 inch
    Ultra-thin In-display Fingerprint
    4700mAh, 33W Flash Charge
    CPU Helio G95, 8 Core, 2.05GHz*2+2.0GHz*6
    256+8GB Memory
    48+8MP Front Camera with Dual Flash
    50+13+8MP Rear Camera with 1/1.3 inch ultra-large sensor & Quad Flash
    HiOS based on Android™ 11

    Specification
    Height    163.5mm
    Width 73.78mm
    Thickness 8.72mm
    Glass Front, Glass Back (Corning Gorilla Glass 5)
    6.7" FHD+ OLED Boundless Screen
    1080*2340 Resolution
    256GB ROM
    8GB RAM
    4700mAh(typ)
    Android™ 11

    Network & Connectivity
    GSM
    GPRS
    GPS
    BT
    WCDMA
    HSPA+
    WIFI
    OTG
    FDD/FDD LTE
    FULL EDGE
    FM

    Camera & Interface
    48+8MP Front Camera with Dual Flash
    50+13+8MP Rear Camera with 1/1.3 inch ultra-large sensor & Quad Flash

    Sensor
    G-Sensor
    The ambient light and distance sensor
    Electronic compass
    Gyroscope
    Fingerprint Sensor` });

    server.create("product", { category: "phones-and-tablets", name: 'Nokia G20 - 6.5" HD+ 20.9 SCREEN-128GB ROM/4GB RAM-48MP/5MP/2MP/2MP+8MP CAMERA-5050MAH-FINGERPRINT- NIGHT - DARK BLUE', price: 125500, imageUrl: "/assets/phones-and-tablets/Nokia-G20.jpg", description: `Nokia G20 smartphone was launched on 8th April 2021. The phone comes with a 6.5-inch touchscreen display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Nokia G20 is powered by an octa-core MediaTek Helio G35 processor. It comes with 4GB of RAM. The Nokia G20 runs Android 11 and is powered by a 5050mAh battery. The Nokia G20 supports proprietary fast charging.

    As far as the cameras are concerned, the Nokia G20 on the rear packs a 48-megapixel primary camera with an f/1.79 aperture; a 5-megapixel camera; a 2-megapixel camera, and a 2-megapixel camera. The rear camera setup has autofocus. It sports an 8-megapixel camera on the front for selfies.

    Nokia G20 is based on Android 11 and packs 128GB of inbuilt storage that can be expanded via microSD card (up to 512GB) with a dedicated slot. The Nokia G20 is a dual-SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM cards. The Nokia G20 measures 164.90 x 76.00 x 9.20mm (height x width x thickness) and weighs 197.00 grams. It was launched in Glacier and Night colours.

    Connectivity options on the Nokia G20 include Wi-Fi 802.11 b/g/n, GPS, Bluetooth v5.00, NFC, USB Type-C, FM radio, 3G, and 4G (with support for Band 40 used by some LTE networks in India) with active 4G on both SIM cards. Sensors on the phone include accelerometer, ambient light sensor, gyroscope, proximity sensor, and fingerprint sensor. The Nokia G20 supports face unlock.` });

    server.create("product", { category: "phones-and-tablets", name: ' UMIDIGI Power 5S 4GB RAM 32GB ROM 6150mAh (16MP+8MP+5MP)+8MP Android 11 AI Face Unlock 6.53" Global Version Dual 4G-Jade Green', price:76990, imageUrl: "/assets/phones-and-tablets/UMDIGI-POWER.jpg", description: `Brand	UMIDIGI
    Model	Power 5S
    Color	Carbon Grey - Sapphire Blue - Jade Green
    Body Material	Polycarbonate
    Dimensions	164.8*76.9*9.9mm
    Net Weight	215g
    Operating system	Android 11
    CPU	Unisoc UMS312（T310）,1xArm Cortex-A75  2.0 GHz , 3xArm Cortex-A55 1.8 GHz
    GPU	Imaginnation PowerVR GE8300,800MHz
    RAM and Storage	4GB+32GB
    Storage Type	eMMC 5.1
    Battery	6150mAh
    Quick Charge	10W
    Wireless Charge	No
    Unlock	AI face unlock
    Dispaly	
    Display Size	6.53" (measured diagonally)
    Aspect Ratio	20:9
    Type	Dot Drop Display
    Touch	Capacitive multi-touch
    Resolution	HD+ 1600*720
    PPI	269
    Screen-to-body ratio	92.70%
    Camera	
    Rear Camera	16MP main camera
    F/2.0, 6-element lens

    8MP ultra-wide-angle camera
    FOV 120°, F/2.2

    5MP macro camera
    2.5cm macro distance, F/2.4
    Features: Ultra wide-angle mode, Steady handheld night photography, Macro mode, Portrait mode, Panorama mode, HDR, AI Beautify, Ultra wide-angle edge distortion correction, Dual LED flash, Face recognition, Real-time filters
    Rear camera video features: 1080p, 720p video recording, 30fps
    Front camera	8MP front camera
    F/2.2 aperture

    Features: AI Beautify, Face recognition, Selfie countdown

    Front camera video features: 1080p, 720p video recording, 30fps
    Connection	
    Band	4G: FDD：B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28A/28B/B66
    TDD：B34/38/39/40/41
    3G: WCDMA:B1/2/4/5/8
    TDSCDMA:B34/39
    2G: GSM:B2/B3/B5/B8
    SIM/TF Card	4G Dual SIM, both cards can access 4G connectivity simultaneously
    2 + 1 SIM slot, Dual SIM slot + Dedicated slot for Expanded Memory
    Support dual Nano-SIM card and dedicated Micro-SD expansion memory card
    WIFI	2.4GHz/5GHz, IEEE802.11 a/b/g/n/ac
    Bluetooth	Bluetooth 5.0
    Positioning	Yes
    NFC	No
    Sensor	AI face unlock,Proximity sensor, Ambient light sensor, Gravity sensor, Gyroscope, Electronic compass
    Support format	
    Audio File Format	PCM, AAC / AAC + / eAAC +, MP3, AMR - NB and WB, APE, WAV
    Video File Format	Supports H.264 (Baseline / Main / High profile), MPEG4 (Simple profile / ASP) and other video formats
    FM Radio	Yes
    Earphone Port	3.5mm Audio Jack
    Card Extend	Supports expandable storage up to 256GB (VFAT format)
    USB	Type-C
    OTG	YES
    OK Google on Locked Screen	No
    Other Features	
    Notification LED	No
    Shortcut Key	Yes
    Certification	FCC/ CE/ MSDS/ UN38.3/ MIC/ PSE
    Language	English, Bahasa Indonesia, Bahasa Melayu, Cestina, Dansk, Deutsch,
    Espanol, Filipino, French, Hrvatski, latviesu,lietuviu,Italiano, Magyar,
    Nederlands, Norsk, Polish, Portuguese, Romana, Slovencina, Suomi,
    Svenska, Tieng viet, Turkish, Greek, Bulgarian, Russian, Ukrainian,
    Hebrew, Arabic, Thai, Khmer, Korean, Simplified/Traditional Chinese
    In the box	1x Power 5S
    1x Screen Protector (pre-applied)
    1x Phone Case
    1x Type-C Cable
    1x Power Adapter
    1x SIM Tray Ejector
    1x Quick Start Guide
    Note:	All data points are based on design specifications, lab data, and suppliers. Graphics shown are illustrations only and not actual measurements. VoLTE is available through select carriers. Please verify compatibility with your service provider.` });

    server.create("product", { category: "phones-and-tablets", name: 'Infinix Note 11 Pro - 6.95" FHD+ (8GB RAM, 128GB ROM) Android 11 (64/13/2)MP + 16MP Selfie - 4G LTE - 5000mAh - Haze Green', price: 212000, imageUrl: "/assets/phones-and-tablets/Infinix-Note-11-Pro.jpg", description: `Infinix Note 11 Pro - 6.95" FHD+ (8GB RAM, 128GB ROM) Android 11 (64/13/2)MP + 16MP Selfie - 4G LTE - 5000mAh - Haze Green

    Infinix unveiled the new generation of its jumbo-sized Note series. Like its predecessor, the Infinix Note 10 Pro packs a 6.95” display – this is more of a small tablet than a large phone. For this generation, however, the refresh rate has been cranked up from 90 Hz to 120 Hz. The touch sampling rate remains at 180 Hz.

    Infinix Note 11 series unveiled: the Pro model has a 6.95'' 120Hz screen, 13MP tele camera
    It is an IPS LCD panel with 1,080 x 2,460 px resolution, same as before. But this year it has a new chipset driving it – the Helio G96 by MediaTek. This chip has a pair of Cortex-A76 CPU cores like its predecessor (the G95) and our testing shows that it has an edge in performance.

    Infinix Note 11 series unveiled: the Pro model has a 6.95'' 120Hz screen, 13MP tele camera
    The GPU was downgraded, however, from a Mali-G76 MC4 to a G57 MC2 and that shows in testing. Then again, the Helio G95 would have been a back pick for this phone since it can’t drive 1080p displays at 120 Hz (and the G96 clearly can). There is some hope that the Note 11 series will perform better than other G96-powered phones thanks to the 9 layers of graphene film that help keep the chipset cool.

    Infinix Note 11 series unveiled: the Pro model has a 6.95'' 120Hz screen, 13MP tele camera
    The Note 11 Pro comes with a higher base memory capacity – 8 GB of RAM and 128 GB storage, up from 6/64 GB. The microSD slot is still on board and even RAM can be extended as the new XOS 10 software (based on Android 11) can add 3 GB of virtual RAM. For the UFS 2.2 storage there is Infinix’s Write Booster that accelerates writing speed.

    The 64 MP rear camera is now joined by a 13 MP telephoto module. While it advertises 30x maximum zoom (digital, of course), the actual optical magnification is 2x. Also, the 8 MP ultra wide camera of the previous model has gone missing – there’s no ultra wide at all here, just a 2 MP depth sensor.

    Infinix Note 11 series unveiled: the Pro model has a 6.95'' 120Hz screen, 13MP tele camera
    This is one of the places where the vanilla Infinix Note 11 differs from the Pro. It has a 50 MP main camera and a “2 MP telephoto lens”, according to the press release, though that could be a typo for all we know. Anyway, both feature a 16 MP selfie camera on the front. The new chipset didn’t improve the video recording situation, by the way, the new models are still capped at 1080p 30 fps.

    Besides the camera, the Pro model also stands out with stereo speakers (top and bottom), which are part of what Infinix calls a Digital Theater System. But if you want a big screen, Infinix has prepared the phones to easily cast images and video (including screen mirroring) to TVs and laptops. If you want to keep it small instead, there is a 3.5 mm headphone jack (with an FM radio receiver).

    Mithril Grey, Haze Green and Mist BlueThe Infinix Note 11 Pro will be available in three colors: Mithril Grey, Haze Green and Mist Blue
    The 5,000 mAh battery on the Pro model supports 33W fast charging over USB-C, just like its predecessor. That battery should survive 800 charge cycles without a noticeable degradation in capacity, thanks to some TÜV Rheinland-approved charging tech. The power adapter is included in the retail box, plus a transparent silicone case and a glass screen protector.

    Infinix Note 11 series unveiled: the Pro model has a 6.95'' 120Hz screen, 13MP tele cameraThe Infinix Note 11 and Note 11 Pro is now available on Jumia via www.jumia.com.ng/hub-everything
    Specifications
    KEY FEATURES
    Display: 6.95-inches FHD+
    Memory: 8GB RAM, 128GB ROM
    Camera: (64/13/2)MP with Quad Flash Light (30Telescope Zoom) + 16MP Selfie with Dual Flash Light
    Battery: 5000mAh
    Network: 4G LTE
    OS: Android 11
    Sensor: Side Fingerprint, among others
    SPECIFICATIONS
    SKU: IN717MP06ROI8NAFAMZ
    Product Line: Jimclever Hub
    Model: X697
    Weight (kg): 0.5
    Color: Haze Green
    Most popular` });

    server.create("product", { category: "phones-and-tablets", name: 'OPPO A3S 6.2 "HD+ 4GB+64GB , 4230mAH Blue', price: 39990, imageUrl: "/assets/phones-and-tablets/OPPO A3S.jpg", description: `Dear African customers, we are the supplier of refurbished mobile phones in China. Now I'm glad to provide you with high-quality refurbished mobile phones on Jumia. The whole mobile phone is equipped with a brand new standard, and the screen display and shell are free from defects. The USB charging port cable plug and battery are all replaced, so you can completely feel the experience of the new machine. Let you enjoy the best product experience at a very favorable price. We thank you for your support. Your satisfaction will be the ultimate goal of our trip to Africa.imageimageOppo A3S smart phone is equipped with 4230mah 4GB + 64GB mobile phone, 6.2-inch screen, powerful mt6750 eight core CPU, 4GB memory and 64GB internal storage space. MicroSD can be used for further expansion. The mobile phone supports multi band 2G / 3G / 4G, LTE and Bluetooth, and runs on Android 8.1ooe operating system. With Android 8.1, you can access some of the latest and best applications in Google play store to get smooth performance. MicroSD can be used for further expansion. Oppo A3S smartphones have the same powerful shape and eye-catching design as their competitors. 128GB memory is expandable, providing enough space for music, video, applications and pictures
    Oppo a3s is equipped with Qualcomm snapdragon 450 processor, which is called the low configuration version of snapdragon 625. The main frequency can reach up to 1.8 gigahertz, and the performance is improved while the power consumption is reduced. At the same time, it is equipped with an Adreno 506 graphics processor.
    system
    Oppo a3s runs coloros 5.1 based on Android 8.1, adding a series of AI applications such as AI beauty, AI voice assistant, AI power management, etc.
    camera
    Oppo a3s rear 13million +2million pixel AI intelligent dual camera, f/2.2+f/2.41 rear aperture, and added a new portrait background virtualization, making the character detail processing more natural, virtualized and real. The front 8million pixel camera, with an aperture of f/2.2, supports AI beauty, intelligently recognizes 296 facial features, and can accurately recognize facial features.
    Apply quick freezing
    Oppo a3s focuses on long endurance and is equipped with a 4230 MAH battery, which is the first time that oppo a series has such a large battery built in. At the same time, the application quick freezing function is added for the first time, and the system will automatically freeze idle applications. After the applications enter the quick freezing state, they will not consume power, send and receive messages and read mobile phone information in the background. Smart Freeze power consumption applications enable mobile phones to have better battery life.
    Intelligent driving mode
    The intelligent driving mode of oppo a3s can automatically identify the driving status and automatically start blue and GPS. Voice commands replace manual operations, broadcast important information and block disturbance notifications. Intelligent driving navigation can also broadcast routes and change driving routes.
    Game acceleration` });

    server.create("product", { category: "phones-and-tablets", name: 'Samsung Galaxy S10 8+128 GB Single Sim Android 9.0 Octa Core 2.8GHz 6.1 Inch Quad HD+ Tri-lens Camera - White', price: 155000, imageUrl: "/assets/phones-and-tablets/Samsung Galaxy S10.jpg", description: `Brand / ModelBrand / Model Samsung Galaxy S10 SystemOS Android 9.0CPU Qualcomm Snapdragon 855/Exynos 9820 (ship by ramdom) Octa Core 2.8GHzGPU Adreno 640RAM 8 GBROM 512 GBExtend card MAX supports 128GB Class 10 Micro SD Memory Card (TF-Card)ScreenDisplay Size 6.1 inch Quad HD+Screen Resolution 3040 x 1440Screen Type Super AMOLEDDimensions 149.9×70.4×7.8mmColor Black /  White /  GreenNet Weight 157gCameraFront Camera 10.0 mega pixelRear Camera 12.0 mega pixel 12.0 mega pixel 16.0 mega pixel Tri-lens CameraSAR 0.5 W/KgSIM Card Slot Dual SimSim 1: Nano Sim, LTE/WCDMA/GSMSim 2: Nano Sim/Micro SD, LTE/WCDMA/GSMBand2G GSM: 850 / 900 / 1800 / 1900 MHz3G WCDMA: 850 / 900 / 1900 / 2100 MHz4G TDD-LTE: B38(2600MHz) / B39(1900MHz) / B40(2300MHz) / B41(2500MHz)FDD-LTE: B1(2100MHz) / B2(1900MHz) / B3(1800MHz) / B4(1700MHz) / B5(850MHz) / B7(2600MHz) / B8(900MHz) / B12(700MHz) / B13(700MHz) / B18(800MHz) / B19(800MHz) / B20(800MHz) / B25(1900MHz) / B26(850MHz) / B28(700MHz)Data Transfer & ConnectivityData transfer Bluetooth 5.0 USB 3.1 Type-CMobile internet WiFi, EDGE, GPRS, UMTS, HSPA, HSPA+, FDD LTEGPS GPS Glonass BeidouFunctions / FeaturesFunctions / Features G-sensor, P-Sensor, L-Sensor, Wifi, GPS, OTG, Multi-touch, Dual SIM, E-compass, Hall IC, NFC, Front Fingerprint Scanner, Air Pressure SensorSensor Gravity Sensor ,  Proximity Sensor ,  Light Sensor ,  Magnetic Sensor ,  Gyroscope SensorBatteryBattery Built-in Li-pol Battery 3400mAhWhat's in the box 1 x Headset 1 x Micro-USB connector1 x Owner's Manual1 x Power adapter1 x SIM card removal tool1 x Samsung Galaxy S101 x USB connector (USB-C)1 x USB-C cable
    ` });

    server.create("product", { category: "phones-and-tablets", name: 'Tecno Spark 10 (KI5q) (128GB Rom +(8+8)16GB RAM) 50MP', price: 110000, imageUrl: "/assets/phones-and-tablets/Tecno Spark 10.jpg", description: `IDA ENGINE 3.0
    Download via Cellular faster by 45%, Wifi by 300%, and Camp Network by 90%.


    ELLA 2.0
    A trustworthy, responsive and intelligent assistant that speaks English, French and Nigerian Hausa.

    ULTRA POWER SAVING MODE
    Excellent power optimization that enhances overall battery life performance by 30%.


    AI GALLERY 5.0
    Algorithm Powered Album that classifies photos, recommends covers, and sorts out your albums.



    Summary
    50MP Ultra Clear Rear Camera
    8MP Glowing Selfie with Dual Flash
    Iconic Design
    5000mAh Super Battery+18W Fast Charge
    128GB ROM , 16GB RAM(8GB Extended RAM)
    6.6" HD+90Hz Refresh Rate


    Specification
    Height: 163.89mm
    Width:75.39mm
    Thickness:8.40mm
    6.6" HD+90Hz Refresh Rate
    720*1612 Resolution
    Octa-core
    128GB ROM
    16GB RAM
    5000mAh(typ)+18W
    Android 13


    Network & Connectivity
    2G
    3G
    4G
    GPS
    WIFI 2.4+5GHz
    FM
    GNSS
    Type-C
    NFC


    Camera & Interface
    50MP Ultra Clear Rear Camera
    8MP Glowing Selfie with Dual Flash



    Sensor
    G-Sensor
    E-compass
    Ambient Light Sensor
    Proximity Sensor
    Fingerprint Sensor


    In the Box
    Phone * 1
    Charger cable * 1
    Charger * 1
    Warranty Card * 1
    Protective Case * 1` });

    server.create("product", { category: "phones-and-tablets", name: ' IPhone 6 16GB(Refurbished) - Gold (Grade A)', price: 45000, imageUrl: "/assets/phones-and-tablets/Iphone-6.jpg", description: `Height:  138.1 mm (5.44 inches)  Width:  67.0 mm (2.64 inches)  Depth:  6.9 mm (0.27 inches)  

    Weight:  129 grams (4.55 ounces) 

    Chips  A8 chip with 64-bit architecture/M8 motion coprocessor 

    Mobile and Wireless LTE/UMTS/GSM/EDGE/CDMA EVDO 802.11a/b/g/n 

    WiFi Touch ID Fingerprint identity sensor built into the Home button 

    Display 5.5-inch (diagonal) LED-backlit widescreen 

    Multi Touch display with IPS technology, 1334-by-750 pixel resolution, 1400:1 Contrast ratio, Fingerprint resistant oleophobic coating on front iSight Camera 8 megapixels with 1.5 pixels /2.2 aperture 

    Sapphire crystal lens cover 

    Power and Battery Built In rechargeable lithiumion battery 

    Charging via USB to computer system or power adapter 

    roduct Features:

    6.9mm ultra-thin display.

    4.7" multi-touch LCD display.

    8MP iSight camera+1.2MP FaceTime HD Camera.

    Dual-core A8 chip with 64-bit architecture+M8.

    1810mAh lithium-ion battery.

    The fingerprint can be read 360°.



    Specifications:

    OS: iOS 8

    CPU: A8+M8, 1.4GHz

    SIM Card: Nano SIM

    Display: 4.7-inch Retina HD

    Screen Resolution: 1334 * 750

    RAM: 1GB

    ROM：16GB

    Front Camera: 1.2MP

    Rear Camera: 8MP

    Battery: 1810mAh

    Sensors: Touch ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor

    Dimensions: 138 * 67 * 6.9mm

    Net Weight: 129g







    Cellular and Wireless:



    Model A1549 (GSM)*/ Model A1522 (GSM)*:



    UMTS/HSPA+/-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)



    GSM/EDGE (850, 900, 1800, 1900 MHz)



    LTE (Bands 1, 2, 3, 4, 5, 7, 8, 13, 17, 18, 19, 20, 25, 26, 28, 29)





    Accessories:

    1 * Phone 

    1 * USB Cable

    1 * USB Adapter 

    1 * Documentation` });

    server.create("product", { category: "phones-and-tablets", name: 'Tecno Camon 19 (CI6) 6.8" FHD+, 128GB ROM + 4GB RAM, 64MP Rear + 16MP Front, 5000mAh + 18W Fast Charge, Android 12, 4G - White', price: 123599, imageUrl: "/assets/phones-and-tablets/Tecno-camon-19.jpg", description: `Stylish Design  Order your Tecno Camon 19  online from Jumia at the best price and have it delivered right at your doorstep

    Tecno Camon 19 is the latest device from Tecno Camon Series. The mobile will come with adequate specifications and decent specifications. 
    Tecno Camon 19 is said to run the Android v11 operating system and might be packed with 5000 mAh battery that will let you enjoy playing games, listening to songs, watching movies, and more for a longer duration without worrying about battery drainage.
    It is tipped that this upcoming phone from Tecno will come with 4 GB of RAM + 128 GB of internal storage. Hence, you will be able to store all your songs, videos, games and more on the phone without worrying about space constraints. Apart from this, the mobile is likely to be equipped with a powerful Octa-core processor so that you can enjoy a seamless performance while accessing multiple apps and playing intense graphics games.
    Speaking about camera specifications, the phone from Tecno is rumored to feature a Dual camera setup on the rear. There might be a 64 MP so that you can click some life-like pictures. Features on the rear camera setup might include Digital Zoom, Auto Flash, Face detection, Touch to focus. On the front, the Tecno Camon 19 is expected to come with a 16 MP camera for selfies and video chats. The phone is rumored to feature a 6.8 inches display with a resolution of 1080 x 2460 Pixels so that you can enjoy watching movies or playing games.
    Tecno Camon 19 is comes with various connectivity options that might include WiFi - Yes, Wi-Fi 802.11, b/g/n, Mobile Hotspot, Bluetooth - Yes, v5.0,  4G (supports Indian bands), 3G, 2G. Moreover, sensors on the smartphone might include Accelerometer, Gyro, Proximity, Compass.` });

    server.create("product", { category: "phones-and-tablets", name: 'LG K33 4G LTE Mobile Phone 6.53" 3GB+32GB Smartphone - Black', price: 49990, imageUrl: "/assets/phones-and-tablets/LG -K33.jpg", description: `LG K33 is a smartphone with Android OS, 6.53 inch, IPS LCD HD+ Display, 4G Network, Dual rear cameras, Back 13MP, Front 5MP Main sensor, FHD Video Recording, Octa-Core, 2.0GHz, MediaTek Helio P35 Chipset, 3GB RAM, 32GB storage, 3000mAh Battery, USB Type C smartphone.

    Features:
    Buy the LG K33, which not just has pleasant looks but is also equipped with striking features.
    This LG phone is powerful to the core as it lets you enjoy a breezy-smooth performance while accessing multiple apps since it is powered with Octa-core 2.0 GHz Cortex-A53 MediaTek MT6762 Helio P22 (12nm). Moreover, the phone comes with 3 GB of RAM and 32 GB of internal storage so that you can store all your songs, videos, games, pictures and other stuff without worrying about space constraints.
    The mobile paves the way for crystal clear visuals as it comes with a 6.53 inches display that has a resolution of 720 x 1600 Pixels..
    The camera specifications of the phone are very captivating. The LG K33 comes with a dual camera setup on the rear which has 13 MP + 5 MP cameras so that you can capture portraits, landscapes, and more in the form of beautiful pictures. Features on the rear camera setup include Digital Zoom, Auto Flash, Face detection, Touch to focus. On the front, the mobile features a 8 MP camera so that you can click some amazing selfies and do video chats.
    Besides, the LG K33 runs Android v11 operating system and houses a decent 3000 mAh battery that lets you use it for hours on end while watching movies, listening to songs, playing games and doing other stuff without worrying about charging it frequently..
    Various connectivity options on the LG K33 include WiFi - Yes, Wi-Fi 802.11, b/g/n, Mobile Hotspot, Bluetooth - Yes, v5.0, and 4G (supports Indian bands), 3G, 2G. Also, the handset is a treat to use as the sensors on the LG K33 include Accelerometer, Proximity.
    The dimensions of the LG K33 are 147.8 mm x 71.1 mm x 8.64 mm; and it weighs around 145 grams..
` });

    server.create("product", { category: "phones-and-tablets", name: 'Nokia X20, 6.67" HD+ 8GB RAM + 128GB ROM Android 11 (64MP + 5MP + 2MP + 2MP) + 32PM Dual SIM - Nordic Blue', price: 154990, imageUrl: "/assets/phones-and-tablets/Nokia-X20.jpg", description: `As far as the cameras are concerned, the Nokia X20 on the rear packs a 64-megapixel primary camera; a 5-megapixel camera; a 2-megapixel camera, and a 2-megapixel camera. The rear camera setup has autofocus. It sports a 32-megapixel camera on the front for selfies.

    Nokia X20 is based on Android 11 and packs 128GB of inbuilt storage that can be expanded via microSD card (up to 512GB). The Nokia X20 is a dual-SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM cards. The Nokia X20 measures 168.9 x 79.7 x 9.1mm (height x width x thickness) and weighs 220.0 grams.

    Connectivity options on the Nokia X20 include Wi-Fi 802.11 a/b/g/n/ac, GPS, Bluetooth v5.00, NFC, USB Type-C, FM radio, 3G, and 4G (with support for Band 40 used by some LTE networks in India). Sensors on the phone include accelerometer, ambient light sensor, gyroscope, proximity sensor, and fingerprint sensor.

    IPhone 6S Plus` });

    server.create("product", { category: "phones-and-tablets", name: 'IPhone 6S Plus 2GBRAM+64GB(Refurbished) -Rose Gold (Grade A)', price: 76900, imageUrl: "/assets/phones-and-tablets/IPhone-6S-Plus.jpg", description: `    OS: iOS 9

    CPU: A9+M9,

    SIM Card: Nano SIM

    Display: 5.5-inch Retina HD with 3D-touch

    Screen Resolution:1080*1920

    RAM: 2GB

    ROM: 64G

    Front Camera: 5MP FaceTime HD Camera

    Rear Camera: 12MP iSight Camera

    Battery: 2750mAh

    Sensors: Touch ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor

    Dimensions: 158.2* 77.9 * 7.3mm

    Net Weight: 192g

    3D Touch functionality

    3D Touch has improved touch sensitivity for faster and easier touch operations, and provides you with real time feedback

    Out-of -this-world camera

    The 12MP iSight camera captures sharp, detailed photos and 4K video. Includes a 5MP Facetime HD front-facing camera.

    A9 chip technology

    iphone 6s Plus is powered by the custom-designed 64-bit A9 chip with desktop PC-level performance that is up to 70% faster than traditional CPUs

    Seamless design

    The phone casing is built from sleek 7000 series aluminum and the screen is made from strong, yet stylish Gorilla glass

    Advanced Touch ID security

    Advanced Touch ID sensor help unlock your phone more quickly and helps you make safe payments with Apple Pay

    Better 4G LTE functionality and faster Wi-Fi

    This phone features 4G LTE connectivity that is two times faster than previous versions, and faster Wi-Fi connectivity for better web browsin

    Accessories:

    1 * Phone 

    1 * USB Cable

    1 * USB Adapter 

    1 * Documentation` });

    server.create("product", { category: "phones-and-tablets", name: 'Cubot Note 8 5.5" 2GB RAM/16GB ROM Android 11 - Green', price: 38990, imageUrl: "/assets/phones-and-tablets/Cubot-Note.jpg", description: `Welcome to Cubot Official Store.
    Cubot is the manufacturer engaging in research, development, production, and sales of smartphones. Cubot brings reliable products to consumers all over the world so that our users can have convenient lifestyles with smart devices. So far, Cubot will always adhere to the brand purpose, continue to develop and innovate, ensure stable quality, and provide high-quality service.

    5.5 Inch FW+ Display
    Cubot Note 8 is designed with 5.5 Inch FW+ Display, offers you an expansive visual enjoyment while watching TV, playing games or shopping online.With a resolution of HD+ screen, you can obtain more clarified and vivid visual experience.

    MT6739WW Quad Core Processor & 2GB RAM + 16ROM
    Inserted with formidable MT6737 Processor, 2GB RAM and 16GB ROM, provide the best running effect. Cubot Note 8 supplies a smooth and fluent multitasking experience without lag.

    13MP AI Camera
    Multiple rear cameras is a luxury feature that is usually found on expensive phones. Cubot Note 8 equipped with a 13MP AI camera setup on the back that works together to make your photos better.

    5MP Front Camera
    5MP front camera enhances images with AI Beautification, record every spot of your beauty.

    Dual Nano SIM Card
    This gives you two phone numbers to make and receive calls and text messages. Allows you switch between work and life will.

    Security Face Unlock
    Instantly unlock the phone with the function of security face unlock, Cubot Note 8 offers a quick, automatic, and seamless verification experience.

    3100mAh High-Capacity Battery
    Designed with 3100mAh High-capacity battery, no matter hiking outdoors, watching TV or listening to music, you can indulge yourself in long-time enjoyment without having to worry about running out of battery.

    Summary

    5.5" IPS Touch Screen
    3100mAh Battery(typ)
    16GB ROM + 2GB RAM, Support TF Card up to 128GB Extended
    Face Unlock
    5MP Front Camera
    13MP Dual Rear Camera with Flash
    Android™ 11(Go edition)
    Specification
    Height: 138mm
    Width: 65mm
    Thickness: 10.8mm
    Quad-Core

    Network & Connectivity
    2G: GSM 850/900/1800/1900MHz
    3G: WCDMA 900/2100MHZ
    4G: FDD B1/3/7/8/19/20
    GPS
    WIFI 2.4G
    Bluetooth 4.2


    Sensor
    Face ID
    Proximity
    Accelerometer
    Others(Light sensor)

    For smartphones, we offer 12 months repair warranty counted from the date of purchase.
    Warranties on all replacements follow the same warranty timeframe of the original defective item, or 3 months after being replaced, whichever is longer.
    Do Apply to The Following
    1. For quality-related warranty claims (non-human damage),  buyers can return items for repairs. Buyers pay the shipping fees for sending the item back, while we pay for the shipping fees for sending the repaired item back to the buyer.
    2. For damage from misuse(including, but not limited to: falls, extreme temperatures, water, operating devices improperly), we can offer free repair, but replacement for damaged parts will be charged based on the condition.` });

    server.create("product", { category: "phones-and-tablets", name: 'FreeYond F9,2GB+64GB,6.52" Smartphone,4G,5000mAh,Black', price: 66052, imageUrl: "/assets/phones-and-tablets/FreeYond F9.jpg", description: `A Design that dare to surmount
    The body frame, lens module protection area, and rear shell are designed with a highly integrated streamline design.

    Camera Module seems to grow in the body,Achieving unprecedented visual unity,Expresses the endless reverie of future technology.

    The feeling of FreeYond F9 holding hands can be described as perfect,

    The transition curve of the back and side has been adjusted and polished for tens of thousands of times,

    So the fit between the mobile phone and the palm is very good.

    5000mAh Large Battery

    From going out in the morning to going home at night,

    You will not be anxious about charging your phone, you can use it for one day no matter what you use it

    35 days standby

    7 days music playback

    17 hours video playback

    21 hours calling

    Note: The battery life data comes from FreeYond Labs,

    Test conditions: screen brightness 50%, music playback headset volume 50%, video playback speaker volume 50%, call volume 50%,

    The actual situation will vary slightly depending on the test software version, specific test conditions and environment, and the actual use time shall prevail.



    6.52 inch High-definition IPS Large Screen

    Watch videos, play games, surf the Internet, enjoy photos,

    Everything on the screen looks vividly.



    Dual-unlock of Fingerprint and Face Recognition

    Fingerprints are passwords that don't need to be remembered,

    the side fingerprint allows you to enter the system the moment you hold the phone,

    Front face recognition allows you to pick up your phone and use it.

    Type-C Data Port＋3.5mm Audio Port

    Equipped with mainstream Type-C interface, no distinction between positive and negative, good compatibility, more stable charging and data transmission.

    It still retains the independent 3.5mm audio interface, which is more convenient to connect headphones and speakers,

    No need to switch, you can also charge while listening to music,

    And the headphone port is designed at the bottom of the phone, it will be more convenient to use wired headphones.

    8 Cores 1.6 GHz High-performance Processor

    Internet access, watching videos, and playing games can all be handled with ease,

    Low heat, low power consumption, longer battery life` });

    server.create("product", { category: "phones-and-tablets", name: 'Microsoft Surface Go 2 10.5" Touch-Screen - Intel Pentium - 4GB RAM 64GB ROM Wins 10', price: 155000, imageUrl: "/assets/phones-and-tablets/Microsoft-Surface-Go.jpg", description: `Standing screen display size: 10.51 Inches
    Screen Resolution: 1920 x 1280
    Max Screen Resolution: 1920 x 1280 Pixels
    Graphics Coprocessor: NVIDIA
    Chipset Brand: Intel
    Card Description: Integrated
    Wireless Type: Bluetooth, 802.11ax
    Number of USB 3.0 Ports: 1
    Average Battery Life (in hours): 10 Hours
    Brand: Microsoft
    Series: Srfc Prjct V-5 SC EN/XD US/Canada Hdwr Platinum
    Item model number: STV-00001
    Hardware Platform: PC
    Operating System: Windows 10 Home
    Item Weight: 1.2 pounds
    Product Dimensions: 7.81 x 10.61 x 1.83 inches
    Item Dimensions LxWxH: 7.81 x 10.61 x 1.83 inches
    Color: Silver
    Rear Webcam Resolution: 8 MP
    Processor Brand: Intel
    Processor Count: 1
    Computer Memory Type: DDR4 SDRAM
    Flash Memory Size: 64 GB
    Hard Drive Interface: Solid State
    Power Source: Battery` });

    server.create("product", { category: "phones-and-tablets", name: 'Renew Refurbished Lenovo Tab3 8"1+16GB TB3-850F Tablet Black Grey', price: 40000, imageUrl: "/assets/phones-and-tablets/Lenovo-Tab3.jpg", description: `Product Description：【OS: Android 6.0】【RAM:1GB】【ROM: 16GB】【External Memory: TF card up to 64GB (not included) 】【Support Network: 2G,4G,Built-in 3G,WiFiWIFI: 802.11b/g/n wireless internet】【GPS: Yes】【Bluetooth: Yes 】【Screen type: IPS】【Screen size: 8 inch】【Screen resolution: 1280 x 800 】【Back camera: 5.0MP】【Front camera: 2.0MP 】【Pre-installed Language: Chinese and English】
    Attention:We QC the products during shipment to ensure that the products are delivered to you with the best quality.We update our product regularly, if you want to check other cool products, @Afican Closet will always be welcome.  ------------------------------------------------ Please check other types of product in our store @Afican Closet. I bet you will like it.  Note: If you have any questions, please read the instructions.If you're not interested in this, You can find other nice products in our store  @Afican ClosetWe hope our products can make you happy.` });

    server.create("product", { category: "phones-and-tablets", name: 'Nokia Tab T21 -10.4-Inch 4GB RAM, 64GB ROM Android 12 NANO SIM - 8MP + 8MP - Charcole Grey', price: 168500, imageUrl: "/assets/phones-and-tablets/Nokia-Tab-T21.jpg", description: `The brand has the first tablet and also the first from its licensee HMD Global. Fast and long lasting battery with fast charging. 3 years of monthly security updates, 2 years of OS upgrades, metal design, google kids space

    The tablet comes with a 10.4-inch touchscreen display with a resolution of 2000x1200 pixels. Nokia T21 is powered by a 1.8GHz octa-core Unisoc T612 processor. It comes with 4GB of RAM. The Nokia T21 runs Android 12 and is powered by a 8200mAh battery.

    As far as the cameras are concerned, the Nokia T21 on the rear packs 8-megapixel camera. It sports a 8-megapixel camera on the front for selfies. With Nokia T21 tablet you are very secure when it come to the security updates.

    Nokia T21 is based on Android 12 and packs 64GB of inbuilt storage that can be expanded via microSD card. The Nokia T21 measures (height x width x thickness) and weighs

    Connectivity options on the Nokia T21 include USB Type-C, Wi-Fi 802.11 a/b/g/n/ac, USB OTG, and Wi-Fi Direct. Sensors on the tablet include ambient light sensor and accelerometer. Nokia T21 has a 2k resolution, low blue light certified display, stereo speakers, and dual microphones with Al noise reduction` });

    server.create("product", { category: "phones-and-tablets", name: 'Huawei TABLET 4G CAN MAKE CALL AS PHONE MediaPad M2 8,0 Tablet PC', price: 49999, imageUrl: "/assets/phones-and-tablets/Huawei TABLET.jpg", description: `(USED / RE-NEWED) International Firmware HUAWEI MediaPad M2 8.0 Android Tablet PC Kirin 930 Octa Core 8MP 1920*1200
    Only LTE version (  M2 803L  ) Support SIM card, you can make phone calls.WIFI version (  M2 801 W  ) Not compatible with SIM card.Storage:The actual available storage is not equal to the written number, the reason we can clarify is that part of the storage will be occupied by your phone's software settings. In the final available storage you can check the screenshots of Antutu scores. We can't accept the dispute about
` });

    server.create("product", { category: "phones-and-tablets", name: 'Maxim MatrixPad Ultra Slim Android Tablet - 4GB + 64GB - 10.1" - 5G WiFi - Octa Core - GPS - Bluetooth + LEATHER CASE', price: 89900, imageUrl: "/assets/phones-and-tablets/Maxim ​MatrixPad.jpg", description: `Maxim MatrixPad comes with a 10 inch HD display, 4GB RAM, 64GB ROM(expandable up to 128 GB), 4GLTE, Octa-Core processor, Android 10.0 OS, Dual cameras(8MP rear camera), 5G WiFi, FM, GPS. What's more, it's featured the Read mode, with which you can enjoy immersive reading in black and white. Complete tasks, enjoy movies on the go, watch online recipes or drama on FaceBook, read E-books, play light games or use offline Google map outdoor. Make your day joyful and convenient.
    Native Android OS, No Bloatware
    MatrixPad S10 tablet runs the native GMS Android 10.0 Pie. It comes with basic Apps installed only, such as Google Play, Google Map, Google Music, Gmail, YouTube. With Google Play already on, you have full access to download any desired Apps. Put an Android game App or music App from Google Play straight into your Matrixpad tablet is easy.

    Technical Details
    Android 10.0 
    10.1 '' IPS HD display
    Octa-Core (8 x 1.3Ghz)
    4GLTE Network
    5G WIFI Browsing
    4GB RAM, 64GB ROM (expandable up to 128 GB)
    6000 mAh battery
    1x USB C port; 1x Micro SD card slot; 1x 3.5 mm headphone jack
    802.11 bgn WiFi
    Read mode/ Eye health mode` });

    server.create("product", { category: "phones-and-tablets", name: 'XIAOMI Mi Pad 2 16 Or 64GB Windows 10 OS Tablet', price: 49999, imageUrl: "/assets/phones-and-tablets/XIAOMI-MI-Pad-2.jpg", description: `( USED / RE-NEWED )  Xiaomi Mi Pad 2 16 or 64GB Windows 10 TABLET
    Mi Pad 2 is powered by an Intel X5 chipset and an Intel HD Graphics processor,7.9-inch display with resolution equal to Apple's Retina Display of 2,048x1,536-pixels.It runs a new version of MIUI and Windows 10 OS(64gb only).
    Rounding up the specs is a f/2.0 8-megapixel rear camera, and a 5-megapixel front camera for the selfie addict. The slate is powered by a large 6190mAh battery -- note that this is not removable.It’s not just the screen, the Xiaomi Mi Pad 2 is almost identical to the Apple iPad mini 2 in terms of design too, except it’s made of plastic rather than metal. With measurements of 200.4 x 132.6 x 6.95mm and a weight of 322 grams, it is ever so slightly larger and heavier than Apple's mid-sized tablet.

    - 7.9" high resolution display (326 PPI)
    - 8MP/5MP cameras
    - 6190mAh battery
    - USB Type-C port 
    - Available in dark grey and  gold
    - Windows 10 

    Full metal body, 6.95mm, 322g, ultra-thin and light` });

    server.create("product", { category: "phones-and-tablets", name: 'Samsung Galaxy Tab Note 8.0 TABLET GLOBAL ROM WITH GOOGLE', price: 39999, imageUrl: "/assets/phones-and-tablets/Samsung-Galaxy-Tab-Note-8.0.jpg", description: `( USED / RE-NEWED ) Samsung Galaxy Tab Note 8.0 N5110 N5120  USED TABLET  - Sim + Wifi - 8.0" inch - Android 12.0 - Support all app.  - Zoom, netflix, YouTube, FB, all no problem - 16GB / 2GB RAM! - Sim + Wifi - 8.0" inch- Support ALMOST all app.  - Zoom, netflix, mewatch, movie app, office, YouTube, FB, all no problem- 16GB / 2GB RAM  - Can expand memory card up to 128GB.- Micro SD card slot - Come with S pen for drawing and writing- Refurbished condition   Samsung Galaxy Note 8.0 - Specification  
    Design
    Body: 338gram,135.9×210.8×8mm.Available colors: Available 
    Display
    Type: TFT,Display colors16MSize: 8.0inches,Screen/body65%Touchscreen: MultitouchResolution: 800×1280px.189ppi 
    Camera 
    Primary camera: 5MP  
    Interfaces
    Connection: Infrared portNavigation: GPS,GLONASS,Compass,A-GPSWi-Fi: 802.11 a/b/g/nBluetooth: 4.0,A2DPUSB: USB 2.0,MicroUSB 
    Cellular network
    SIM Card: Micro-SIMTechnologies: GSM,2G,3G,LTENetwork speed: 4G upload speed,50Mbps  
    Multimedia
    Sound: Headphone input 3.5mmSpeaker: LoudspeakerFeatures: Browser,Document editorCodecs: MP3,MP4,DIVX,WAV,eAAc,FLV  
    Power
    Battery: Lithium Ion4600mAhBattery life: Battery life - waiting710hours
` });

    server.create("product", { category: "phones-and-tablets", name: 'Microsoft Surface Duo 6GB RAM 256GB SSD 5.6" Display Android 10', price: 275000, imageUrl: "/assets/phones-and-tablets/Microsoft-Surface-Go.jpg", description: `Open two screens and open new possibilities
    Surface innovation comes to a dual-screen mobile device, featuring the best of Microsoft 365, every Android app in the Google Play store, phone calls, and more

    Dual PixelSense™ Fusion Displays open: 8.1” AMOLED, 2700x1800

    Qualcomm® Snapdragon™ 855 Mobile Platform optimized for the dual-screen experience

    The magic of a 360° hinge and two screens
    Introducing revolutionary new ways to use a mobile device thanks to an innovative 360° hinge, two screens, and apps that seamlessly work together. Do one better.` });

    server.create("product", { category: "phones-and-tablets", name: 'Lenovo Xiaoxin Pad Plus Wi-Fi - Snapdragon 750 - (6GB+128GB)', price: 223240, imageUrl: "/assets/phones-and-tablets/Lenovo-Xiaoxin-Pad-Plus.jpg", description: `This is Lenovo Tab P11 Plus (Also called the Lenovo Pad Plus) with snapdragon 750. It comes with 6GB of Ram and 128GB of Rom. The Rom can be expanded with SD card. It supports Lenovo stylus pen and Lenovo magnetic keyboard (Sold separately). Its one of the most budget friendly tablet with very impressive specs.
    The Lenovo Xiaoxin series has become the favourite for most people because of its super processing power and speed. That is why Lenovo built Xiaoxin pad plus with Snapdragon (SD) 750G. This processor is even better that the Lenovo pad pro 2020 whose processor is Snapdragon (SD) 730. However, the 2020 Lenovo Pad pro has a bigger battery. 
    This Lenovo Pad Plus is just slightly more expensive than the Lenovo Tab P11 but it a lot better in terms of processing capabilities. The processor is similar to the Lenovo Pad Pro 2021 and 2022. These tablets are a lot more expensive. 
    The Lenovo Pad Plus is a way for Lenovo to ensure that customers with high processor needs can still get mid range / high end processor on a budget. It provides customers with options so they can do choose the product that suits the unique specs, requirements and budget.vIf you are viewing this product on your system, kindly check out the unboxing YouTube video at the bottom to get a clearer picture of what the tablet looks like. Some unique specs of the tab are given below:
    1. ZUI12.5 (Android 11) operating system
    2. Qualcomm Snapdragon 750G Octa core 2 x A77 2.2GHz + 6 x A55 1.8GHz
    3. 6GB RAM + 128GB ROM
    4. 11 inch 2K LCD screen, 2000x1200 resolution.
    5. Support 2.4GHz/5GHz WiFi and Bluetooth 5.0, support micro SD card (not included)
    6. Support face identification, Dolby Atmos, IP52 waterproof and dustproof, Zui learning assistant
    7. Powered by 7700mAh lithium battery, support QC3.0 fast charging
    8. 13MP AF rear camera, 8MP front camera
` });

    server.create("product", { category: "computing", name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)', price: 1350000, imageUrl: "/assets/computing/Apple-MacBook-Pro-2021.jpg", description: `Built for all types of creatives, including developers, photographers, filmmakers, 3D artists, music producers, and more, the Apple 14.2" MacBook Pro with M1 Pro Chip is the ultimate pro mobile workstation for the ultimate user.
    The system features the Apple M1 Pro 8-Core Chip, which provides the power and performance needed to handle your professional workflows. The 14.2" Liquid Retina XDR display features a 3024 x 1964 resolution, 1,000 nits of sustained brightness, 1,600 nits of peak brightness, P3 color gamut support, and more. With up to 512GB of SSD storage, you'll be able to load massive files and launch apps quickly, enabling you to work with photo and video libraries from almost anywhere.

    Designed for All Types of Creatives
    Apple M1 Pro
    Packed with 33.7 billion transistors, the Apple M1 Pro integrates the CPU, GPU, Neural Engine, I/O, and more into a single system on a chip (SoC). Built with 5nm process technology, the Apple M1 Pro delivers the performance you need without sacrificing power efficiency. The 8-Core CPU features six performance cores and two high-efficiency cores. The 16-Core Neural Engine provides support for on-device machine learning acceleration and improved camera performance. The M1 Pro offers up to 200 GB/s of memory bandwidth as well as support for up to 32GB of unified memory. The efficient architecture of M1 Pro means they deliver the same level of performance whether MacBook Pro is plugged in or using the battery. The M1 Pro also features enhanced media engines with dedicated ProRes accelerators specifically for pro video processing. With up to a 16-Core GPU, the M1 Pro delivers up to 70 percent faster CPU performance than the M1.
    14.2" Liquid Retina XDR Display
    Featuring mini-LED technology, this MacBook Pro houses a 14.2" Liquid Retina XDR display. Delivering up to 1,000 nits of sustained, full-screen brightness, a high 1,600 nits of peak brightness, a 1,000,000:1 contrast ratio, and a billion colors, the Liquid Retina XDR display can handle the extreme dynamic range of HDR content, providing detailed shadows, brilliant specular highlights, deeper blacks, and vivid colors. The display is less than 4 mm thin, which is achieved by having seven films and diffusers that mix and shape the light efficiently. The oxide thin film transistor (TFT) allows pixels to charge twice as fast as before.
    ProMotion - Up to 120 Hz Refresh Rate
    With ProMotion technology, the MacBook Pro automatically varies the refresh rate to match the motion of your onscreen content. This helps preserve battery life while also making tasks feel more fluid and responsive. This means that the display can have up to a 120 Hz refresh rate. Video editors will also have the option to lock in a refresh rate that is optimal for their footage.
    P3 Wide Color Gamut
    The narrow-band LED-powered backlight allows the MacBook Pro to represent the P3 wide color gamut for brilliant, true-to-life color in photos and videos.
    Storage - Bring Your Whole Studio with You
    The MacBook Pro can be configured with up to 8TB of SSD storage so you can take your photo or video libraries with you no matter where you're headed. And with superfast speeds, massive files load in an instant and pro apps launch in a blink. This particular model comes with a 512GB SSD.
    Connectivity
    Thunderbolt 4
    Thunderbolt 4 combines ultra-high bandwidth with the versatility of the USB Type-C industry standard to create one revved-up universal port. It integrates data transfer, charging, and video output in a single connector, delivering up to 40 Gb/s of throughput for twice the bandwidth of Thunderbolt 2. The MacBook Pro is equipped with three ports, so you can do all of that from either side. Existing devices are easily connected with a cable or adapter. And Thunderbolt 4 is reversible, so no matter how you plug in, it's always right side up.
    MagSafe 3
    MagSafe 3 makes connecting a power cable quick and easy while also protecting your MacBook Pro. Apple also brings fast charging to the MacBook Pro, allowing you to charge up to 50 percent in just 30 minutes.
    High-Fidelity Audio
    Spatial Sound Speakers and Better Mics
    The MacBook Pro features a high-fidelity six-speaker sound system, which has two tweeters for a clearer soundstage as well as four force-cancelling woofers, resulting in 80 percent more bass. The sound system also supports spatial audio, providing a three-dimensional audio experience, whether you're listening to music or watching a movie in Dolby Atmos. Apple also has studio microphones that have a lower noise floor, resulting in clear calls as well as voice recordings.
    FaceTime
    Full HD 1080p FaceTime HD Camera
    Now with a Full HD 1080p FaceTime HD camera, the MacBook Pro uses the ISP and Neural Engine in M1 Pro and M1 Max for computational video that enhances video quality.
    System Navigation
    Keyboard
    Physical function keys are back with the Magic Keyboard on the MacBook Pro. Replacing the Touch Bar, the familiar, tactile function keys have made their return. There is even a wider ESC key.
    Touch ID
    The Touch ID enables fast, easy authentication for secure logins and purchases.
    Force Touch Trackpad
    Speed your workflow with Force click and multi-touch gestures.
    All-Day Battery Life
    Battery
    From pro workflows to everyday tasks, the MacBook Pro delivers power efficiency while still maintaining performance. The MacBook Pro can deliver up to 17 hours of video playback.` });

    server.create("product", { category: "computing", name: 'Apple MacBook Pro 14" Laptop - M2 Pro Chip - 16GB - 512GB SSD - Space Gray', price: 1425000, imageUrl: "/assets/computing/Apple-MacBook-Pro-2022.jpg", description: `Built for all types of creatives, including photographers, filmmakers, 3D artists, music producers, developers, and more, the space gray Apple 14" MacBook Pro is the ultimate pro mobile workstation for the ultimate user.
    The system features the Apple M2 Pro 10-Core Chip, which provides the power and performance needed to handle your professional workflows. The 14.2" Liquid Retina XDR display features a 3024 x 1964 resolution, 1000 nits of sustained brightness, 1600 nits of peak brightness, P3 color gamut support, and more. With up 16GB of unified RAM and 512GB of SSD storage, you'll be able to load massive files and launch apps quickly, enabling you to work with photo and video libraries from almost anywhere.
    Designed for All Types of CreativesApple M2 ProPacked with 40 billion transistors, which is nearly 20% more than the M1 Pro and double the amount in the M2, the Apple M2 Pro integrates the CPU, GPU, Neural Engine, I/O, and more into a single system on a chip (SoC). Built with 2nd-Gen 5nm process technology, the Apple M2 Pro delivers the performance you need without sacrificing power efficiency. The Packed with 40 billion transistors, which is nearly 20% more than the M1 Pro and double the amount in the M2, the Apple M2 Pro integrates the CPU, GPU, Neural Engine, I/O, and more into a single system on a chip (SoC). Built with 2nd-Gen 5nm process technology, the Apple M2 Pro delivers the performance you need without sacrificing power efficiency. The 10-Core CPU features six performance cores and four high-efficiency cores. The 16-Core Neural Engine provides support for on-device machine learning acceleration and improved camera performance. The M2 Pro offers up to 200 GB/s of memory bandwidth as well as support for up to 32GB of unified memory. The efficient architecture of M2 Pro means they deliver the same level of performance whether MacBook Pro is plugged in or using the battery. With up to a 16-Core GPU, the M2 Pro delivers up to 20% faster CPU performance than the M1 Pro. The M2 Pro can support up to two external displays. M2 Pro has a powerful and efficient media engine, including hardware-accelerated H.264, HEVC, and ProRes video encode and decode, allowing playback of multiple streams of 4K and 8K ProRes video while using very little power. CPU features six performance cores and four high-efficiency cores. The 16-Core Neural Engine provides support for on-device machine learning acceleration and improved camera performance. The M2 Pro offers up to 200 GB/s of memory bandwidth as well as support for up to 32GB of unified memory. The efficient architecture of M2 Pro means they deliver the same level of performance whether MacBook Pro is plugged in or using the battery. With up to a 16-Core GPU, the M2 Pro delivers up to 20% faster CPU performance than the M1 Pro. The M2 Pro can support up to two external displays. M2 Pro has a powerful and efficient media engine, including hardware-accelerated H.264, HEVC, and ProRes video encode and decode, allowing playback of multiple streams of 4K and 8K ProRes video This means that the display can 
    Up to two external displays with up to 6K resolution at 60 Hz over Thunderbolt, or one external display with up to 6K resolution at 60 Hz over Thunderbolt and one external display with up to 4K resolution at 144 Hz over HDMI
    Up to one external display supported at 8K resolution at 60 Hz or one external display at 4K resolution at 240 Hz over HDMIAdvanced HDMIThe HDMI output now supports 8K displays at 60 Hz and 4K displays at 240 Hz.MagSafe 3MagSafe 3 makes connecting a power cable quick and easy while also protecting your MacBook Pro. Apple also brings fast charging to the MacBook Pro, allowing you to charge up to 50% in just 30 minutes.High-Fidelity AudioSpatial Sound Speakers and Better MicsThe MacBook Pro features a high-fidelity, six-speaker sound system, which has two tweeters for a clearer soundstage as well as four force-cancelling woofers, resulting in 80% more bass. The sound system also supports spatial audio, providing a three-dimensional audio experience, whether you're listening to music or watching a movie in Dolby Atmos. Apple also has studio microphones that have a lower noise floor, resulting in clear calls as well as voice recordings.FaceTimeFull HD 1080p FaceTime HD CameraWith a Full HD 1080p FaceTime HD camera, the MacBook Pro uses the ISP and Neural Engine in M2 Pro and M2 Max for computational video that enhances video quality.System NavigationTouch IDThe Touch ID enables fast, easy authentication for secure logins and purchases.KeyboardThe Magic Keyboard features a 78-key US layout, including 12 full-height function keys and four arrow keys in an inverted-T arrangement. It is also backlit with an ambient light sensor.Force Touch TrackpadSpeed your workflow with Force click and multi-touch gestures.Battery and PowerAll-Day Battery Life
` });

    server.create("product", { category: "computing", name: 'Lenovo IdeaPad Core I3 4GB RAM/1TB Freedos', price: 203500, imageUrl: "/assets/computing/Lenovo-ideapad.jpg", description: `Think of the Lenovo V15 (15″ Intel) as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design, and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.

    Think of the Lenovo V15 (15″ Intel) as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design, and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.

    Lenovo V15-IML Laptop
    Processor Type Intel Core i3-10110U Processor
    Display Type 15.6″ FHD IPS anti-glare Display (1920×1080)
    Graphics Type Intel UHD Graphics
    Memory Size 4GB DDR4-2666MHz
    Storage Capacity 1TB SATA HDD
    Audio 2x 1.5W stereo speakers with Dolby Audio
    Dual array microphone
    Keyboard Spill-resistant, multimedia Fn keys, numeric keypad
    1x USB 2.0, 2x USB 3.2 Gen 1, 1x HDMI 1.4b, 1x card reader, 1x
    headphone / microphone combo jack (3.5mm), 1x power connector
    Operating System FreeDOS` });

    server.create("product", { category: "computing", name: 'Ace Elec Gaming Mouse 8D Adjustable Wired LED Computer Mouse', price: 3300, imageUrl: "/assets/computing/Ace-Elec-Gaming-Mouse.jpg", description: `ACE ELEC Gaming Mouse Wired, Ergonomic Computer Mice with 6 Programmable Buttons, 4 Circular & Breathing LED Light, 4 Adjustable DPI Up to 3200 for PC Mac Laptop and Gamer (Black)

    【Comfort & Ergonomic Gamer Mouse】The game mouse adopts the streamline ergonomic design and a rubber scroll wheel, the holding operation is comfortable for all-day; surface with abrasion layer, skin-friendly and durable, excellent wired gaming mouse for casual pc gamers.
    【High Precision Adjustable DPI】The mouse with 1200 / 1600 / 2400 /3200 Adjustable DPI Resolution Optical Tracking Technology， provides sensitivity and precise tracking on a wide range of surfaces. Position control achieving precise synchronization, meet your multiple needs, either for daily work or gaming.
    【Flexible Buttons】The game mouse adopts 6 user-programmable buttons, which can be quickly and accurately controlled. This provides a lot of personalized options for your game in the game computer or game notebook computer.
    【Multi Compatibility】PC gaming mouse works perfectly for Windows 10, 8, 7, Vista, XP, Mac OS, Linux, or the latest operating system. Supports desktop, computer, PC, laptop, Macbook, and so on. 
    Product details:
    Product name: Mechanical Marco Programing 7 colors Luminous Gaming Mouse.
    Color classification: Technology Black, Iron Gray, Star Black, Pearl White.
    Model: V6.
    Keys: 6 keys.
    Button click life: 30 million times.
    Backlight: 7 colors breathing lamp.
    Product size: 138*80*38mm.
    Material: ABS+Metal brush bottom plate.
    Resolution: 1000/1600/3200/6400DPI.
    Working mode: Photoeletric.Rate voltage/current: 5v/60mA.
    Interface: USB.
    Whether to support ergonomics: Support.Gross weight: 170G. 
` });

    server.create("product", { category: "computing", name: 'SanDisk 128GB Cruzer Blade USB Flash Drive', price: 7800, imageUrl: "/assets/computing/Sandisk-USB-Flash-Drive.jpg", description: `Go without limitations and pack your important files - photos, movies, music, and personal data - into a stylish, compact, sleek-design SanDisk Cruzer Blade USB flash drive that easily fits in your pocket. 

    The SanDisk Cruzer Blade flash drive series comes with generous storage capacity to meet your backup needs. With capacity options of 128GB, the Cruzer Blade SanDisk offers the drive capacity to meet any user's needs. Simply select the capacity option that that's adequate for your need.
    Whether you're on the road and need to have those digital resources with you, or you simply want to backup files for safety, the SanDisk Cruze Blade flash drive is ready to go. Get to back up, transfer or share your files without hassles.
    And it's all secure. With SanDisk SecureAccess software that creates a password-protected private folder in your flash drive, where your files are secured. With its 128-bit encryption, you can be sure of the protection of your files.` });

    server.create("product", { category: "computing", name: 'Hp 15 Intel Pentium Gold 8GB RAM 1TB', price: 233000, imageUrl: "/assets/computing/Hp-15-Intel-Pentium-Gold.jpg", description: `Product 	WINDOWS 10 64 Bit - 1TB ONEDRIVE CLOUD STORAGE - PROCESSOR UP TO 3.5GHz With Intel Turbo Boost System
    Product name	HP 15
    Microprocessor	Intel® Pentium™ Gold (Up to 2.4 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 2 cores)
    Chipset	Intel® Integrated SoC
    Memory, standard	8GB DDR4-2666 SDRAM 
    Video graphics	Intel® UHD Graphics
    Hard drive	1TB HDD (1000GB HDD)
    Optical drive	SLIM BODY DESIGN
    Display	35.6 cm (15") diagonal HD SVA anti-glare micro-edge WLED- 220 nits, 45% NTSC (1366 x 768)
    Wireless connectivity	Intel® Wi-Fi 6 AX 201 (2x2) and Bluetooth® 5 Combo (Supporting Gigabit file transfer speeds)
    Network interface	Integrated 10/100/1000 GbE LAN
    Expansion slots	1 multi-format SD media card reader
    External ports	2 USB 3.1 Gen 1 Type-C™ (Data Transfer Only, 5 Gb/s signaling rate); 2 USB 3.1 Gen 1 Type-A (Data Transfer Only); 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo; 1 RJ-45
    Minimum dimensions (W x D x H)	32.68 x 22.55 x 1.79 cm
    Weight	1.7 kg
    Power supply type	45 W Smart AC adapter
    Battery type	4-cell, 41 Wh Li-ion
    Battery life mixed usage	Up to 10 hours and 15 minutes
    Video Playback Battery life	Up to 8 hours and 45 minutes
    Webcam	HP Wide Vision HD Camera with integrated dual array digital microphone
    features	Audio by ; Dual speakers; HP Audio Boost 1.0 APPS - HP 3D DriveGuard; HP Audio Switch; HP JumpStart; HP Support Assistant - SECURITY - McAfee LiveSafe™` });

    server.create("product", { category: "computing", name: 'Acer 27 Inch Full HD Curved Gaming Monitor With 165Hz Refresh Rate AMD FreeSync', price: 238000, imageUrl: "/assets/computing/Acer-Gaming-Laptop.jpg", description: `Acer Nitro by Acer 27" Full HD 1920 x 1080 1500R Curve PC Gaming Monitor - AMD FreeSync Premium - 165Hz Refresh - 1ms (VRB) - ZeroFrame Design - 1 x Display Port 1.4 & 2 x HDMI 2.0 Ports

    Acer's Nitro 27" 1500R curved panel monitor with Full HD resolution delivers an incredible gaming experience.
    27" Full HD (1920 x 1080) 1500R Curved Widescreen VA Display
    AMD FreeSync Premium Technology - Brightness: 250 nits
    Response Time: 1ms (VRB) - Refresh Rate: 165Hz
    ZeroFrame Design - 2 speakers, 2 watts per speaker
    Ergonomic Tilt: -5° to 25°, Swivel: 360° & Height Adjustment Range: 4.7"
    VESA mounting compliant (75 x 75mm)
    Ports: 1 x Display Port 1.4 & 2 x HDMI 2.0 Ports (HDMI Cable Included)
 
 
 
    Acer's 27" 1500R curved panel monitor with Full HD resolution delivers the incredible. This AMD FreeSync Premium monitor takes gameplay to the next level of smooth, the games frame rate is determined by your graphics card, not the fixed refresh rate of the monitor, giving you a serious competitive edge. Crisp, true-to-life colors come alive with the amazing 1920 x 1080 resolution, allowing you to enjoy High-Definition entertainment in the comfort of your home. The wide view angle technology lets you share what's on your screen with friends and family as colors stay true no matter what angle you're viewing from.
 
    Incredible 100, 000, 000:1 contrast ratio and rapid response time ensure your games, work and movies are smooth and look as epic as possible. (UM. HE0AA. M02)` });

    server.create("product", { category: "computing", name: 'Samsung Odyssey Ark 55-Inch Curved Gaming Screen, 4K UHD S55BG970NN', price: 4500000, imageUrl: "/assets/computing/Samsung Odyssey Ark.jpg", description: `Display Screen Size (Class)   55   Flat/Curved   Curved   Curvature   1000R   Resolution 3,840 x 2,160   Aspect Ratio 16:9   Brightness (Typical)   600 cd/m2   Peak Brightness (Typical)   1000 cd/㎡   Brightness (Min)   420 cd/m2   Static Contrast Ratio  1,000,000:1 (Static)   Dynamic Contrast Ratio Mega DCR   HDR10+   Yes   HDR10+ Gaming   Yes   Viewing Angle (Horizontal/Vertical) 178°(H)/178°(V)   Response Time 1ms(GtG)   Active Display Size (H x V)   1209.6(H) x 680.4(V)   Color Support Max 1B   Color Gamut (DCI Coverage)   95%(Typ.)   Panel Type   VA   Frame Rate   Max 165Hz   Screen Curvature   1000R   Mini LED Local Dimming   Yes (1,056 zones)   Features HAS(Height Adjustable Stand)   Landscape : 0~270mm(±5mm), Portrait : 0~30mm(±5mm)   Wall-Mount (Size mm) 200 x 200   Windows Certification   Windows 10   Eye Saver Mode   Yes   FreeSync   FreeSync Premium Pro   Flicker Free   Yes   Game Mode Yes   Image Size   Yes   Off Timer Plus   Yes   Refresh Rate   Max 165Hz   Eco Light Sensor   Yes   HDMI-CEC Yes   Auto Source Switch+   Yes   Adaptive Picture   Yes   Quantum Dot Color   Yes   Game bar 2.0   Yes   Power Type (Internal/External)   Internal Power   Power Supply Type   AC100-240V 50/60Hz   Smart Service Smart Type   Smart   Operating System   Tizen™   SmartThings App Support   Yes   Tap View   Yes   Sound Mirroring   Yes   Bixby   US English, UK English, India English, Korean, French, German, Italian, Spanish, BR Portuquese (features vary by language)   Samsung TV Plus   Yes   Universal Guide   Yes (US only)   Mobile to Screen - Mirroring ,DLNA   Yes   built-in   Yes   Video Communication   Yes   Web Service   Microsoft 365   SmartThings   Yes   Workspace   Yes   Interface Bluetooth®   Yes (BT5.2)
    ` });

    server.create("product", { category: "computing", name: 'Samsung 24-Inch CRG5 144Hz Curved Gaming Monitor (LC24RG50FQNXZA)', price: 248000, imageUrl: "/assets/computing/Samsung-24-Inch-CRG5.jpg", description: `GET FULLY IMMERSED with 24-inch curved gaming monitor with an industry-leading 1800R curvature
    144HZ REFRESH RATE puts you ahead, even in the most demanding games
    NO MORE CHOPPY GAME PLAY as AMD Radeon FreeSync virtually eliminates image tears for exceptionally smooth, fast-action gaming
    WHOPPING 3000:1 CONTRAST RATIO with advanced VA panel lets you see enemies, even in darker scenes with greater accuracy
    EASIER ON EYES with Eye Saver Mode to reduce blue light emissions.` });

    server.create("product", { category: "computing", name: 'Hp M27fw 27" FHD 16:9 Freesync IPS Monitor', price: 199000, imageUrl: "/assets/computing/Hp-M27fw-27.jpg", description: `Designed for work and play, the M27fw 27" 16:9 FreeSync IPS Monitor from HP, which lets users immerse themselves in a massive canvas that helps enhance comfort, wellness, and stability. This display employs IPS panel technology, a 75 Hz refresh rate, a 5 ms GtG response time with Overdrive, AMD FreeSync, and more. The IPS (In-Plane Switching) panel affords wide viewing angles of 178°, so content can be viewed from almost any direction, while AMD FreeSync synchronizes the display's refresh rate to the frame rate of the graphics card to greatly reduce or eliminate stuttering, juddering, and tearing during gaming and video playback. A refresh rate of 75 Hz means that the display refreshes 75 times per second for smoother motion and a response time of 5 ms means color changes will be virtually imperceptible. Lastly, coverage for 99% of the sRGB gamut delivers a wider color space and more lifelike images.
    ` });

    server.create("product", { category: "computing", name: 'Samsung M8 Series 32-Inch 4k Uhd Smart Monitor & Streaming Tv With Webcam, Netflix, Hbo, Prime Vod', price: 800000, imageUrl: "/assets/computing/Samsung-M8-Series.jpg", description: `Samsung S32BM80BUU - M8 Series - LED monitor - 4K - 32" - HDR
    SpecificationsGeneralDisplay Type LED-backlit LCD monitor / TFT active matrix - Smart monitorEnergy Class Class GEnergy Class (HDR) Class GEnergy Consumption per Year 58 kWhDiagonal Size 32"Built-in Devices USB Hub, 802.11a/b/g/n/ac network adapter, Bluetooth 4.2 adapterUSB Power Delivery 65 WattPanel Type VAAspect Ratio 16:9Native Resolution 4K 3840 x 2160 at 60 HzPixel Pitch 0.1845 mmBrightness 400 cd/m²Contrast Ratio 3000:1HDR Format HDR10, HDR10+Colour Support 1 billion coloursColour Gamut 99% sRGBResponse Time 4 ms (grey-to-grey)Horizontal Viewing Angle 178Vertical Viewing Angle 178Backlight Technology LED backlightFeatures Game mode, ConnectShare, Flicker Free technology, Eye Saver Mode, Factory Tunning, DLNA, Auto Source Switch+, Adaptive Picture, Ultrawide Game View, Tizen Platform, Tap View, Remote Access, Sound Mirroring, SmartThings App Support, Game Bar 2.0, Adaptive Sound+, far-field voice interactionColour Warm white, daylight blueDimensions (WxDxH) 71.34 cm x 20.38 cm x 57.52 cm - with standWeight 6.7 kgAudioType SpeakersConnectivityInterfaces Micro HDMI (HDCP 2.2) ¦ USB-C 3.0 (power up to 65W) ¦ USB-CMechanicalDisplay Position Adjustments Height, tiltTilt Angle -2/+15Height Adjustment 120 mmVESA Mounting Interface 100 x 100 mmMiscellaneousFeatures Bixby Voice Assistant, AirPlay 2, Voice AssistantIncluded Accessories Remote controlCables Included 1 x micro-HDMI-HDMI cable ¦ 1 x USB-C cableCompliant Standards CECPowerInput Voltage AC 100-240 V (50/60 Hz)Power Consumption SDR (On mode) 40 kWh/1000hPower Consumption HDR (On mode) 75 kWh/1000hPower Consumption (Typical) 40 WattPower Consumption Stand by 0.5 WattSoftware / System RequirementsIncluded Software Google Assistant` });

    server.create("product", { category: "computing", name: 'Aoc CQ32G2S 32" Curved Frameless Gaming Monitor 2K QHD, 1500R Curved VA, 1ms, 165Hz, FreeSyn', price: 392000, imageUrl: "/assets/computing/Aoc-CQ32G2S-32.jpg", description: `High-performance 32” AOC G2 series gaming monitor with QHD 2K 2560x1440 resolution VA panelSuper-curved 1500R monitor to put you at the center of the action for an immersive gaming experienceLightning-fast 1ms Smart Response time (MPRT) and 165Hz super-high refresh rate to hit moving targets and get you ahead of the game by millisecondsAMD FreeSync Premium for the smoothest competitive gameplaySleek 3-sided frameless design with ultra-narrow borders for the ultimate seamless multi-monitor setupEnjoy brilliant images with accurate colors with over 120% sRGB color gamut area coverage. Vibrant and high contrast gaming with 80,000,000:1 SmartContrast ratio with deeper blacks and brighter colors for seeing more details in dark and shadowy scenes1x DisplayPort 1.2, 2x HDMI 2.0, and audio line-out for convenience (1x DisplayPort & 1x HDMI cables included)AOC LowBlue Mode and Flicker-Free technology to increase eye comfortability during extended gaming sessionsQuick-release stand with ergonomic adjustments (height, swivel, & tilt) and VESA compatible wall mount; Display technology: LCD
    ` });

    server.create("product", { category: "computing", name: 'Samsung U32R590CWR 32" 4K (UHD) Curved Monitor', price: 440000, imageUrl: "/assets/computing/Samsung-U32R590CWR.jpg", description: `The leader in curved monitors. Samsung has led the curved monitor market since being the first to introduce the innovative displays to the world in 2015. With industry-leading technology in a full line-up, Samsung's curved monitors are consistently number one in market share and consumer choice.
    4K displayWith 4x more pixels than Full HD, UHD fits more content on the screen and resolves images in finer detail. That means you can view documents and webpages with less scrolling, work with multiple windows more comfortably and see more detail in your photos, videos and games.
    Game ModeGame Mode instantly optimises image contrast in game scenes to give you a competitive edge during gameplay. By selectively adjusting contrast in different areas of the screen, Game Mode reveals details in darker areas of scenes and lets you spot enemies faster.
    Picture-by-PicturePicture-by-Picture (PBP) lets you connect two different devices to the monitor and view input from both simultaneously at their native resolution side-by-side on the screen. Along with PBP, Easy Setting Box makes it easy to display multiple windows of various sizes in different positions.
 ` });

    server.create("product", { category: "computing", name: 'LG 34WQ650-W 34" IPS 1ms Ultrawide Monitor With Speakers', price: 387000, imageUrl: "/assets/computing/LG-34WQ650-W.jpg", description: `34" 21:9 UltraWide™ Full HD DisplaySee More, Do MoreSee more and do more on this UltraWide™ Full HD (2560x1080) screen. With 33% more onscreen space in width than the FHD resolution (1920x1080) display, you can multitask effectively-without shifting through programs.
    USB Type-C™ (DisplayPort Alt Mode)Easy ConnectivityLG 34WQ650 features a USB Type-C™ port supports DisplayPort Alt Mode. Simply using the one USB Type-C™ cable, full DisplayPort image signals can be transferred to an external monitor without dedicated display cables or active adapters.
 ` });

    server.create("product", { category: "computing", name: 'DELL S3221QS 32" Curved 4K (UHD) Monitor', price: 470000, imageUrl: "/assets/computing/DELL-S3221QS.jpg", description: `31.5" curved 4K UHD monitor that supports HDR content playback for a truly immersive entertainment experience.
    Surround your senses
     Expansive views in stunning 4K: The three-sided ultrathin bezel design in 4K UHD (3840 x 2160) resolution lets you enjoy immersive viewing in incredible clarity and fine detail with 4 times the resolution of Full HD. Supports HDR content playback to elevate your entertainment.
    Be in the action: The curved 1800R screen expands your field of vision and provides a wrap-around view for an immersive movie experience.
    More detailed, stunning colors: Vertical Alignment (VA) display technology together with 99% sRGB and 90% DCI-P3` });

    server.create("product", { category: "computing", name: 'Asus TUF Gaming VG27VH1B 27" Curved Monitor, 1080P Full HD, 165Hz (Supports 144Hz)', price: 320400, imageUrl: "/assets/computing/Asus-TUF.jpg", description: `Features & Details
    27-inch Full HD (1920 x 1080) 1500R curved gaming monitor with ultrafast 165Hz refresh rate designed for professional gamers and immersive gameplay
    ASUS Extreme Low Motion Blur (ELMB) technology enables a 1ms response time (MPRT) together with Adaptive-sync, eliminating ghosting and tearing for sharp gaming visuals with high frame rates.
    FreeSync Premium technology to eliminate screen tearing and choppy frame rates
    Shadow Boost enhances image details in dark areas, brightening scenes without over-exposing bright areas
    Flexible connectivity options with HDMI (V2.0) and D-Sub
    Supports both Adaptive-Sync with NVIDIA GeForce graphics cards and FreeSync with AMD Radeon graphics cards (Compatible with NVIDIA GeForce GTX 10 series, GTX 16 series, RTX 20 series and newer graphics cards)
 ` });

    server.create("product", { category: "computing", name: 'Hp N246v 23.8" IPS Monitor', price: 160000, imageUrl: "/assets/computing/Hp-N246v.jpg", description: `Designed for everyday business use, the N246v 23.8" 16:9 IPS Monitor from HP is built with an In-Plane Switching (IPS) panel that provides you with vivid colors and wide 178° viewing angles. Specs-wise, it has a 1920 x 1080 Full HD resolution with a 60 Hz refresh rate, an anti-glare panel coating, a 5 ms response time (GtG), a 250 cd/m² brightness rating, a 1000:1 static contrast ratio, an 8-bit color depth, and 72% NTSC color gamut coverage to deliver crisp and clear details with brighter bright colors and deeper blacks. Once connected to your system via VGA, DVI-D, or HDMI, it can be tilted -5 to 20° to best fit your preferred viewing angle. Furthermore, you can also install an optional stand, mount, or arm using the 100 x 100mm VESA mounting holes on the back. This display has a lifespan of 30,000 hours to half brightness.` });

    server.create("product", { category: "computing", name: 'Hp Pavilion GAMING15 Intel Core I7 1TB SSD 16GB RAM WIN11 4GB NVIDIA Backlit Keyboard', price: 857000, imageUrl: "/assets/computing/Hp-Pavilion-GAMING15.jpg", description: `HP Pavilion Gaming Laptop 15-dk2256nia (60H71EA)Operating systemWindows 11 Home Single Language 
    Processor family11th Generation Intel® Core™ i7 processor
    ProcessorIntel® Core™ i7-11370H (up to 4.8 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 4 cores) 1 2 
    ChipsetIntel® Integrated SoC
    GraphicsDiscrete,
    NVIDIA® GeForce RTX™ 3050 Laptop GPU (4 GB GDDR6 dedicated)
    Memory16 GB DDR4-3200 MHz RAM (2 x 8 GB)
    (Transfer rates up to 3200 MT/s.) 
    Internal Storage1 TB PCIe® NVMe™ M.2 SSD
 
    Display39.6 cm (15.6") diagonal, FHD (1920 x 1080), IPS, micro-edge, anti-glare, 300 nits, 72% NTSC 3
    TouchscreenNo
    Screen-to-body ratio (without speakers)82.29% 4
    Color gamut72% NTSC
    Brightness300 nits
    Minimum dimensions (W x D x H)36 x 25.6 x 2.34 cm (Dimensions vary by configuration)
    Weight2.23 kg (Weight varies by configuration)
    Software - Productivity & finance1 month trial for new Microsoft 365 customers 5
    Software includedMcAfee LiveSafe™ 6
    Pre-installed softwareExpressVPN (30 day free trial); LastPass Premium (30 day free trial) 6
    Cloud service25 GB Dropbox storage for 12 months 7
    Battery type3-cell, 52.5 Wh Li-ion polymer ( 8)
    Battery lifeUp to 6 hours and 30 minutes 9
    Battery recharge timeSupports battery fast charge: approximately 50% in 45 minutes 10
    WirelessRealtek Wi-Fi 6 (1x2) and Bluetooth® 5.2 wireless card (supporting gigabit data rate) 11 12 13 (MU-MIMO supported; Miracast® compatible)
    Network interfaceIntegrated 10/100/1000 GbE LAN
    Product colorShadow black, acid green chrome logo
    KeyboardFull-size, acid green backlit, shadow black keyboard with numeric keypad
    CameraHP Wide Vision 720p HD camera with integrated dual array digital microphones
    AudioAudio by B&O; Dual speakers; HP Audio Boost
    Pointing deviceHP Imagepad with multi-touch gesture support; Precision Touchpad support
    Expansion slots1 multi-format SD media card reader 
    Ports1 USB Type-C® 10Gbps signaling rate (DisplayPort™ 1.4, HP Sleep and Charge); 1 USB Type-A 5Gbps signaling rate (HP Sleep and Charge); 2 USB Type-A 5Gbps signaling rate; 1 AC smart pin; 1 HDMI 2.0; 1 headphone/microphone combo; 1 RJ-45 14` });

    server.create("product", { category: "computing", name: 'Hp 15 VICTUS GAMING, INTEL CORE I5, 8GB RAM, 512GB SSD,4GB NVIDIA GTX 1650 WINS 11', price: 625000, imageUrl: "/assets/computing/Hp-15-VICTUS-GAMING.jpg", description: `Keep up with the biggest games and the best players. Up to 12th gen Intel® Core ​and graphics.
    Superior processing components
    Play at your best with a 12th Gen Intel® Core™ processor , a modern graphics card, and plenty of memory.
 
    Sophisticated and refined design
    With a smaller footprint and up to three colors options , this spritely device looks good anywhere.
 
    Every feature you could need
    From the updated thermal design to the HD camera, this laptop has everything.
 
    A dynamic processor that adapts to you for superior multi-tasking performance
    12th Gen Intel® Core™ processors distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.
 
 
 
    144Hz FHD anti-glare display
    Reduce frustrating lag and image ghosting with a display that combines a 144Hz refresh rate and 1080p Full High Definition resolution for smooth, crisp gameplay.
 
    Micro Edge display
    By squeezing a larger screen into a smaller frame, this ultra-thin, barely visible bezel revolutionizes your display's appearance with a beautifully efficient design.
 
 
 
    CPU: 12th Generation Intel Core i5-12450H (8 Cores, 12 Threads, 12MB Smart Cache, Base Frequency at 2.0 GHz, Up to 4.4 GHz at Max Turbo Frequency)
 
    Graphics: NVIDIA GeForce GTX 1650 (4 GB GDDR5 dedicated)
 
    Memory: 8GB RAM (Up to 32GB DDR4 RAM)
 
    Hard Drive: 512GB (Up to 2TB PCIe NVMe M.2 Solid State Drive)
 
    Operating System: Windows 11 Home 64-bit
 
    Display: 15.6-inch diagonal, FHD (1920 x 1080), 144 Hz, 9 ms response time, IPS, micro-edge, antiglare
 
    Touchscreen: No
 
    Backlit Keyboard: Yes (Enable: Fn + F4)
 
    Ports: 1 x SuperSpeed USB Type-C 5Gbps signaling rate (DisplayPort 1.4, HP Sleep and Charge)
 
    2 x SuperSpeed USB Type-A 5Gbps signaling rate
 
    1 x HDMI 2.1
 
    1 x Integrated 10/100/1000 GbE LAN
 
    1 x Mic/Headphone combo
 
    1 x SD Card Reader
 
    Audio: Audio by B&O; Dual speakers; HP Audio Boost
 
    Media Drive: Yes
 
    Optical Drive: None
 
    Wireless Connectivity: Wi-Fi 6 and Bluetooth 5.2 combo
 
    Webcam: HP Wide Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones` });

    server.create("product", { category: "computing", name: 'Msi Stealth GS77 GAMING', price: 1550000, imageUrl: "/assets/computing/Msi-Stealth-GS77.jpg", description: `12th Generation Intel Core i9-12900H (14-Cores) (6 Performance cores & 8 Efficient cores)
    16GB of DDR5 RAM 
    1TB PCIe M.2 SSD
    17.3" FHD 1920 x 1080 144 Hz LCD Display
    NVIDIA GeForce RTX 3060 (6GB GDDR6)
    VR-Ready
    USB 3.2 Gen 2 - Thunderbolt 4 - HDMI
    Wi-Fi 6E (802.11ax) - Bluetooth 5.2
    1 x 2.5 Gigabit Ethernet Port
    Per-Key RGB Keyboard
    Windows 11 Home (64-Bit)
 ` });

    server.create("product", { category: "computing", name: 'DELL Precision 5470 Mobile', price: 1600000, imageUrl: "/assets/computing/DELL-Precision.jpg", description: `32GB (provided memory is soldered)
    Intel Core i9 (12th Gen) 12900H / 2.5 GHz Max Turbo Speed @5 GHz
    Number of Cores: 14-core , Cache 24 MB
    1TB SSD M.2 2280 PCIe 4.0 x4 - NVM Express (NVMe), Class 40
    1920 x 1200 (Full HD Plus)
    V-Sync Rate at Max Res.: 60 Hz
    Widescreen: Yes
    Pixel Density (ppi): 161
    Image Aspect Ratio: 16:10
    Image Brightness: 500 cd/m²
    Color Gamut: 100% sRGB
    Features: Anti-glare, Wide Viewing Angle, 35 ms response rate, Low Blue Light technology, ±88° vertical viewing angle, ±88° horizontal viewing angle, 0.1572 mm pixel pitch
 
 NAME:
    Asus Notebook 10th Gen, Intel Core I3 12GB RAM 1TB HDD, 2.1GHz Up To 4.1GHz 15.6" Wins 10+ Mouse
 PRICE: 220,000
 DESCRIPTION:
    Whether for work or play, ASUS  is the entry-level laptop that delivers powerful performance and immersive visuals. Its NanoEdge display boasts wide 178° viewing angles and a matte anti-glare coating for a truly engaging experience. Inside, it’s powered by 10th Generation, Intel core i3 processor with 12GB RAM. A storage design with 1TB HDD gives you the perfect combination of large storage capacity and fast data read/write speeds.
 
    Get a wider view of the world
    The NanoEdge display gives ASUS a not too portable screen area for an immersive viewing experience for work and play. Its wide-view FHD panel features an anti-glare coating to reduce unwanted distractions from irritating glare and reflections, so you can truly focus on what’s in front of you
 
    Rich, crystal-clear audio
    ASUS SonicMaster is a combination of hardware, software and audio tuning designed with the goal of giving you the very best audio experience. A professional-grade codec ensures precise audio encoding and decoding; while amplifiers, large speakers and resonance chambers perfectly suited to ASUS X509 ensure a powerful audio delivery and deeper bass. Additional signal processing and tuning help refine minute details, filter noise and improve audio clarity so you get truly immersive sound.
 
    Exactly your type
    The full-size keyboard on ASUS  is perfect for working in dim environments. Ergonomically-designed, its sturdy, one-piece construction and 1.4mm key travel provide a comfortable typing experience.
 
    Constantly connected
    ASUS  is equipped with the reversible USB-C™ 3.1 port, featuring an any-way-up design that makes connecting devices as easy as possible. It also delivers data transfer speeds up to 10x faster4 than older USB 2.0 connections! There are USB 3.1 and USB 2.0 ports, HDMI output, and a microSD card reader — so you can easily connect all your current peripherals, displays and projectors with zero hassle.
 
    Internal protection / HDD protection and chassis enhancements
    ASUS  features EAR HDD shock dampening to protect your data from every bumps, while its reinforced chassis improves typing and allows you to open and close the lid in one smooth motion.
 
 
    A safe fast-charging and longer-lasting battery
    ASUS  features a 3x the lifespan of standard lithium-ion batteries. With ASUS fast-charge technology, a low battery can be charged to 60 percent in just 49 minutes.
 ` });

    server.create("product", { category: "computing", name: 'DELL Vostro 15 10th Gen, Intel Core I3 8GB RAM 256GB SSD 15.6" HD Windows 10+ Mouse', price: 291100, imageUrl: "/assets/computing/DELL-Vostro.jpg", description: `The performance you need
    Daily to-do’s, done:Everyday tasks are quickly handled with ease using 10th Gen Intel® Core™ processors.
 
    A battery that lasts:With a 41 Whr battery, you know you can rely on your device to power through the day.
 
    Recharge in a flash:Untether from the wall and get worry free power on the go with an 80% charge in one hour using Express Charge
    Making productivity a priority
    Plenty to see here:A 3-sided narrow border along with a 10% higher screen-to-body ratio than the previous generation makes for an immersive front of screen experience so you can focus more on the work at hand.
 
    Increase your comfort: A large touchpad, 6.4% bigger keycaps compared to the last generation and a lift hinge for more ergonomic wrist angles all make for more relaxed use. Plus, the lift hinge provides increased air flow, so your device stays cooler.Efficient tools:Get work done faster with a 10-key numeric pad and a calculator key that populates a calculator with just one touch.
 
    Low blue light: This TÜV Rheinland certified laptop with Dell ComfortView software technology helps reduce harmful blue light emissions to make extended screen time easy on your eyes.
    Small business serenity
    Linking up: An array of ports and slots means you can get connected to what you need.
 
    No need for spilling tears:A spill-resistant keyboard means less stress if an accident happens.
 
    Hardware TPM 2.0: The Trusted Platform Module 2.0 is a commercial-grade security chip installed on the motherboard that creates and stores passwords and encryption keys. It verifies that the computer has not been tampered with before booting up and protects your data against external software attacks.
    Operating System
    Windows 10 Pro, English
 ` });

    server.create("product", { category: "computing", name: 'Apple IMac With 5K Retina Display Intel Core I5 27" 8GB/256GB', price: 1340999, imageUrl: "/assets/computing/Apple-Imac.jpg", description: `The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully designed, incredibly intuitive, and packed with powerful tools that let you take any idea to the next level. And the new 27‑inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever.

    Retina Display
    Draws you in. Blows you away. Everything looks better on a Retina display, with its 1 billion colours and 500 nits of brightness. Photos and graphics leap off the screen. Text is super-sharp. And for the first time, the 27‑inch iMac features True Tone technology for a more natural viewing experience.

    Processor and Memory
    From fast to fasten your seatbelt. iMac and powerful processors go hand in hand. With a 3.1GHz 6‑core Intel Core i5 (Turbo Boost up to 4.5GHz) and 8GB (two 4GB) of 2666MHz DDR4 memory; four SO-DIMM slots, user accessible.

    Graphics
    Next-level. At any level. The graphics on iMac make everything a sight to behold. This model comes with Radeon Pro 5300 with 4GB of GDDR6 memory.

    Storage
    256GB SSD. More space. More speed. All-flash SSD storage is now standard on all iMac models, bringing high capacity and lightning speed. Fast access to all your photo and video libraries, massive files and pro apps.

    Camera, Speakers and Mics
    Mics, camera, action. From crystal-clear video calls and voice recordings to music and movies that fill the room, iMac is a star performer when it comes to communications and content. The 27‑inch iMac now features a 1080p FaceTime HD camera and a studio-quality three-mic array. And the T2 chip acts in concert with the speakers to enable variable EQ and an enhanced bass response, so all your content can have big, balanced high-fidelity sound.

    Apple T2 Security Chip
    Your own private security detail. The Apple T2 Security Chip comes to the 27-inch iMac, with a Secure Enclave coprocessor that provides the foundation for secure boot and encrypted storage capabilities. The T2 chip also enables powerful features like the 1080p FaceTime HD camera, face detection, enhanced speaker bass response and “Hey Siri” — and makes transcoding HEVC video up to twice as fast as the previous generation.

    Connectivity
    Packed with ports. And possibilities. Every iMac features two super-fast Thunderbolt 3 (USB‑C) ports and four USB-A ports, giving you plenty of high-performance options for connecting external drives, cameras, displays and more. All iMac models come with a 1Gb Ethernet port. Ultra-fast Wi-Fi and Bluetooth are standard on every iMac, and the 27-inch model features Bluetooth 5.0, so you’re instantly connected to your favourite content and wireless devices
` });

    server.create("product", { category: "computing", name: 'Hp ENVY All-In-One 32-A0012nh PC CORE I7- (ROCKET LAKE) 2.50GHz 8 CORES - 16GB RAM , 256 SSD & 1TB HDD', price: 2500000, imageUrl: "/assets/computing/Hp-ENVY.jpg", description: `Bring your ideas to life on the big screenCreate without limits on the ENVY All-in-One PC's massive 80 cm (31.5") diagonal display that features a high contrast display with a broad color gamut so you can bring your videos and photos projects to life like a pro at home. Experience the performance and responsiveness of an Intel® processor and NVIDIA® graphics so you can create faster than ever.Experience the amazing performance of editing photos and videos faster than ever with an Intel® processor and NVIDIA® graphics. Bring your ideas to life on a massive 80 cm (31.5") diagonal display in the comfort of your home.
    Windows 10 Home 64Processor family9th Generation Intel® Core™ i7 processorProcessorIntel® Core™ i7-9700 (3.0 GHz base frequency, up to 4.7 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 8 cores)6,7MDA key selling pointWindows 10 Home or other operating systems availableChipsetIntel® H370Form factorAll-in-OneSecurity managementKensington Security Slot™Memory32 GB DDR4-2666 SDRAM (2 x 16 GB)Memory layout (slots & size)2 x 16 GBMemory Slots` });

    server.create("product", { category: "computing", name: 'Lenovo V130 All-In-One - Pentium Silver J5005 - 4 GB, 1 TB,19.45" Win 10, WIRED MOUSE & KEYBOARD', price: 275500, imageUrl: "/assets/computing/Lenovo-V130.jpg", description: `Lenovo V130-20IGM 19.5'' WXGA+ 1440x900 Non-Touch All In One Desktop PC, 4GB DDR4-2400 Memory (1x4GB), 1000GB 7200rpm SATA Hard Drive, DVD writer optical Drive, USB Keyboard & USB Mouse, Wireless Intel 3165 8011.ac, Bluetooth, Windows 10 Home 64bit, USB 3.1 Gen.1 Bottom, USB 2.0 Bottom, 3-in-1 card reader (SD, SDHC, SDXC) Bottom, Combo headphone and mic audio jack Bottom, Ports - Rear USB 3.1 Gen.1, 3 x USB 2.0, HDMI out, LAN

      All in one computers.
      All-in-one (AIO) computers are a complete PC (Personal computer) system that consists of the monitor and system as a single unit. The AIO saves space while offering a fully functioning desktop PC system consisting of all the ports on the actual unit, usually at the back of the monitor.
      AIO has limited upgrade capabilities, usually just the hard drive and memory. The other components are not upgrade-able (graphics card for example). The upgrade may need to be done by a qualified technician as the AIO requires disassembly.

      The benefit of an AIO is space saving compact design, while offering a much larger screen and lower cost than a laptop.

      Recommended upgrades to improve AIO system performance:

      Even through AIO have been manufactured to offer a good overall experience for office and front-desk users, power users might need a performance boost. Purchasing a better specification system from the start is always the best choice. We strongly recommend at least 4GB RAM (memory).

      Hard drives are usually low rotation drives to save on build costs and running costs (electricity usage), upgrade to a Hybrid or SSD for better performance and still retain the power savings.

      Memory: Upgrade to a minimum of 8GB for better performance. 
      The Lenovo V130 AIO is all that it promises to be - powerful, fast, and secure. With cutting-edge processing and memory, plus optional next-gen storage, this space-saving PC is proven to deliver exceptional performance and reliability. Easy to deploy, use, and manage, it can enhance your productivity without breaking the bank
` });

    server.create("product", { category: "grocery", name: "Kellogg's Corn Flakes 300g Box (Kellogg's)", price: 1300, imageUrl: "/assets/grocery/Kelloggs-Corn-Flake.jpg", description: `Crispy, Golden Flakes of Sweetened Corn

    For more than a century, people have started their day with the original and best – Kellogg’s Corn Flakes® cereal. Loaded with iron and 6 other vitamins and minerals, Kellogg's Corn Flakes cereal is a great way get your family's day off to a nutritious start.` });

    server.create("product", { category: "grocery", name: "Big Bull Rice 5Kg", price: 4300, imageUrl: "/assets/grocery/Big-Bull.jpg", description: `Big Bull Rice 5kg is a premium quality Nigerian grown parboiled rice with natural nutritious and healthy which is specifically processed with high-quality grains.
    Big Bull Rice is stone-free and easy to cook with a result that is firm and non-sticky.
 
    So treat your family to a sumptuous meal at a very affordable price.
 ` });

    server.create("product", { category: "grocery", name: "Power Pasta Slim 475g X20", price: 7695, imageUrl: "/assets/grocery/Power-Pasta.jpg", description: `Power Pasta Spaghetti is a product of Pure Flour Mills Ltd. and made from Hard Wheat Flour. Power Pasta Spaghetti has two variants (Thick & Thin) and are long dried cylindrical Spaghetti to give you a great taste makes it very enjoyable within family and in a company of friends.

    It cooks in 5 minutes and can be enjoyed with Salads, Rice & Stew, Jollof Rice, Coconut Rice, Fried Rice also with Vegetables and some mouthwatering recipes can be made by Power Pasta Spaghetti. Power Pasta Spaghetti is distributed through multiple local channels and then it's been sold by them to our consumers.` });

    server.create("product", { category: "grocery", name: "Nestle Maggi Chicken Flavour 4g X 100 Cubes", price: 710, imageUrl: "/assets/grocery/Nestle-Maggi.jpg", description: `Superb chicken cubes from the Nestle Company that will keep the whole member of your household happy by feeling their taste buds with a deleicious sensation and aroma that can't be compared with any other.` });

    server.create("product", { category: "grocery", name: 'Terra Seasoning Cubes Shrimp 25cubes x 5', price: 850, imageUrl: "/assets/grocery/Terra-Seasoning.jpg", description: `Terra seasoning cubes are a blend of beef, herbs, and local spices.
    This Terra seasoning cube comes in a shrimp variant.
    Taste so realLives your meal with that delicious taste and aroma` });

    server.create("product", { category: "grocery", name: 'Nasco Cornflakes Original 350g x1', price: 1375, imageUrl: "/assets/grocery/Nasco-Cornflakes.jpg", description: `Nourishing goodness… anytime!
    NASCO Group is one of the largest Fast Moving Consumer Goods (FMCG) companies in the West Africa region. From our headquarters in the heart of Nigeria, the company manufactures and distributes an outstanding collection of popular brands across the food and household sectors. NASCO takes great pride in making superior products in a manner that is consistent with the highest standards of corporate behaviour. We place consumers at the center of everything we do because our company stands for quality, innovation and value for money. Millions of people everywhere choose our products to add a touch of quality to their lives.` });

    server.create("product", { category: "grocery", name: "Fanta Drink - 50cl Pet x 12", price: 1879, imageUrl: "/assets/grocery/Fanta-Drink.jpg", description: `Fanta is an orange flavoured soft drink and a product of the Coca Cola Company that produces some of the world’s best known drinks providing refreshment and enjoyment to billions of people everywhere. Fanta stands out from the rest of the competition as it has stood the test of time for years and years, showing itself as one of the best soft drinks in the world.
    Fanta’s refreshing orange flavours bottled in a unique 50cl bottle is made with 100% natural flavours and contains caffeine, carbonated water, high fructose corn syrup, citric acid, and natural flavours for that amazingly refreshing taste. It is said to have originated after a trade embargo for Coca-Cola, ingredients were placed in 1940 making it the second oldest brand of the Coca-Cola Company.` });

    server.create("product", { category: "grocery", name: 'Indomie Regular Chicken Flavour 70G X 40', price: 4305, imageUrl: "/assets/grocery/Indomie-Regular.jpg", description: `A delectable combination of chosen ingredients of chicken flavor, spices and vegetables, all uniquely blended to give that unparalleled taste and irresistible aroma. Indomie Regular Chicken Flavor is Nigeria's favorite flavor of Instant Noodles.

    In addition the pack contains essential vitamins and minerals like Vitamin A, Thiamine, Pantothenate, Vitamin B6, B12, Calcium, Vitamin D, Riboflavin, Niacin, Folic Acid and Iron. The 70g Regular Chicken Flavor now comes in an attractive new packaging, branded with Indomie's superhero team, THE INDOMITABLES.` });

    server.create("product", { category: "grocery", name: 'Jameson Irish Whiskey 20cl', price: 3137, imageUrl: "/assets/grocery/Jameson-Irish.jpg", description: `Triple distilled, twice as smooth, one of a kind.
    Jameson Irish Whiskey is a blended Irish whiskey. What's that we hear you say. Well first we take the best of pot still and fine grain whiskeys. Then we triple distil them - not because we have to because we want to as it gives it its signature smoothness. Finally, we age them in oak casks for a minimum of 4 years.
 ` });

    server.create("product", { category: "grocery", name: 'Pure Life 60cl x20', price: 1799, imageUrl: "/assets/grocery/Pure-Life.jpg", description:  ` Pure Life was launched in 1998 to help meet the global need for safe drinking water with a pleasant taste at an affordable price. Now present in more than 20 countries, Pure Life is the world’s most popular bottled water brand.
    Water is essential for health
 
 
    Did you know?
 
    Drinking water regularly throughout the day is the preferred way to maintain healthy hydration.
    Water is vital to maintain your body's functions.
    For example, it helps:
 
 
    The body maintains its constant internal temperature
    Transport and absorb nutrients from food
    The body eliminates waste`});

    server.create("product", { category: 'grocery', name: 'Mama Gold Rice 50kg', price: 37500, imageUrl: "/assets/grocery/Mama-Gold.jpg", description: `Eat Quality, eat Mama Gold Premium Parboiled rice. Gluten-free, low fat, long-grain rice, Mama Gold is non-sticky and stone-free.
    Put some variety in your meals and infuse rice when planning dishes for the week. You can cook your rice in so many ways and that's what makes them so popular with kids and adults. Rice is a favourite Nigerian staple and is eaten several times a week by most people.
 
    It is specifically processed and packaged with high quality grains. It is stone free, fast and easy to cook with a end result that is firm and non-sticky.
 
    Now you can treat your family to a sumptuous meal at a very affordable cost.` });

    server.create("product", { category: "grocery", name: 'Portable Mini Metal Round Cigarette Case With Keychain', price: 4888, imageUrl: "/assets/grocery/Mini-Metal-Round.jpg", description: `  Product Name:Portable Mini Metal Round Cigarette Case with Keychain 5/10/20 Capacity
    Material:Metal
    Weight:120g(20 pcs)/52g(10 pcs)/41g(5 pcs)
    Color:Black,Blue,Silver,Golden 4Colors.
    Size:
    Style: American Style
    Package inclueds:1 x Metal Round Cigarette Case
    Features
    Waterproof design:This cigarette case is made of metal material,strong and durable,anti extrusion,resistant to scratching,keep cigarette from crushed.All metal shell whole-body wash,keep cigarettes from moisture, protect your cigarettes   
    well. 
    Fashion Design:This Cigarette case is anodizing processed,polished metal surface,make cigarette case looks elegant and fashion,wgich is the ideal gift for personal or friends.
    Small Size,Large Capacity:The Cigarette Case have 3 sizes,100*43/31/23 mm,can fits 20/10/5 pcs cigarettes.it is very portable to put the cigarettes into this metal cigarette case.
    What Makes our cigarette case Different?
    Different from most cigarette case you see on the market. Our cigarette case is made of high quality metal material,and the interior space is large enough for you to make 5/10/20 pcs cigarettes.It can be widely used for different occasions,greatly` });

    server.create("product", { category: "grocery", name: 'Martell Cognac Blue Swift 75cl (VSOP)', price: 38130, imageUrl: "/assets/grocery/Martell-Cognac.jpg", description: `The Colour
    Copper with golden highlights.
 
    The Aroma
    Gourmet notes of banana and caramelised pear introduce the subtle sweetness of vanilla, coconut and spices.
 
    The Taste
    A sensation of fullness and generosity with notes of ginger and candied fruit, followed by distinctive hints of toasted oak from the Kentucky bourbon casks.
 
 
 
    In 1783, Martell was the first Maison to ship cognac to the United States. Today, Martell celebrates this history with another first: Martell Blue Swift, the first-ever spirit drink made of cognac VSOP and then finished in bourbon casks.
 
    Through Martell’s signature distillation process, the eaux-de-vie absorbs the rich aromatic tones of the bourbon cask. The result is Martell’s hallmark style – delicate notes of candied fruit and plum – complemented by the subtle sweetness of vanilla and toasted oak from the casks. Exceptionally smooth, with a rounded taste and unique character.
 
    Serving Tips
 
    Martell Cocktail & Mist
 
    This ritual gives drinkers the opportunity to mist their choice of three atomised flavours over their Martell cocktail to enhance the flavour.
 
    Suggested Serve
 
    A Sazerac based Martell cocktail on a serving tray with 3 atomisers containing flavours that complement the drink. Use Martell Blue Swift as the base for your cocktail.
 
    Enjoy on its own, over ice, lengthened with a mixer or as a cocktail, especially a Julep – the Mint Julep made with Martell Blue Swift.` });

    server.create("product", { category: "grocery", name : 'Kirkland Signature Premium Paper Towel Kitchen Rolls X12', price: 46998, imageUrl: "/assets/grocery/Kirkland-Signature.jpg", description: `Kirkland Signature Premium Paper Towel offers a unique material used to clean up your kitchen and other parts of the house leaving all path squeky clean.` });

    server.create("product", { category: "electronics", name: 'Skyrun 39" Inches LED TV (39XM/N68D) + Wall Bracket - Black +1 Year Warranty', price: 108990, imageUrl: "/assets/electronics/skyrun.jpg", description: `SKYRUN 39 ANALOG  LED TV
    12 Months Warranty - Excellent quality, we dare to guarantee a 12 months warranty!
    Vivid Images: 1366*768 resolution presents you with realistic pictures and bright colors.
    H2.64 Decoding Technology: H2.64 decoding technology make the viewing process smoother at the same condition.
    High Quality A Class Panel: Restore natural colors, bring you colorful viewing experience.
    Cabinet Audio System: Bright tremble, full midrange, deep bass, bring you and your family a thrilling listening experience.
    Energy Saving: Save your money, save your energy.
    Multiple Interfaces: Multiple interfaces, multiple ways of playing, such as watching movies, listening to music, singing, etc. enjoy multimedia experience.
 
    Brand Story:  SKYRUN was established in 2005. It is a local manufacturing company in Nigeria. There are 6 high-efficiency production plants in the country. Products include TVs, Washing Machines, Refrigerators, Air Conditioners, Smart Electric Meters, Small Appliances, etc. And the Smart Electric Meters received a manufacturing certificate issued by nerc in 2016. SKYRUN is a leading supplier of technology and services in Nigeria. SKYRUN has a nationwide sales network and after-sales service system, and always puts user experience first. SKYRUN's brand philosophy is "Make a better life".` });

    server.create("product", { category: "electronics", name: 'WEYON 32" Inches LED TV (32WAN) - Black +1 Year Warranty', price: 50500, imageUrl: "/assets/electronics/WEYON.jpg", description: `WEYON 32 inches LED TV  +1 Year Warranty - Black 32WAN

    Clear, detailed picture:
 
    See every image as the director intended with enriched colors.
 
    Ultra clean view:
 
    Analyzing original content with an advanced algorithm, Ultra Clean View gives you higher-quality images with less distortion. Enjoy the clear picture.
 
    HD picture quality:
 
    LED distributes the LED lights on the back of the panel so that the backlight can be evenly transmitted to the entire screen, the brightness and color gamut are guaranteed, the backlight rendering image is more accurate, and the picture details are more delicate and realistic. LED technology allows you to go beyond the screen into a fully immersive world.` });

    server.create("product", { category: "electronics", name: 'Hisense 43" Inches LED HD TV (43A5100) - Black +1 Year Warranty', price:140810, imageUrl: "/assets/electronics/Hisense.jpg", description: `Hisense 43″ LED HD TV A5100 comes with an energy saving feature that includes back light control that reduces power consumption. It has a great features such as electronic programming guide (EPG), logical channel number and as well as parental rating lock.

    Display Screen
 
    Diagonal: 109.2 cm (43”)
    HD type: Full HD
    Screen resolution: 1920 x 1080 pixels
    Display technology: LED
    Screen shape: Flat
    Native aspect ratio: 16:9
    Display Brightness: 200 cd/m²
    Contrast Ratio (typical): 5000:1
    LED Backlight Type: Direct-LED
    Aspect Ratio: 16:9
    Supported Video Format: 1080p
    Native Refresh Rate: 60 Hz
    Color Depth: 8 bit
    Horizontal viewing angle: 178°
    Vertical viewing angle: 178°
    Comb filter: 3D
    Screen diagonal: 108 cm
    Audio
 
    Number of speakers: 2
    RMS rated power: 14 W Built-in
    speakers: Yes
    Audio decoding technologies : Dolby Digital AC3
    Ports and Interfaces
 
    Number of HDMI ports: 2
    PC (D-Sub): No
    DVI Port: No
    Number of USB 2.0 Ports: 1
    Composite Video Input: 1
    Headphone Outputs: 1
    Common Interface: No
    Common Interface Plus (CI+): Yes
    HDMI Version: 1.4
    Return Channel audio (ARC): Yes
    Audio input (L,R): 1
    Number of RF ports: 2
    Common interface Plus version (CI+): 1.3
    Weight and dimensions
 
    Width: 970 mm
    Depth: 76.5 mm
    Height: 573 mm
    Weight : 7.9 kg
    Device width (with stand): 970 mm
    Device depth (with stand): 213 mm
    Device height (with stand): 608 mm
    Weight with stand: 8 kg` });

    server.create("product", { category: "electronics", name: 'Edifier 68 Watts Channel Bluetooth Multimedia Speakers (M206BT) - Black', price: 37641, imageUrl: "/assets/electronics/Edifier.jpg", description: `M206BT 2.1 Channel Bluetooth Multimedia Speakers

    Best-selling wireless speaker for a decade. 
 
    Wireless connectivity provides Perfect performance and unlimited music 
 
    Bluetooth technology for convenient connection.
 
    With Advanced Bluetooth 5.0 technology, the speaker can be connected to a PC, mobile phone, Ipad, and other electronic devices.
 
    DSP Digital Audio Processing
 
    DSP digital audio processing provides accurate electronic frequency division and dynamic management which ensures the balance between medium and high frequency.
 
    Wooden Box, Strong and Stable
 
    Made with a 9mm MDF wood board – the exterior is strong, stable, and is structured to effectively reduce bad resonance and deliver a crisp sound.
 
    Pumps extraordinary performance
 
    Equipped with a large 131mm bass unit and front phase inversion tube, it provides powerful bass and panoramic sound field atmosphere.
 
    Professionally tuned 
 
    Made with a 70mm double-fold ring cloth-edged cone and specially coated diaphragm, it makes high transparent and medium frequency mellow and full.
 
    USB Card Reader Plug & Play
 
    R206BT supports USB flash drive plug-n-play for quick and convenient operation.
 
    Multi-device capabilities....
 
    Built-in 3.5mm audio jack has multiple compatibilities with PC, Laptop, TV, Mobile Phone, MP3 player, and other devices.
 
    Integrated side panel for easy operation
 
    The improved side panel is designed for the convenience of operation and connection making the speaker user-friendly.
 
    A perfect speaker for various audio uses.
 
    Watching Movies---Immersive and Dynamic
 
    Playing Games---Forceful and Delightful
 
    Listening Music---Pure sounding and Heart-touching
 
    Specifications:
 
    Bluetooth version : V5.0
    Total watts(peak) : 68W
    Total watts(RMS): 34W(R/L:8W+8W SW:18W)
    Frequency response R/L: 210Hz-20KHz SW:63Hz-206Hz
    Audio inputs AUX, Bluetooth,USB flash disk` });

    server.create("product", { category: "electronics", name: 'Lenovo Portable Wireless Bluetooth 5.0 Speaker (K30)', price: 6990, imageUrl: "/assets/electronics/Lenovo-Bluetooth.jpg", description: `Overview:
    You can listen to music by pairing your BT-enabled audio devices with the speaker, which also supports the function. Mini and portable, perfectly suitable for home use, office use, and outdoor activities.
    imageimageimageimageimageimageimageimageimage
 
 
    Features:
    Plays wireless music from your BT-enabled audio devices. Supports hands-free calls with a built-in microphone.
    Supports true wireless stereo function, two of them can connect to each other for stereo and powerful rich sound.
    A rechargeable 1200mAh battery offers 6 hours of playing time. BT 5.0, stable signal, more power saving.
    Mini size, with a portable lanyard, you can hang it on your backpack, or just put it in your bag.
    3W internal magnetic horn brings you perfect music and high-quality loud sound.
 
    Specifications:
    BT Version: 5.0
    Operation Range: 10m (no obstacle)
    Power Output: 3W
    Rated Input: 5V/500mA
    Frequency Response Range: 100Hz-20KHz
    Battery Capacity: 1200mAh
    Music Playing Time: 6 hours
    Charging Time: about 3 hours
    Color: Black
    Material: ABS, Metal
    Package Size: 9.5*9.5*8cm / 3.74*3.74*3.15in
    Package Weight: 270g / 9.52oz
 
    Package List:  
    1 * BT Speaker
    1 * USB Cable
    1 * Lanyard
 ` });

    server.create("product", { category: "electronics", name: 'Mercury Maverick 850VA Line Interactive UPS', price: 31199, imageUrl: "/assets/electronics/Mercury.jpg", description: `Mercury Maverick 850 Line Interactive UPS is the power bank you need for short power backup support

    Mercury UPS is widely used to provide dependable service, ensuring your critical appliances are protected from sudden shut-down and, in the case of UPS supporting PCs, your data is not suddenly lost. What's more, these Mercury UPS also provide voltage regulation functionality, protecting your equipment from the impact of power fluctuations.` });

    server.create("product", { category: "electronics", name: ' Syinix 32" Inches LED Digital TV - Black + 12 Months Warranty', price: 51535, imageUrl: "/assets/electronics/Syinix.jpg", description: `Get the all new frameless , Syinix Digital TV available on Jumia! Syinix is a Japan-based professional home appliance brand. Since its foundation, it adheres to its ultimate goal of letting people’s life smarter and more easily. With the Japanese design style and always making it better, Syinix continuously pursues innovative functional design and a more exquisite detail of its products. Its finish design is embedded with understated and simple lines, thus it can help its customers restore a cozy family atmosphere. 

    This Syinix TV delivers an advanced viewing experience so you get clearer pictures and more true-to-life content. Featuring a futuristic design, it adds beauty to your space and perfectly blends with your decor and other electronics. With a colour technology that displays colours as in real life, you’ll enjoy all form of content on your Syinix 32 Inch LED TV. Whatever you get a kick out of – fast motion picture, home video and drama – is displayed in detail and high clarity.
 
    Display: 32-Inch LED
    Inputs:  HDMI;  USB
    Plug 'n' Play: Flash Drives, Hard Drives, USBs etc.
    Local Language On Display; Hausa, Igbo, Yoruba
    Energy Efficient` });

    server.create("product", { category: "electronics", name: 'Nikon D3200 DSLR Camear With 18-55mm Lens', price: 230000, imageUrl: "/assets/electronics/Nikon.jpg", description: 'A modern styled superb camera that offers you a wide range of capabilities range from ultra clear photos to excellent zooming while ensuring clarity of all photos' });

    server.db.loadData({
      users: [],
    });

  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/users", (schema, request) => {
      return schema.users.all();
    });

    this.get("/users/:email", (schema, request) => {
      const email = JSON.parse(request.params.email);
      return schema.users.findBy({ email })
    });

    this.post("/users", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.users.create(attrs);
    });

    this.delete("/users/:email", (schema, request) => {
      const email = request.params.email
      const user = schema.users.find(email);
      schema.users.delete(user);
    });

    this.get("/ratings", (schema, request) => {
      return schema.ratings.all();
    });

    this.get("/reviews", (schema, request) => {
      return schema.reviews.all();
    });

    this.get("/pendings", (schema, request) => {
      return schema.pendings.all();
    });

    this.get("/products", (schema, request) => {
      return schema.products.all();
    });

    this.get("/hosts", (schema, request) => {
      return schema.hosts.all();
    });

    this.get("/gains", (schema, request) => {
      return schema.gains.all();
    });

    this.get("/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });

    this.post("/pendings/:id", (schema, request) => {
      const user = schema.users.find(request.params.id);
      const attrs = JSON.parse(request.requestBody);
      return schema.pendings.create({users: user, ...attrs });
    });

    this.delete("/pendings/:id", (schema, request) => {
      const id = request.params.id;
      const item = schema.pendings.find(id);
      schema.pendings.destroy(item);
    });

    this.patch("/pendings/:id", (schema, request) => {
      const id = request.params.id;
      const body = JSON.parse(request.requestBody);
      const item = schema.pendings.find(id);
      item.update({ quantity: body.quantity });
    });
  },
});