import p3_img from './m1.webp'
import p4_img from "./w1.webp";
import p5_img from "./m3.webp";
import p6_img from "./m2.webp";
import p7_img from "./m4.jpg";
import p8_img from "./m_ele 6.webp";
import p9_img from "./w2.webp";
import p10_img from "./m5.webp";
import p11_img from "./w3.jpg";
import p12_img from "./m7.jpg";
import p13_img from "./m8.jpg";
import p14_img from "./w4.jpg";
import p15_img from "./m_ele 9.jpg";
import p16_img from "./m1.webp";
import p17_img from "./w6.webp";
import p18_img from "./m2.webp";
import p19_img from "./w7.jpg";
import p20_img from "./w8.jpg";
import p21_img from "./m3.webp";
import p22_img from "./m4.jpg";
import p23_img from "./w5_makeup.webp";
import p24_img from "./m5.webp";
import p25_img from "./w1.webp";
import p26_img from "./m7.jpg";


let all_artisans = [
  {
    id: 1,
    name: 'Adebayo Johnson',
    profilePic: p3_img,
    occupation: 'Electrician',
    location: 'Ibadan',
    description: 'Certified electrician providing residential and commercial electrical services.',
    rating: 4.3,
    services: ['Wiring installation', 'Electrical repairs', 'Appliance servicing'],
    contact: '0801-234-5678'
},
{
    id: 2,
    name: 'Oluwaseun Fatima',
    profilePic: p4_img,
    occupation: 'Tailor',
    location: 'Lagos',
    description: 'Expert tailor with a focus on women’s fashion, including custom-made dresses and suits.',
    rating: 4.1,
    services: ['Custom tailoring', 'Dress alterations', 'Bridal wear'],
    contact: '0901-345-6789'
},
{
    id: 3,
    name: 'Usman Musa',
    profilePic: p5_img,
    occupation: 'Bricklayer',
    location: 'Ogbomosho',
    description: 'Specializes in constructing durable brick walls and foundations for homes and offices.',
    rating: 3.,
    services: ['Wall construction', 'Foundation building', 'Cement mixing'],
    contact: '0812-456-7890'
},
{
    id: 4,
    name: 'Ifeanyi Chukwuma',
    profilePic: p6_img,
    occupation: 'Painter',
    location: 'Abuja',
    description: 'Professional painter with over 5 years of experience in interior and exterior painting.',
    rating: 4.9,
    services: ['Interior painting', 'Exterior painting', 'Decorative finishes'],
    contact: '0701-234-5678'
},
{
    id: 5,
    name: 'Maryam Aliyu',
    profilePic: p7_img,
    occupation: 'Carpenter',
    location: 'Ogbomosho',
    description: 'Skilled carpenter specializing in furniture and home renovation projects.',
    rating: 4.5,
    services: ['Furniture making', 'Home renovations', 'Wood repairs'],
    contact: '0802-567-8901'
},
{
    id: 6,
    name: 'Babatunde Olumide',
    profilePic: p8_img,
    occupation: 'Electrician',
    location: 'Lagos',
    description: 'Licensed electrician with experience in both residential and industrial electrical systems.',
    rating: 3.2,
    services: ['Electrical installations', 'Panel upgrades', 'Light fixture installation'],
    contact: '0902-678-9012'
},
{
    id: 7,
    name: 'Funmilayo Ayo',
    profilePic: p9_img,
    occupation: 'Hair Stylist',
    location: 'Ibadan',
    description: 'Experienced hair stylist specializing in natural hair and braiding for women.',
    rating: 3.1,
    services: ['Braiding', 'Weave installation', 'Natural hair styling'],
    contact: '0803-789-0123'
},
{
    id: 8,
    name: 'Kolawole Samuel',
    profilePic: p10_img,
    occupation: 'Mechanic',
    location: 'Ilorin',
    description: 'Expert mechanic specializing in vehicle maintenance and engine repairs.',
    rating: 4.6,
    services: ['Engine repair', 'Brake service', 'Tire replacement'],
    contact: '0813-890-1234'
},
{
    id: 9,
    name: 'Ngozi Amadi',
    profilePic: p11_img,
    occupation: 'Tailor',
    location: 'Ogbomosho',
    description: 'Tailor specializing in children’s clothing, including uniforms and casual wear.',
    rating: 3.9,
    services: ['Uniform making', 'Children’s clothing', 'Alterations'],
    contact: '0703-012-3456'
},
{
    id: 10,
    name: 'Chinedu Nwankwo',
    profilePic: p12_img,
    occupation: 'Plumber',
    location: 'Owerri',
    description: 'Certified plumber experienced in installation and maintenance of plumbing systems.',
    rating: 3.,
    services: ['Pipe installation', 'Leak repairs', 'Drain cleaning'],
    contact: '0804-123-4567'
},
{
    id: 11,
    name: 'Yusuf Lawal',
    profilePic: p13_img,
    occupation: 'Welder',
    location: 'Kano',
    description: 'Skilled welder with experience in both commercial and residential metalwork projects.',
    rating: 4.3,
    services: ['Gate Fabrication', 'Metal Repairs', 'Custom Metal Furniture'],
    contact: '0802-345-6789'
},
{
    id: 12,
    name: 'Yetunde Akintola',
    profilePic: p14_img,
    occupation: 'Tailor',
    location: 'Ibadan',
    description: 'Tailor specializing in traditional attire and modern fashion for women.',
    rating: 3.4,
    services: ['Custom Dresses', 'Clothing Alterations', 'Embroidery'],
    contact: '0803-987-6543'
},
{
    id: 13,
    name: 'Suleiman Danjuma',
    profilePic: p15_img,
    occupation: 'Bricklayer',
    location: 'Abuja',
    description: 'Experienced bricklayer with a focus on commercial and residential construction.',
    rating: 4.0,
    services: ['Building Foundations', 'Wall Construction', 'Concrete Work'],
    contact: '0805-765-4321'
},
{
    id: 14,
    name: 'Femi Ojo',
    profilePic: p16_img,
    occupation: 'Electrician',
    location: 'Port Harcourt',
    description: 'Electrical contractor with over 7 years of experience in wiring and repair services.',
    rating: 4.4,
    services: ['Electrical Wiring', 'Circuit Installations', 'Solar System Setup'],
    contact: '0806-234-9876'
},
{
    id: 15,
    name: 'Aisha Bello',
    profilePic: p17_img,
    occupation: 'Tailor',
    location: 'Ogbomosho',
    description: 'Fashion designer and tailor specializing in bridal wear and custom-made garments.',
    rating: 3.4,
    services: ['Bridal Wear Design', 'Custom Suits', 'Traditional Outfits'],
    contact: '0807-456-7890'
},
{
    id: 16,
    name: 'David Adewale',
    profilePic: p18_img,
    occupation: 'Mechanic',
    location: 'Lagos',
    description: 'Mechanic with expertise in car diagnostics, engine repairs, and tire services.',
    rating: 3.9,
    services: ['Car Engine Repairs', 'Diagnostics', 'Tire Services'],
    contact: '0809-876-5432'
},
{
    id: 17,
    name: 'Esther Afolayan',
    profilePic: p19_img,
    occupation: 'Hair Stylist',
    location: 'Ogbomosho',
    description: 'Hair stylist with specialization in wigs, hair extensions, and bridal hair styling.',
    rating: 4.7,
    services: ['Wig Installation', 'Hair Braiding', 'Bridal Hair Styling'],
    contact: '0810-345-2345'
},
{
    id: 18,
    name: 'Bose Adegoke',
    profilePic: p20_img,
    occupation: 'Baker',
    location: 'Abeokuta',
    description: 'Skilled baker creating custom cakes and pastries for events and celebrations.',
    rating: 4.9,
    services: ['Custom Cakes', 'Pastries', 'Dessert Catering'],
    contact: '0811-456-1234'
},
{
    id: 19,
    name: 'Okoro Franklin',
    profilePic: p21_img,
    occupation: 'Carpenter',
    location: 'Owerri',
    description: 'Carpenter with expertise in furniture making, cabinetry, and home renovations.',
    rating: 4.7,
    services: ['Custom Furniture', 'Cabinet Installation', 'Home Renovations'],
    contact: '0812-765-9876'
},
{
    id: 20,
    name: 'Mohammed Ibrahim',
    profilePic: p22_img,
    occupation: 'Plumber',
    location: 'Maiduguri',
    description: 'Professional plumber providing installation and repair services for residential and commercial properties.',
    rating: 4.8,
    services: ['Pipe Installation', 'Leak Repairs', 'Water Heater Setup'],
    contact: '0813-345-6789'
},
{
    id: 21,
    name: 'Olufunke Ayodeji',
    profilePic: p23_img,
    occupation: 'Makeup Artist',
    location: 'Lagos',
    description: 'Professional makeup artist with expertise in bridal and event makeup.',
    rating: 3.5,
    services: ['Bridal Makeup', 'Event Makeup', 'Makeup Tutorials'],
    contact: '0814-567-8901'
},
{
    id: 22,
    name: 'Tunde Bakare',
    profilePic: p24_img,
    occupation: 'Electrician',
    location: 'Ogbomosho',
    description: 'Electrician with years of experience in wiring, maintenance, and solar installation.',
    rating: 4.3,
    services: ['Wiring Installation', 'Solar Power Systems', 'Electrical Maintenance'],
    contact: '0815-678-1234'
},
{
    id: 23,
    name: 'Grace Nnamdi',
    profilePic: p25_img,
    occupation: 'Seamstress',
    location: 'Enugu',
    description: 'Seamstress specializing in custom clothing, alterations, and repairs.',
    rating: 2.9,
    services: ['Custom Clothing', 'Dress Alterations', 'Tailoring'],
    contact: '0816-789-4567'
},
{
    id: 24,
    name: 'Bakare Abraham',
    profilePic: p26_img,
    occupation: 'Electrician',
    location: 'Enugu',
    description: 'Certified electrician providing residential and commercial electrical services.',
    rating: 4.1,
    services: ['Residential Wiring', 'Commercial Electrical Services', 'Lighting Installations'],
    contact: '0817-890-2345'
}


  ];

export default all_artisans;
