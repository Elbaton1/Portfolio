import axios from 'axios';

const OPENAI_API_KEY = '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';

export const generateDalleImage = async (hero1, hero2) => {
  try {
    const prompt = `
Create a highly detailed and intense battle scene between ${hero1.name} and ${hero2.name}. 
The scene should be dramatic and action-packed, showcasing their unique abilities and the intensity of the fight. 
Use vivid details to depict their powers in action and the chaos around them. The environment should reflect the intensity of their battle. 
Ensure the characters look accurate to their comic book or movie appearances.
`;


    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt,
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.data[0].url;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error.message : error.message);
  }
};


