import logo from './gymlogo.png'
import banner1 from './banner-1.png'
import banner3 from './banner-3.jpg'
import banner4 from './banner-4.jpg'

import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { SiOpenaigym } from "react-icons/si";
import { CgGym } from "react-icons/cg";







export const assets = {
    logo,
    banner1,
    banner3,
    banner4,
}

export const features = [
    {
        _id: 1,
        featicon: MdOutlineSportsGymnastics,
        name: "Effortless Workout",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
    },

    {
        _id: 2,
        featicon: GiGymBag,
        name: "Rep Counting",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
    },

    {
        _id: 3,
        featicon: SiOpenaigym,
        name: "Calorie Calculations",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
    },

    {
        _id: 4,
        featicon: CgGym,
        name: "Healthy nutrition plan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
    },
]

export const plans = [
    {
        _id: 1,
        
        name: "Class drop-in",
        price: 39.0,
        class: "SINGLE CLASS",
        desc:[
            "Free riding",
            "Unlimited equipments",
            "Personal trainer",
            "Weight losing classes",
            "Month to mouth",
            "No time restriction",
        ]
    },

    {
        _id: 2,
        
        name: "12 Month unlimited",
        price: 99.0,
        class: "SINGLE CLASS",
        desc:[
            "Free riding",
            "Unlimited equipments",
            "Personal trainer",
            "Weight losing classes",
            "Month to mouth",
            "No time restriction",
        ]
    },

    {
        _id: 3,
        
        name: "6 Month unlimited",
        price: 59.0,
        class: "SINGLE CLASS",
        desc:[
            "Free riding",
            "Unlimited equipments",
            "Personal trainer",
            "Weight losing classes",
            "Month to mouth",
            "No time restriction",
        ]
    },
]

export const testimonial = [
    {
        _id: 1,
        date: "Mar 16, 2020",
        auth_name: "Michael Foster",
        role:'Co-Founder / CTO',
        desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
    },

    {
        _id: 2,
        date: "Dec 26, 2024",
        auth_name: "John Doe",
        role:'Front-end Developer',
        desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
    },

    {
        _id: 3,
        date: "Jan 16, 2012",
        auth_name: "Roman Reigns",
        role:'Director of Product',
        desc: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
    },
]


export const faq = [
    {
      _id: 1,
      quest: "What are your gym's operating hours?",
      ans: "Our gym is open from 5 AM to 11 PM on weekdays and 6 AM to 9 PM on weekends.",
    },
    {
      _id: 2,
      quest: "Do you offer personal training services?",
      ans: "Yes, we offer personal training packages tailored to your fitness goals. You can schedule a consultation with one of our certified trainers.",
    },
    {
      _id: 3,
      quest: "Is there a trial period for new members?",
      ans: "Yes, we offer a 7-day free trial for new members. You can sign up through our app or visit the gym reception to get started.",
    },
    {
      _id: 4,
      quest: "What types of classes do you offer?",
      ans: "We offer a variety of classes, including HIIT, Yoga, Pilates, Zumba, and strength training. Check our class schedule on the app for details.",
    },
    {
      _id: 5,
      quest: "How can I freeze or cancel my membership?",
      ans: "You can freeze or cancel your membership through the app or by contacting our support team. Freezing is allowed once every 6 months.",
    },
    {
      _id: 6,
      quest: "Do you have locker and shower facilities?",
      ans: "Yes, we provide secure lockers and fully equipped shower facilities for all our members.",
    },
    {
      _id: 7,
      quest: "Is there a mobile app for the gym?",
      ans: "Yes, our gym app allows you to book classes, track your workouts, and manage your membership on the go.",
    },
  ];
  