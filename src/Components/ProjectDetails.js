import React from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaBehance } from 'react-icons/fa'; 
import './ProjectDetails.css'; 
import img1 from './imgs/cerca.webp';
import img2 from './imgs/organick.webp';
import img3 from './imgs/e learning.webp'; 
import img4 from './imgs/Quiz.webp'; 
import img5 from './imgs/medical.webp'; 
import img6 from './imgs/alwalaa.webp'; 
import img7 from './imgs/lumicare2.webp'; 
import img8 from './imgs/EduPlus.webp'; 
import img9 from './imgs/velocart.png'; 
import img10 from './imgs/tawtheq.webp'; 
import img11 from './imgs/real state .png'; 
import img12 from './imgs/course dashboard.webp'; 
import img13 from './imgs/task manager.webp'; 
import img14 from './imgs/finicial.png'; 
import img15 from './imgs/weather.png'; 

const projects = [
  {
    id: 1,
    imageUrl: img1,
    description: `
      Project: Custom E-Commerce Website for a Local T-shirt Brand
  
      For this project, I collaborated with a local t-shirt brand to create a dynamic, user-friendly e-commerce website. The site features a sleek product catalog where users can explore a variety of unisex t-shirts. One of the standout features is the ability to easily switch between available colors for each product, enhancing the shopping experience.
  
      The ordering process was designed with simplicity in mind: users can fill out a form with their name, address, phone number, and product choice. Through integration with EmailJS, the order details are automatically sent to the admin via email for processing. Additionally, I implemented an "Order on WhatsApp" button, allowing users to place their order directly through WhatsApp. The button auto-generates a message containing all the relevant product and customer details, making it as seamless as possible.
  
      This project emphasized both the functional and user experience aspects, ensuring an efficient and enjoyable shopping process for customers, while keeping the admin workflow smooth and automated.
    `,
    technologies: ['React', 'React-DOM', 'React-Router-Dom', 'React-Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Cerca.git',
    demoLink: 'https://cerca-fareshossamms-projects.vercel.app/'
  }
  ,
  {
    id: 2,
    imageUrl: img2,
    description: `

Project: Healthy Food and Vegetable Store Website

I developed a clean and intuitive website for a local healthy food and vegetable store, offering users an easy way to browse through a wide variety of fresh produce. The website showcases all available products, complete with prices, ratings, and detailed descriptions. 

Users can effortlessly add items to their shopping cart and curate their list of desired products. However, purchases aren’t completed online—users can review their cart and then place their orders via phone or email, both of which are prominently displayed on the website for quick contact.

This project was focused on delivering an easy-to-navigate platform for users to explore products, while integrating simple and effective communication methods for placing orders directly with the store.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Organick.git',
    demoLink: 'https://fareshossamm.github.io/Organick/'
  },
  {
    id: 3,
    imageUrl: img3,
    description: `

Project: Online Courses Platform with User Authentication and Advanced Search

In this project, I developed a comprehensive online platform for users to explore and enroll in courses. The website features both "Sign Up" and "Login" functionalities, allowing new users to create an account and returning users to log in seamlessly.

The homepage provides a clean and engaging introduction to the platform, complete with quick navigation buttons for easy access. Users can browse through a variety of available courses, utilizing an advanced search feature that filters results in real-time as they type. Once a course is selected, users can purchase and begin watching the course directly through the website.

Additionally, I integrated a section where users can explore detailed profiles of the instructors, complete with their credentials, course specializations, and contact information for further engagement. The platform also includes an "About Us" page to provide background on the platform’s mission and goals.

This project focused on creating an intuitive, user-friendly experience while ensuring smooth functionality for browsing, filtering, and purchasing courses.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/E-learning.git',
    demoLink: 'https://fareshossamm.github.io/E-learning/'
  },
  {
    id: 4,
    imageUrl: img4,
    description: `

Project: Interactive JavaScript Quiz Platform

I built an interactive and user-friendly JavaScript quiz platform, designed to test users' knowledge through a 10-question exam. The platform presents a beautifully crafted card layout with clear instructions and rules, ensuring a seamless and enjoyable experience for users.

Upon starting the quiz, users receive immediate feedback on each question, highlighting any incorrect answers to enhance their learning. At the end of the quiz, a detailed results page summarizes the performance, providing both the score and an overview of the user's mistakes for further improvement.

This project focused on creating a visually appealing and intuitive interface, offering real-time feedback and a smooth, engaging experience for users looking to sharpen their JavaScript skills.

`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Quiz-APP.git',
    demoLink: 'https://fareshossamm.github.io/Quiz-APP/'
  },
  {
    id: 5,
    imageUrl: img5,
    description: `
Project: Comprehensive Hospital Website with Doctor Schedules and Appointment Booking

For this project, I designed a professional and user-friendly website for a hospital, providing visitors with key information about the medical services offered. Users can easily explore detailed profiles of the doctors, including their specialties and available appointment times, making it simple to choose the right physician.

The website features a dedicated section about the hospital, highlighting the number of rooms, doctors, patients, and years of experience. An engaging video introduces the hospital, showcasing its mission and the quality of care provided. In case of emergencies, users can quickly access the hospital’s emergency contact information via a prominent "Emergency Contact" section.

Additionally, the site offers a wide range of services, a blog with the latest medical and health news, and a convenient appointment booking form for users to schedule visits directly through the site.

This project focused on delivering a smooth and informative user experience, while ensuring essential services and information are easily accessible to patients.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Medical.git',
    demoLink: 'https://fareshossamm.github.io/Medical/'
  },
  {
    id: 6,
    imageUrl: img6,
    description: `

Project: Construction Company Website Showcasing Projects and Services

For this project, I collaborated closely with the company’s director to understand their vision for the website. The goal was to create an engaging platform that effectively showcases the company’s services and how they assist clients with various construction needs.

The website highlights the company’s previous projects through high-quality images and videos, offering detailed descriptions of each project. In addition, it showcases the company’s certifications, ensuring credibility and trust with potential clients. The director’s personal message, along with a company overview, provides insights into the company’s values and expertise.

Key features also include easy access to contact information, branch locations, and details about the different types of services the company offers. The site was designed to provide an informative and user-friendly experience, allowing potential clients to connect with the company effortlessly.

`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/alwalaa.git',
    demoLink: 'https://fareshossamm.github.io/alwalaa/'
  },
  {
    id: 7,
    imageUrl: img14,
    description: `

The expense analysis page is designed to give you a clear
 and actionable overview of your spending. With categorized
  expenses, interactive graphs, and detailed expenditure 
  breakdowns, it helps you visualize where your money is 
  going. Budget comparisons show how well you're sticking
   to your financial plan, while actionable insights provide 
   personalized tips for better financial management. This 
   page transforms raw data into a powerful tool for smarter
    financial decision-making, helping you stay on top of your
     expenses and take control of your budget.

`,
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/209689559/Financial-dashboard'


  },
  {
    id: 8,
    imageUrl: img12,
    description: `
Step into a personalized virtual learning space where your
 educational journey is front and center. The dashboard 
 showcases enrolled courses with progress bars that celebrate
  your achievements, evolving in color as you near completion.
   Below, a section of tailored course recommendations 
   encourages deeper learning based on your interests. 
   With a seamless search and filter tool, finding the right
    course has never been easier. This dashboard isn’t just
  about organization—it’s a dynamic reflection of your
  growth, guiding you to new horizons in your learning adventure.

`,
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/209562737/Course-Dashboard'

  },
  {
    id: 9,
    imageUrl: img13,
    description: `
In today's fast-paced world, managing tasks effectively is crucial for both individuals and teams. Through extensive user research and analysis, I've developed a solution that addresses common pain points in task management.
Intuitive Interface: A clean and user-friendly design that minimizes clutter and enhances navigation.
Task Organization: Users can easily categorize, prioritize, and track tasks, ensuring they focus on what matters most.
Collaboration Tools: Seamless sharing and communication features that allow teams to work together efficiently.
Deadline Reminders: Keep users on track with timely notifications for upcoming tasks.

`,
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/209760721/Task-Manager-APP'

  },
  {
    id: 10,
    imageUrl: img10,
    description: `
    أثناء عملي على تصميم واجهة وتجربة المستخدم لبرنامج "توثيق" هو تطبيق مخصص لمقدمي البرامج الإلكترونية لإدارة التعليم في المملكة العربية السعودية، واجهت العديد من التحديات التي شكلت أساس عملية إعادة التصميم. البرنامج يتيح لمقدمي البرامج توثيق حلولهم التعليمية من خلال نموذج إلكتروني، كما يسمح للمستخدمين بمراجعة وطباعة هذه النماذج.
    كانت الواجهة السابقة تفتقر للألوان الجذابة، مما جعلها غير مريحة للعين. كما أن المدخلات كانت صغيرة وغير واضحة، مما سبب صعوبة في الاستخدام. بالإضافة إلى ذلك، كانت الصفحة الرئيسية مزدحمة بالمعلومات، حيث تظهر جميع البيانات فور فتح التطبيق، وهو ما لم يكن المستخدم بحاجة لرؤيته من البداية. التنقل بين الصفحات كان معقدًا، وكان المستخدم مجبرًا على التمرير للأسفل لمسافات طويلة بسبب كثرة المدخلات غير الضرورية.
    
    قمت بحل هذه المشكلات عن طريق إعادة التفكير في الألوان المستخدمة؛ اخترت ألوانًا مستوحاة من شعار البرنامج، وهي ألوان مريحة للعين تعزز من تجربة المستخدم. صممنا صفحة رئيسية جديدة تتيح للمستخدم التنقل بسهولة بين الخدمات المختلفة عبر واجهة تحتوي على بطاقات لكل خدمة، مع إضافة صور جذابة وألوان مبهجة.
    
    ركزت أيضًا على تحسين سهولة الاستخدام بتبسيط عملية التنقل وجعلها أكثر وضوحًا للمستخدم. كما قمت بإزالة المدخلات غير الضرورية، مما ساهم في تقليل التمرير الزائد. كل خطوة أصبحت الآن موضحة النتيجة الاخيره هي
    
    تجربة مستخدم أفضل وأكثر راحة وتصميم يعزز سهولة التصفح والاستخدام مما جعل "توثيق" أكثر كفاءة للمستخدمين والمطورين على حد سواء.
    
    `,
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/208214883/Tawtheq'
  },
  {
    id: 11,
    imageUrl: img7,
    description: `

    Project: UI/UX Design for a Senior Assistance Mobile App
    
    In this project, I collaborated closely with the client to understand their vision for a mobile app designed to assist the elderly in managing their daily health needs. The app was created with simplicity and ease of use in mind, ensuring a smooth user experience for older individuals.
    
    The app provides features such as medication reminders, doctor appointments, and scheduled hydration alerts to help seniors maintain a healthy lifestyle. It also allows users to communicate with doctors, book appointments, and even hold video calls for remote consultations. Seniors can also add daily tasks, set goals, and receive timely notifications to stay on track.
    
    One unique aspect of the app is the ability for caregivers or family members to manage the schedules and appointments for their loved ones, ensuring everything is well-organized. In emergencies, the app includes an emergency contact button, automatically dialing a chosen number, with a secondary contact receiving a message if the first contact is unavailable.
    
    Throughout the design process, I focused on creating a visually comfortable and user-friendly interface, enhancing usability and accessibility for the elderly. The design ensures a relaxing and supportive experience, empowering users to manage their health effortlessly.
    
    `,

    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/206773061/LumiCare'
  },

  {
    id: 12,
    imageUrl: img9,
    description: `

الفكرة بدأت لما لاحظت إن كتير من مواقع التسوق الإلكترونية بتواجه مشاكل في تجربة المستخدم، خصوصًا على الموبايل. مواقع كبيرة زي أمازون مثلاً بتكون مش متجاوبة بالشكل المطلوب مع الموبايل، وده بيضايق المستخدمين اللي بيحبوا يتسوقوا من على أجهزتهم الصغيرة. عشان كده، كنت حريص جدًا إني أعمل موقع يكون متجاوب تمامًا، ويشتغل بنفس السهولة والجمال على أي حجم شاشة.

كمان لاحظت إن كتير من المواقع بتكون مشوشة جدًا، مليانة تفاصيل وحاجات تشتت المستخدمين. الصفحات بتكون مزدحمة بالكلام والصور اللي بتخلي العين تسرح، والمستخدم يلاقي نفسه تايه وسط الزحمة دي. فقررت أركز على إن الصفحات تكون هادية ومنظمة أكتر، بحيث أي حد يدخل الموقع يلاقي اللي بيدور عليه بسهولة ومن غير ما يحس إنه مضغوط أو متشتت.

بالإضافة للألوان المريحة، ركزت على استخدام المساحات الفاضية بشكل متوازن في التصميم. المساحات الفاضية بتساعد على تخفيف الضغط البصري عن المستخدم وتخلي العناصر المهمة في الصفحة واضحة وسهلة الوصول. التوازن ده مش بس بيزود جمالية التصميم، لكنه بيساهم في خلق تجربة منظمة وهادية بتخلي المستخدم يشعر بالراحة أثناء التسوق.

النتيجة النهائية كانت موقع مش بس متجاوب وسهل الاستخدام، لكن كمان منظم، هادي، وألوانه مريحة، بيحقق للمستخدمين تجربة تسوق ممتعة وفعالة على كل الأجهزة.
    
    `,

    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/208806053/VeloCart'
  },
  {
    id: 13,
    imageUrl: img8,
    description: `

    Project: UI/UX Design for an Online Courses Platform (Figma) I designed a comprehensive online courses platform using Figma, aimed at delivering an efficient learning experience for users. The website features a "Sign Up" and "Login" system, allowing users to create accounts or access their existing ones. The homepage provides a clear introduction to the platform, with quick navigation buttons and a detailed view of available courses. An advanced search filter enhances user experience by providing real-time results as users type. Once a course is selected, users can purchase and start their learning journey directly from the site. For administrators, I designed a dedicated dashboard allowing them to add new courses effortlessly. This dashboard provides a streamlined interface for course management, without requiring a login system or displaying instructor details. The design ensures that admins can efficiently manage course content while maintaining a user-friendly experience for visitors. The design emphasizes usability and simplicity, ensuring both users and administrators have a smooth and effective experience.


    `,

    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/206463579/EduPluse'
  },
  {
    id: 14,
    imageUrl: img11,
    description: `
Welcome to the property listing page, where your dream home comes to life through vibrant visuals and detailed information. This page is meticulously designed to showcase every aspect of a property, making it easy for potential buyers or renters to envision themselves in their new space.


Stunning Property Images:
The page opens with a captivating image gallery, displaying high-quality photos of the property from various angles. Each image captures the unique features and ambiance of the home, allowing viewers to explore it visually.

Comprehensive Property Description:
Beneath the images, a detailed description provides insights into the property’s layout, design, and amenities. This section highlights key features such as the number of bedrooms and bathrooms, square footage, and any unique characteristics that set this property apart.

Transparent Pricing Information:
Clearly displayed price information ensures that potential buyers or renters understand the financial commitment required. Any additional costs, such as HOA fees or utilities, are also mentioned to provide a complete picture.

Contact Information:
For those interested in more details or wishing to schedule a viewing, the page includes prominent contact information for the listing agent or property manager. This section is designed for ease of access, encouraging potential clients to reach out without hesitation.

Call-to-Action Button:
A prominent call-to-action button invites users to take the next step, whether it's scheduling a visit, requesting more information, or making an offer. This button stands out, guiding users seamlessly toward their desired action.


    `,

    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/209027217/Real-Estate-Web'
  },
  {
    id: 15,
    imageUrl: img15,
    description: `

The hourly weather forecast page of the weather app provides users with a clear and intuitive way to stay informed about upcoming weather conditions. It features:

Comprehensive Hourly Data: Displays essential weather information, including temperature, humidity, wind speed, and sky conditions for each hour in an organized format.

Temperature Trends: A visually appealing line graph shows temperature fluctuations throughout the day, allowing users to easily track changes.

Precipitation Chances: A dynamic bar chart indicates the probability of precipitation, highlighting times when rain is likely to occur.

Additional Details: Users can click on specific hours to access detailed information, including the UV index and visibility, ensuring they have all necessary data for informed decision-making.

Intuitive Navigation: The design includes features like a dropdown for selecting different days and an interactive slider for scrolling through hours, providing a seamless user experience.


    `,

    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/209341263/Weather-Forecast-APP'
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className='not-found'>Project not found</div>;

  return (
    <div className='project-details-container'>
      <section className='project-details'>
        <div className='project-content'>
          <img src={project.imageUrl} alt={project.title} className='project-image' />
          <div className='project-info'>
            <h1 className='project-title'>{project.title}</h1>
            <div className='project-tech'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='tech-tag'>{tech}</span>
              ))}
            </div>
            <div className='project-links'>
              {project.technologies.includes('Figma') ? (
                <a 
                  href={project.BehanceLink} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='link-button'
                >
                  <FaBehance className='icon' />
                </a>
              ) : (
                <>
                  <a 
                    href={project.repoLink} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='link-button'
                  >
                    <FaGithub className='icon' />
                  </a>
                  <a 
                    href={project.demoLink} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='link-button'
                  >
                    <FaExternalLinkAlt className='icon' />
                  </a>
                </>
              )}
            </div>
           
            <p className='project-description'>{project.description}</p>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
