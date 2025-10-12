
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RbegsModel } from './model/RbeModel.js'; 
// import httpStatus from "http-status";
import { StatusCodes } from 'http-status-codes';
import  User from "./model/UserModel.js";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";
 const app = express();
 app.use(bodyParser.json());
 app.use(cors());


const PORT = process.env.PORT || 5000;
 const MONGO_URL = process.env.Mongo_URL;


// app.get('/RBE', async(req, res)=>{
//     let tempRbe = [
//         {question:"स्टील अथॉरिटी ऑफ इंडिया लिमिटेड की स्थापना किस वर्ष में की गई थी?",
//       options:["1973","1981","1963","1956"],
//       answer:[0],
//       explanation :""
// },
// {question:"निम्नलिखित में से कौन-सा बेरीबेरी का लक्षण है?",
//       options:["कमज़ोर दांत और मसूड़ों से खून आना।","कमज़ोर मांसपेशियाँ और ऊर्जा की कमी।","अस्वस्थ त्वचा और सूजा हुआ पेट।","दृष्टि में कमी या आंशिक रूप से अंधापन।"],
//       answer:[1],
//       explanation :""
// },
// {question:"निम्नलिखित में से कौन-सा भारत में एक निजी क्षेत्र का बैंक है?",
//       options:["फेडरल बैंक","बैंक ऑफ बड़ौदा","यूको बैंक ","पंजाब नेशनल बैंक"],
//       answer:[0],
//       explanation :""
// },
// {question:"निम्नलिखित में से कौन-सा दो युग्मकों के बीच की संयोजन अभिक्रिया  का उदाहरण है, जिसके दौरान एक नया युग्मक बनता है?",
//     options:["कैल्शियम हाइड्रॉक्साइड का निर्माण","जल का निर्माण","अमोनिया का निर्माण।"," कार्बन डाइऑक्साइड का निर्माण।"],
//     answer:[0],
//     explanation :""
// },
// {question:"निम्नलिखित में से कौन-सा कथन प्रत्यावर्ती धारा (AC) के बारे में सत्य है?",
//   options:["धारा की दिशा और परिमाण समय के साथ नहीं बदलते हैं।","धारा की दिशा बदलती है, लेकिन परिमाण स्थिर रहता है।","धारा की दिशा स्थिर रहती है, लेकिन परिमाण समय के साथ बदलता है।","धारा की दिशा और परिमाण समय के साथ बदलते हैं।"],
//   answer:[2],
//   explanation :""
// },
// {question:"किस राज्य सरकार के वन विभाग ने राज्य के दक्षिण-पश्चिमी जिलों में नष्ट हो चुके साल वनों को पुनर्जीवित करने में अपनी विफलताओं को स्वीकार किया है?",
//   options:["मध्य प्रदेश "," राजस्थान","ओडिशा ","पश्चिम बंगाल"],
//   answer:[3],
//   explanation :""
// },


// {question:"रेखित पेशियों (striated muscles) के बारे में निम्नलिखित में से कौन-सा कथन सही है?",
//   options:["इनमें स्पष्ट रूप से हल्की और गहरी पट्टियाँ  उपस्थित होती हैं।","इनकी कोशिकाएँ लंबी, बेलनाकार, अगोलाकार  और अन शाखित होती हैं।","इनकी कोशिकाएँ लंबी होती हैं, उनके सिरे कुंद (blunt) होते हैं, और वे शाखित नहीं होती हैं।","इनकी कोशिकाएँ अगोलाकार  और बेलनाकार होती हैं तथा शाखित होती हैं।"],
//   answer:[0],
//   explanation :""
// },
// {question:"मैंग्रोव वन कहाँ उगते हैं?",
//   options:["रेगिस्तान"," दलदल ","तटीय क्षेत्रों में","पहाड़ियों में "],
//   answer:[2],
//   explanation :""
// },
// {question:"निम्नलिखित में से कौन-से कथन गोल दर्पण द्वारा परावर्तन के संबंध में सही हैं?",
//   i:"यदि वस्तु को ध्रुव (pole) और फोकस (focus) के बीच रखा जाए, तो - अवतल दर्पण प्रकाश किरणों को अपसारित (diverge) कर देगा।",
//   ii:"उत्तल दर्पण प्रकाश की किरणों को अभिसारित (converge) कर सकता है",
//   options:["(i) और (ii) दोनों गलत हैं", "केवल (ii) सही है","केवल (i) सही है","(i) और (ii) दोनों सही हैं"],
//   answer:[2],
//   explanation :""
// },
// {question:"जवाहरलाल नेहरू का जन्म किस शहर में हुआ था?",
//   options:["लखनऊ ","श्रीनगर ","इलाहाबाद ( प्रयागराज) ","दिल्ली "],
//   answer:[2],
//   explanation :""
// },

// {question:"महावीर और उनके अनुयायियों की शिक्षाएँ लगभग 1500 वर्ष पहले जिस रूप में लिखी गई थीं, वही रूप आज किस स्थान पर उपलब्ध है?",
//   options:["पावापुरी, बिहार ","वैशाली, बिहार","वल्लभी (गुजरात) ","लछुआड़,बिहार"],
//   answer:[2],
//   explanation :""
// },
// {question:"शुक्र के वातावरण में जो मोटे सफेद और पीले-हरित रंग के बादल दिखाई देते हैं, वे किस पदार्थ से बने होते हैं?",
//   options:["एसिटिक अम्ल ","नाइट्रिक अम्ल","सल्फ्यूरिक अम्ल","हाइड्रोक्लोरिक अम्ल"],
//   answer:[2],
//   explanation :""
// },
// {question:"निम्नलिखित कार्बन के रूपों में से कौन-सा विद्युत का अच्छा चालक है?",
//   options:[" हीरा","फुलरीन"," ग्रेफाइट","कोयला "],
//   answer:[2],
//   explanation :""
// },
// {question:"एक सामान्य वयस्क मानव प्रतिदिन लगभग ___ मिलीलीटर मूत्र उत्पन्न करता है",
//   options:[" 100 - 200","10000 - 20000"," 10 - 20","1000 - 2000"],
//   answer:[3],
//   explanation :""
// },
// {question:"निम्नलिखित खनिजों में से कौन-सा फसलों को कीटों से बचाने में सहायक होता है?",
//   options:["  मैग्नीशियम,लोहा,बोरॉन","सोडियम,कैल्शियम,मैग्नीशियम"," मैग्नीशियम,पोटैशियम,कैल्शियम","कैल्शियम,सोडियम,पोटैशियम"],
//   answer:[2],
//   explanation :""
// },
// {question:"भारतीय संविधान का कौन-सा अनुच्छेद कहता है कि राज्य ग्राम पंचायतों के गठन की दिशा में कदम उठाएगा और उन्हें स्वशासन के साधन के रूप में कार्य करने हेतु आवश्यक शक्तियाँ और अधिकार प्रदान करेगा?",
//   options:["  अनुच्छेद 44"," अनुच्छेद 42"," अनुच्छेद 40"," अनुच्छेद 41"],
//   answer:[2],
//   explanation :""
// },
// {question:"भारत की स्वतंत्रता के 75 वर्षों के उपलक्ष्य में 'आजादी का अमृत महोत्सव' मनाने हेतु, भारत सरकार ने किस विद्यालय को 50 कंप्यूटर दान किए?",
//   options:["  - टोक्यो महानगर असुका उच्च विद्यालय (Tokyo Metropolitan Asuka High School)"," दिल्ली पब्लिक स्कूल (Delhi Public School)"," सिंगापुर इंटरनेशनल स्कूल (Singapore International School)"," लीसी मॉडर्न एम्पेफिलोहा, मेडागास्कर (Lycee Moderne Ampefiloha)"],
//   answer:[3],
//   explanation :""
// },
// {question:"यदि 12 वोल्ट की बिजली आपूर्ति बल्ब को 24 वॉट शक्ति प्रदान करती है, तो जब वही बल्ब 6 वोल्ट की आपूर्ति से जोड़ा जाएगा, तो उसे कितनी शक्ति प्राप्त होगी?",
//   options:["18W"," 12W","9W"," 6W"],
//   answer:[3],
//   explanation :""
// },
// {question:"भारतीय संविधान में संशोधन करने की संसद की शक्ति निम्नलिखित में से किसके द्वारा स्थापित एक संवैधानिक शक्ति है?",
//   options:["बयालीसवाँ संविधान संशोधन अधिनियम"," चौबीसवाँ संविधान संशोधन अधिनियम","चवालीसवाँ संविधान संशोधन अधिनियम"," छब्बीसवाँ संविधान संशोधन अधिनियम"],
//   answer:[1],
//   explanation :""
// },
// {question:"झूलन गोस्वामी ने महिला वनडे क्रिकेट में 250 विकेट लेने की उपलब्धि किस वर्ष प्राप्त की?",
//   options:["2019"," 2023"," 2021"," 2022"],
//   answer:[3],
//   explanation :""
// },
// {question:"निम्नलिखित में से किसे 2021 में भौतिकी का नोबेल पुरस्कार प्राप्त करने वालों  के रूप में सम्मानित किया गया?",
//   options:["स्यूकुरो मानेबे (Syukuro Manabe)","मारिया रेसा (Maria Ressa)","डेविड जूलियस (David Julius)","दिमित्री मुरातोव (Dmitry Muratov) "],
//   answer:[0],
//   explanation :""
// },
// {question:"इंदिरा पॉइंट निम्नलिखित में से किसके दक्षिणी भाग में स्थित है?",
//   options:["लिटिल अंडमान द्वीप","ग्रेट  निकोबार द्वीप","मिडिल अंडमान द्वीप"," कार निकोबार द्वीप"],
//   answer:[1],
//   explanation :""
// },
// {question:"ऑक्टेव का नियम निम्नलिखित में से किसकी खोज के बाद अप्रासंगिक हो गया?",
//   options:["फुलरीन","समस्थानिक ","रेडियोधर्मिता"," निष्क्रिय गैसें"],
//   answer:[3],
//   explanation :""
// },
// {question:"निम्नलिखित में से किस राज्य की पुलिस ने फरवरी 2020 में महिलाओं की सुरक्षा के लिए 'दिशा' नामक पहल शुरू की?",
//   options:["उत्तराखंड"," पंजाब "," गोवा"," आंध्र प्रदेश"],
//   answer:[3],
//   explanation :""
// },
// {question:"तीन रेज़िस्टर्स जिनका प्रतिरोध क्रमशः 2, 3 और 5 ओम है, एक बैटरी के साथ श्रेणीक्रम (series) में जुड़े हैं। यदि 2 ओम प्रतिरोध में प्रवाहित धारा 4 एम्पियर है, तो वोल्टेज ज्ञात कीजिए।",
//   options:["40V"," 20V","60V ","80V "],
//   answer:[0],
//   explanation :""
// },
// {question:"निम्नलिखित में से कौन-सा परिवर्तन उन बच्चों में दिखाई नहीं देता जो किशोरावस्था में प्रवेश करने वाले हैं?",
//   options:["शरीर के सभी हिस्सों पर बालों की वृद्धि दिखाई देती है।"," कुछ लोगों की त्वचा तैलीय हो जाती है।","शरीर के कुछ विशेष हिस्सों में बालों की वृद्धि होती है। ","कुछ लोगों को मुहाँसे हो जाते हैं। "],
//   answer:[0],
//   explanation :""
// },
// {question:"भारतीय संविधान का कौन-सा भाग उन  नागरिकों के नागरिकता अधिकारों से संबंधित है जो पाकिस्तान से भारत आए हैं?",
//   options:[" भाग II"," भाग III"," भाग IV","भाग I"],
//   answer:[0],
//   explanation :""

// },
// {question:"मानवों में श्वसन का एक उदाहरण है।",
//   options:[" ऊष्माशोषी अभिक्रिया"," अपचय-ऑक्सीकरण अभिक्रिया","  विस्थापन अभिक्रिया"," उष्माक्षेपी अभिक्रिया"],
//   answer:[3],
//   explanation :""

// },
// {question:"त्योहारों के दौरान इमारत में लगाई गई लाइटें ---  का उदाहरण  हैं।",
//   options:["समानांतर परिपथ","चुंबकीय प्रभाव ","विद्युत चुंबकीय प्रेरण"," श्रृंखला परिपथ"],
//   answer:[3],
//   explanation :""

// },
// {question:"विद्युत ओवन के कार्य करने के पीछे का सिद्धांत ____ होता है",
//   options:["विद्युत चुंबकीय प्रेरण"," प्रेरित वोल्टेज"," जूल का ऊष्मा प्रभाव"," प्रेरित धारा"],
//   answer:[2],
//   explanation :""
// },
// {question:"दांतों में क्षय (सड़न) किस pH स्तर पर शुरू होता है?",
//   options:["pH 7 से अधिक होने पर","pH 5.5 से कम होने पर","pH 6 पर","pH 7 पर"],
//   answer:[1],
//   explanation :""
// },

    
//     ];
//     tempRbe.forEach((item) => {
//         let newRbe = new RbegsModel({
//             question: item.question,
//             options: item.options,
//             answer: item.answer,
//             explanation: item.explanation
//         });
//         return newRbe.save();
//     });
//     res.send("RBE data added");
//     })
 
// app.post("/login", login);
// app.post("/register", register);
//   app.post("/login" ,async (req,res) => {

//     const {username,password} = req.body;
//     if(!username || !password) {
//         return res.status(400).json({message:"Please Provide"})
//     }

//     try {
//         const user = await User.findOne({username});
//         if (!user) {
//             return res.status(StatusCodes.NOT_FOUND).json({message:"User Not Found"})
//         }

//         let isPasswordCorrect = await bcrypt.compare(password,user.password)

//         if (isPasswordCorrect) {
//             let token = crypto.randomBytes(20).toString("hex");
//             user.token = token;
//             await user.save();
//             return res.status(StatusCodes.OK).json({token:token})
//         } else {
//             return res.status(StatusCodes.UNAUTHORIZED).json({message:"Invalid Username or Password"})
//         } 
//     } catch (e) {
//         return res.status(500).json({message :`Something went wrong ${e}`})
//     }
// }
//   )

 
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please Provide" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();

      // ✅ Return name and token
      return res.status(StatusCodes.OK).json({
        token: token,
        name: user.name,
        username: user.username,
      });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid Username or Password" });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: `Something went wrong ${e.message}` });
  }
});

app.post("/register",async (req, res) => {
    const {name,username,password} = req.body;
     
    try {
        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(StatusCodes.Found).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User ({
            name :name,
            username:username,
            password:hashedPassword
        });

        await newUser.save();
        res.status(StatusCodes.CREATED).json({message:"User Registered"})
    } catch (e) {
        res.json({message:`something went wrong ${e}`})
    }
}
)


app.get('/RBE', async (req, res) => {
  let rbeData = await RbegsModel.find({});
    res.json(rbeData);
});







app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
});