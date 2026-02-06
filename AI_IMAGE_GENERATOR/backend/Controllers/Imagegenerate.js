import Usermodel from "../model/Usermodel.js";
import axios from "axios";
import FormData from "form-data";






let imagegenerate = async (req, res) => {

        

    try { 
 
        let { prompt } = req.body;
        const userId = req.user.id;

        let user = await Usermodel.findById(userId)

        if (!user || !prompt) {
            return res.json({ success: false, message: "Invalid details" })
        }

        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({ success: false, message: "Insufficient credits, please recharge" })
        }

        let formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API_KEY,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64');

        const resultImage = `data:image/png;base64,${base64Image}`;

        user.creditBalance = user.creditBalance - 1;
        await user.save();

        res.json({
            success: true,
            message: "Image generated successfully",
            creditBalance: user.creditBalance,
            resultImage
        }); 

        console.log("=== HIT GENERATE IMAGE ===");
       console.log("User from middleware:", req.user);
       console.log("Prompt:", req.body.prompt);

 
      


    } catch (error) {

        console.log(error);
        res.json({ success: false, message: "Image generation failed", error: error.message })

    }
}

export default imagegenerate;