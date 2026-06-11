"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { CookingPot, Fish, Flame, Leaf, Milk, Salad, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="medium"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "الرئيسية",
          id: "#hero",
        },
        {
          name: "عنّا",
          id: "#about",
        },
        {
          name: "قائمة الطعام",
          id: "#menu",
        },
        {
          name: "العروض",
          id: "#offers",
        },
        {
          name: "آراء",
          id: "#testimonials",
        },
        {
          name: "أسئلة",
          id: "#faq",
        },
        {
          name: "تواصل",
          id: "#contact",
        },
      ]}
      button={{
        text: "احجز طاولتك",
        href: "#contact",
      }}
      brandName="مطعم بغداد"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient",
      }}
      title="مذاق بغداد الأصيل في قلب مدينتك"
      description="اكتشف أشهى الأطباق العراقية الأصيلة المحضرة بحب وشغف. نقدم لكم تجربة طعام لا تُنسى تعيد ذكريات الماضي وتصنع لحظات لا تقدر بثمن."
      buttons={[
        {
          text: "استعرض قائمتنا",
          href: "#menu",
        },
        {
          text: "احجز طاولتك الآن",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dinner-setup-with-side-dish-salad-pickles-plates_140725-8495.jpg"
      imageAlt="مائدة طعام عراقية فاخرة"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-eating-outdoors-chinese-asian-food-sitting-stree_197531-31017.jpg",
          alt: "زبون سعيد",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-happy-blonde-hipster-woman-eating-tasty-raspberry-dessert-cake-sitting-cute-bakery-enjoy-her-meal-sweet-breakfast-diet-nutrition-concept_291049-2278.jpg",
          alt: "مجموعة أصدقاء يتناولون الطعام",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-having-dinner-restaurant_23-2148018749.jpg",
          alt: "زوجان يستمتعان بوجبة",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-person-enjoying-food_23-2149304418.jpg",
          alt: "سيدة تتناول الطعام",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-businessman-posing-thoughtfully-cafe_23-2147689187.jpg",
          alt: "أشخاص يتناولون العشاء",
        },
      ]}
      avatarText="انضم إلى أكثر من 5000 زبون راضٍ"
      marqueeItems={[
        {
          type: "text",
          text: "مذاق لا يُنسى",
        },
        {
          type: "text",
          text: "أجواء عائلية دافئة",
        },
        {
          type: "text",
          text: "أطباق عراقية أصيلة",
        },
        {
          type: "text",
          text: "خدمة ممتازة",
        },
        {
          type: "text",
          text: "تجربة طعام فاخرة",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="قصة مطعم بغداد: حيث تلتقي الأصالة بالفخامة"
      description="منذ تأسيسه، يلتزم مطعم بغداد بتقديم تجربة طعام عراقية لا تُنسى، تجمع بين التقاليد العريقة واللمسات العصرية. نستخدم أجود المكونات الطازجة وأساليب الطهي الأصيلة لنقدم لكم مذاقاً يعيد ذكريات الوطن ويأسر الحواس. تفضلوا بزيارتنا لتكتشفوا سرّ مطبخنا الذي يُروى جيلاً بعد جيل."
    />
  </div>

  <div id="featured-dishes" data-section="featured-dishes">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "المشويات العراقية",
          description: "تذوقوا أسياخ الكباب والتكة المشوية على الفحم بأسلوب بغدادي أصيل، مع تتبيلات خاصة تجعلها لا تُقاوم.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-delicious-kebabs-with-vegetables_23-2148685498.jpg",
            imageAlt: "مائدة كباب عراقي",
          },
          items: [
            {
              icon: Flame,
              text: "كباب لحم ضأن",
            },
            {
              icon: Slices,
              text: "تكة دجاج",
            },
            {
              icon: Drumstick,
              text: "ريش غنم",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/dinner-setup-with-side-dish-salad-pickles-plates_140725-8495.jpg",
          imageAlt: "grilled Iraqi lamb shish kebab platter",
        },
        {
          title: "المقبلات البغدادية",
          description: "ابدأوا وجبتكم بمجموعة مختارة من المقبلات الساخنة والباردة، مثل الحمص، المتبل، والتبولة، كلها محضرة طازجة.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/traditional-caucasian-sac-ici-with-fried-chicken-eggplant-potatoes-tomatoes-zucchini-served-with-lavash-parsley-turshu_114579-143.jpg",
            imageAlt: "مقبلات شرق أوسطية",
          },
          items: [
            {
              icon: Bowl,
              text: "حمص بالطحينة",
            },
            {
              icon: Salad,
              text: "تبولة طازجة",
            },
            {
              icon: Milk,
              text: "متبل باذنجان",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/burning-candle-table_140725-8115.jpg",
          imageAlt: "grilled Iraqi lamb shish kebab platter",
        },
        {
          title: "الأطباق التقليدية",
          description: "استمتعوا بأطباقنا التراثية التي تجسد عمق المطبخ العراقي، مثل الدولمة الشهية والمحاشي الغنية.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/side-view-boiled-rice-with-raisins-barberries-with-decanter-cherry-juice_141793-4774.jpg",
            imageAlt: "أطباق دولمة عراقية",
          },
          items: [
            {
              icon: Leaf,
              text: "دولمة ورق عنب",
            },
            {
              icon: CookingPot,
              text: "محاشي مشكلة",
            },
            {
              icon: Fish,
              text: "سمك مسكوف",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/whole-fish-grilled-served-with-tomato-lemon-onion_114579-3761.jpg",
          imageAlt: "grilled Iraqi lamb shish kebab platter",
        },
      ]}
      title="أطباقنا المميزة"
      description="استمتع بتشكيلة فريدة من الأطباق التي تُعد بعناية فائقة لتناسب جميع الأذواق، من المشويات الشهية إلى المقبلات الغنية."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p-1",
          name: "سمك المسكوف",
          price: "80,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/whole-fish-grilled-served-with-tomato-lemon-onion_114579-3761.jpg",
          imageAlt: "سمك مسكوف عراقي",
        },
        {
          id: "p-2",
          name: "برياني دجاج",
          price: "25,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-plov-with-different-raisins-dark-space_140725-97889.jpg",
          imageAlt: "برياني دجاج عراقي",
        },
        {
          id: "p-3",
          name: "كبة مقلية",
          price: "15,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/potato-kebab-served-flatbreads-with-sour-sauce_140725-1983.jpg",
          imageAlt: "كبة مقلية عراقية",
        },
        {
          id: "p-4",
          name: "مرق لحم",
          price: "28,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/roast-chicken-liver-with-vegetables-wooden-background-flat-lay-top-view_2829-6475.jpg",
          imageAlt: "مرق لحم عراقي",
        },
        {
          id: "p-5",
          name: "القوزي",
          price: "95,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/scrambled-eggs-with-greens-decorated-with-pomegranate-seeds_114579-23466.jpg",
          imageAlt: "القوزي العراقي",
        },
        {
          id: "p-6",
          name: "تشريب لحم",
          price: "30,000 د.ع",
          imageSrc: "http://img.b2bpic.net/free-photo/top-close-view-bozbash-soup-kitchen-towel-yellow-red-onions-nude-background_140725-131287.jpg",
          imageAlt: "تشريب لحم عراقي",
        },
      ]}
      title="قائمة طعام مطعم بغداد"
      description="تصفح قائمتنا الكاملة من المقبلات الشهية، الأطباق الرئيسية الغنية، والحلويات اللذيذة، التي تُعد خصيصًا لتلبية ذوقك الرفيع."
    />
  </div>

  <div id="offers" data-section="offers">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p-plan1",
          badge: "الأكثر شعبية",
          badgeIcon: Sparkles,
          price: "90,000 د.ع",
          name: "وليمة عائلية",
          buttons: [
            {
              text: "اطلب الآن",
              href: "#contact",
            },
          ],
          features: [
            "تكفي 4-5 أشخاص",
            "مشاوي مشكلة (كيلو)",
            "3 أنواع مقبلات",
            "مشروبات غازية",
          ],
        },
        {
          id: "p-plan2",
          price: "45,000 د.ع",
          name: "وجبة غداء عمل",
          buttons: [
            {
              text: "اطلب الآن",
              href: "#contact",
            },
          ],
          features: [
            "تكفي لشخصين",
            "صنف رئيسي من اختيارك",
            "مقبلات مشكلة صغيرة",
            "عصير طازج",
          ],
        },
        {
          id: "p-plan3",
          price: "150,000 د.ع",
          name: "باقة المناسبات",
          buttons: [
            {
              text: "اطلب الآن",
              href: "#contact",
            },
          ],
          features: [
            "تكفي 8-10 أشخاص",
            "قوزي كامل أو 2 كيلو مشاوي",
            "6 أنواع مقبلات",
            "حلويات ومشروبات",
          ],
        },
      ]}
      title="عروضنا الخاصة"
      description="استفد من باقاتنا ووجباتنا العائلية بأسعار لا تُقاوم، مصممة لتقديم أقصى قيمة وتجربة طعام رائعة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t-1",
          name: "أحمد السالم",
          role: "زبون دائم",
          testimonial: "أفضل مطعم عراقي في المدينة! الأكل لذيذ والأجواء رائعة والخدمة ممتازة. أوصي به بشدة.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-talking-while-eating-lunch-restaurant_637285-9017.jpg",
          imageAlt: "أحمد السالم",
        },
        {
          id: "t-2",
          name: "فاطمة الزهراء",
          role: "عاشقة للمأكولات",
          testimonial: "كل طبق يحمل نكهة الأصالة. كأنني أتناول الطعام في بغداد نفسها. تجربة لا تُنسى بالتأكيد.",
          imageSrc: "http://img.b2bpic.net/free-photo/standing-male-restaurant-hotel-equipment_1134-1294.jpg",
          imageAlt: "فاطمة الزهراء",
        },
        {
          id: "t-3",
          name: "خالد المنصوري",
          role: "ذواق طعام",
          testimonial: "سمك المسكوف كان خيالياً! لم أتذوق مثله من قبل. يستحق الزيارة مرة أخرى وأخرى.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-pasta-italian-restaurant_1303-24362.jpg",
          imageAlt: "خالد المنصوري",
        },
        {
          id: "t-4",
          name: "ليلى حسن",
          role: "مدوّنة طعام",
          testimonial: "أجواء عائلية دافئة، والطعام يفوح بالحب والنكهات الغنية. مطعم بغداد هو وجهتي المفضلة.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-wearing-casual-sweater-standing-red-background-pointing-fingers-camera-with-happy-funny-face-good-energy-vibes_839833-6469.jpg",
          imageAlt: "ليلى حسن",
        },
        {
          id: "t-5",
          name: "يوسف العبيدي",
          role: "رجل أعمال",
          testimonial: "مكان مثالي لغداء عمل أو عشاء فاخر. الخدمة راقية والطعام يلبي أعلى التوقعات.",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-family-enjoying-new-year-party_23-2149173271.jpg",
          imageAlt: "يوسف العبيدي",
        },
      ]}
      title="ماذا يقول زباؤنا"
      description="شهادات من ضيوفنا الكرام حول تجاربهم الفريدة في مطعم بغداد، التي تعكس جودة طعامنا وكرم ضيافتنا."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "مجلة الذواقة",
        "جوائز الطهي العربي",
        "دليل المطاعم الفاخرة",
        "نكهات عربية",
        "أفضل المطاعم المحلية",
        "جائزة التميز 2023",
        "تقييمات 5 نجوم",
      ]}
      title="شركاؤنا وجوائزنا"
      description="فخورون بالتعاون مع أفضل الموردين وحاصلون على تقدير من مؤسسات ومجلات رائدة في عالم الطهي."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "ما هي ساعات عمل المطعم؟",
          content: "نعمل يومياً من الساعة 12 ظهراً حتى 12 منتصف الليل، بما في ذلك عطلات نهاية الأسبوع.",
        },
        {
          id: "q2",
          title: "هل يمكن حجز طاولة مسبقاً؟",
          content: "نعم، ننصح بالحجز المسبق لضمان توفر الطاولة، خاصة في أوقات الذروة وعطلات نهاية الأسبوع. يمكنك الحجز عبر الهاتف أو موقعنا الإلكتروني.",
        },
        {
          id: "q3",
          title: "هل تقدمون خدمة التوصيل؟",
          content: "نعم، نقدم خدمة التوصيل لجميع مناطق المدينة. يمكنك الطلب عبر تطبيقنا الخاص أو من خلال شركاء التوصيل لدينا.",
        },
        {
          id: "q4",
          title: "هل توجد خيارات طعام للنباتيين؟",
          content: "نعم، نوفر تشكيلة من الأطباق النباتية والمقبلات التي تناسب تفضيلاتكم. يرجى إبلاغ طاقم الخدمة عند الطلب.",
        },
      ]}
      sideTitle="أسئلة شائعة"
      sideDescription="هل لديك استفسار؟ قد تجد الإجابة هنا."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="تواصل معنا أو احجز طاولتك"
      buttons={[
        {
          text: "احجز الآن",
          href: "#",
        },
        {
          text: "اتصل بنا",
          href: "tel:+9647XXXXXXXXX",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="مطعم بغداد"
      columns={[
        {
          title: "روابط سريعة",
          items: [
            {
              label: "الرئيسية",
              href: "#hero",
            },
            {
              label: "قائمة الطعام",
              href: "#menu",
            },
            {
              label: "عروضنا",
              href: "#offers",
            },
            {
              label: "عنّا",
              href: "#about",
            },
          ],
        },
        {
          title: "تواصل معنا",
          items: [
            {
              label: "البريد الإلكتروني",
              href: "mailto:info@baghdadrestaurant.com",
            },
            {
              label: "الهاتف",
              href: "tel:+9647XXXXXXXXX",
            },
            {
              label: "الموقع",
              href: "#contact",
            },
          ],
        },
        {
          title: "تابعنا",
          items: [
            {
              label: "فيسبوك",
              href: "https://facebook.com/baghdadrestaurant",
            },
            {
              label: "انستغرام",
              href: "https://instagram.com/baghdadrestaurant",
            },
            {
              label: "تويتر",
              href: "https://twitter.com/baghdadrestaurant",
            },
          ],
        },
      ]}
      copyrightText="© 2024 مطعم بغداد. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
