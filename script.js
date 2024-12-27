let langs = document.querySelectorAll('.langs');

let introTitle = document.querySelector('.intro-title');
let introTxt = document.querySelector('.intro-txt');
let about = document.querySelectorAll('.txt-about');
let services = document.querySelectorAll('.txt-services');
let advantages = document.querySelectorAll('.txt-advantages');
let contact = document.querySelectorAll('.txt-contact');
let abTitle = document.querySelector('.ab-ul-title');
let aboutP = document.querySelector('.about-info-p');
let aboutLi1 = document.querySelector('.about-info-li1');
let aboutLi2 = document.querySelector('.about-info-li2');
let aboutLi3 = document.querySelector('.about-info-li3');
let servcicesT1 = document.querySelector('.txt-services-title1');
let servcicesT2 = document.querySelector('.txt-services-title2');
let servcicesT3 = document.querySelector('.txt-services-title3');
let servcicesT4 = document.querySelector('.txt-services-title4');
let servic1es1 = document.querySelector('.txt-services-i1-1');
let servic1es2 = document.querySelector('.txt-services-i1-2');
let servic1es3 = document.querySelector('.txt-services-i1-3');
let servic2es1 = document.querySelector('.txt-services-i2-1');
let servic2es2 = document.querySelector('.txt-services-i2-2');
let servic3es1 = document.querySelector('.txt-services-i3-1');
let servic3es2 = document.querySelector('.txt-services-i3-2');
let servic4es1 = document.querySelector('.txt-services-i4-1');
let advLi1 = document.querySelector('.advLi1');
let advLi2 = document.querySelector('.advLi2');
let advLi3 = document.querySelector('.advLi3');
let advLi4 = document.querySelector('.advLi4');
let advLi5 = document.querySelector('.advLi5');
let ctcooo = document.querySelector('.ctcooo');
let ctcTax = document.querySelector('.ctcTax');
let ctcLoc = document.querySelector('.ctcLoc');
let ctcStr = document.querySelector('.ctcStr');
let ctcRD = document.querySelector('.ctcRD');
let ctcRN = document.querySelector('.ctcRN');
let formTitle = document.querySelector('.contactForm-title');
let nameInp = document.querySelector('.nameInpLab');
let messageInp = document.querySelector('.messageInpLab');
let submit = document.querySelector('.contactForm button');
let forSafe = document.querySelector('footer h3');


langs.forEach(el => {
    el.onclick = () => {
        let attr = el.getAttribute('lang');


        introTitle.textContent = data[attr].introTitle;
        introTxt.textContent = data[attr].introTxt;

        about.forEach(a => {
            a.textContent = data[attr].about;
        })
        services.forEach(a => {
            a.textContent = data[attr].services;
        })
        advantages.forEach(a => {
            a.textContent = data[attr].advantages;
        })
        contact.forEach(a => {
            a.textContent = data[attr].contact;
        })

        abTitle.textContent = data[attr].abTitle;
        aboutP.textContent = data[attr].aboutP;
        aboutLi1.textContent = data[attr].aboutLi1;
        aboutLi2.textContent = data[attr].aboutLi2;
        aboutLi3.textContent = data[attr].aboutLi3;
        servcicesT1.textContent = data[attr].servcicesT1;
        servcicesT2.textContent = data[attr].servcicesT2;
        servcicesT3.textContent = data[attr].servcicesT3;
        servcicesT4.textContent = data[attr].servcicesT4;
        servic1es1.textContent = data[attr].servic1es1;
        servic1es2.textContent = data[attr].servic1es2;
        servic1es3.textContent = data[attr].servic1es3;
        servic2es1.textContent = data[attr].servic2es1;
        servic2es2.textContent = data[attr].servic2es2;
        servic3es1.textContent = data[attr].servic3es1;
        servic3es2.textContent = data[attr].servic3es2;
        servic4es1.textContent = data[attr].servic4es1;
        advLi1.innerHTML = data[attr].advLi1;
        advLi2.innerHTML = data[attr].advLi2;
        advLi3.innerHTML = data[attr].advLi3;
        advLi4.innerHTML = data[attr].advLi4;
        advLi5.innerHTML = data[attr].advLi5;
        ctcooo.textContent = data[attr].ctcooo;
        ctcTax.textContent = data[attr].ctcTax;
        ctcLoc.textContent = data[attr].ctcLoc;
        ctcStr.textContent = data[attr].ctcStr;
        ctcRD.textContent = data[attr].ctcRD;
        ctcRN.textContent = data[attr].ctcRN;
        formTitle.textContent = data[attr].formTitle;
        nameInp.textContent = data[attr].name;
        messageInp.textContent = data[attr].message;
        submit.textContent = data[attr].send;
        forSafe.textContent = data[attr].safe;
    }
})

let data = {
    english: {
        introTitle: 'Quality, Reliability, Global Connections',
        introTxt: 'Wholesale supply of consumer goods and equipment to Central Asia, Azerbaijan, and Turkey. Strict quality control and timely deliveries are our top priorities',
        about: 'About Us',
        services: 'Services',
        advantages: 'Advantages',
        contact: 'Contact Us',
        abTitle: 'Key Facts:',
        aboutP: 'Sanat KG LLC, founded in 2021 in Kyrgyzstan, specializes in the wholesale trade of a wide range of products for civilian use, including pumping equipment. We collaborate with leading suppliers from China and Southeast Asia and organize deliveries to Kazakhstan, Uzbekistan, Tajikistan, Turkmenistan, Azerbaijan, and Turkey.',
        aboutLi1: 'Year of Establishment: 2021',
        aboutLi2: 'Operational Geography: Central Asia, Azerbaijan, Turkey',
        aboutLi3: 'Suppliers: China, Southeast Asia, Europe',
        servcicesT1: '01.  Wholesale Supply of Goods',
        servcicesT2: '02. International Logistics',
        servcicesT3: '03.  Quality Control and Support',
        servcicesT4: '04. Customized Solutions',
        servic1es1: 'Products for civilian use and everyday needs.',
        servic1es2: 'Consumer goods.',
        servic1es3: 'Other non-food products.',
        servic2es1: 'Organization and optimization of deliveries from China, Southeast Asia, and Europe.',
        servic2es2: 'Transportation to Central Asia, Azerbaijan, and Turkey.',
        servic3es1: 'Inspection of products at all stages: from procurement to delivery.',
        servic3es2: 'Client support and operational task solutions.',
        servic4es1: 'Development of personalized logistics schemes and deliveries tailored to client requests.',
        advLi1: '<span>Flexible Logistics:</span> Optimization of delivery timelines and routes',
        advLi2: '<span>Quality Control:</span> Products meet international standards.',
        advLi3: '<span>Wide Geography:</span> Collaboration with suppliers and customers in various regions worldwide.',
        advLi4: '<span>Reliable Partners:</span> Cooperation with leading manufacturers from China and Southeast Asia.',
        advLi5: '<span>Individual Approach:</span> Solutions tailored to your specific needs.',
        ctcooo: 'Sanat KG LLC (Sanat Key Ji LLC)',
        ctcTax: 'Tax ID: 00104202110338',
        ctcLoc: 'Legal Address: Kyrgyz Republic, Bishkek City, Pervomaysky District,',
        ctcStr: 'Toktonalieva Street, 4B',
        ctcRD: 'Registration Date: 01.04.2021',
        ctcRN: 'Registration Number: 196605-3301-LLC',
        formTitle: 'write to us',
        name: 'Name',
        message: 'Message',
        send: 'submit',
        safe: '© 2024 Sanat KG LLC. All rights reserved.',
    },

    russian: {
        introTitle: 'Качество, надежность, глобальные связи',
        introTxt: 'Оптовые поставки товаров народного потребления и оборудования в страны Центральной Азии, Азербайджан и Турцию. Строгий контроль качества и своевременные поставки – наши главные приоритеты',
        about: 'о компании',
        services: 'услуги',
        advantages: 'преимущества',
        contact: 'контакты',
        abTitle: 'о компании',
        aboutP: 'Компания Sanat KG LLC, основанная в 2021 году в Киргизии, специализируется на оптовой торговле широким спектром продукции для гражданских целей и насосного оборудования. Мы сотрудничаем с ведущими поставщиками из Китая и Юго-Восточной Азии и организуем поставки в Казахстан, Узбекистан, Таджикистан, Туркменистан, Азербайджан и Турцию.',
        aboutLi1: 'Год основания: 2021',
        aboutLi2: 'География работы: Центральная Азия, Азербайджан, Турция',
        aboutLi3: 'Поставщики: Китай и Юго-Восточная Азия, Европа',
        servcicesT1: '01.  Оптовые поставки товаров',
        servcicesT2: '02. Международная логистика',
        servcicesT3: '03.  Контроль качества и сопровождение',
        servcicesT4: '04. Индивидуальные решения',
        servic1es1: 'Продукция для гражданских целей и повседневного использования.',
        servic1es2: 'Товары народного потребления',
        servic1es3: 'Прочие непродовольственные товары',
        servic2es1: 'Организация и оптимизация поставок из Китая, Юго-Восточной Азии и Европы.',
        servic2es2: 'Доставка в страны Центральной Азии, Азербайджан и Турцию.',
        servic3es1: 'Проверка продукции на всех этапах: от закупки до доставки.',
        servic3es2: 'Поддержка клиентов и решение оперативных задач.',
        servic4es1: 'Разработка персональных логистических схем и поставок под запрос клиента.',
        advLi1: '<span>Гибкая логистика:</span> Оптимизация сроков и маршрутов поставок.',
        advLi2: '<span>Контроль качества:</span> Продукция соответствует международным стандартам.',
        advLi3: '<span>Широкая география:</span> Работа с поставщиками и заказчиками в различных регионах мира.',
        advLi4: '<span>Надежные партнеры:</span> Сотрудничество с ведущими производителями из Китая и Юго-Восточной Азии.',
        advLi5: '<span>Индивидуальный подход:</span> Решения, адаптированные под ваши потребности.',
        ctcooo: 'ОсОО «Санат Кей Джи»',
        ctcTax: 'ИНН: 00104202110338',
        ctcLoc: 'Юридический адрес: Кыргызская Республика, город Бишкек,',
        ctcStr: 'Первомайский район, ул. Токтоналиева, 4б',
        ctcRD: 'Дата регистрации: 01.04.2021',
        ctcRN: 'Регистрационный номер: 196605-3301-ООО',
        formTitle: 'НАПИШИ НАМ',
        name: 'ИМЯ',
        message: 'СООБЩЕНИЕ',
        send: 'ОТПРАВИТЬ',
        safe: '© 2024 Sanat KG LLC. Все права защищены.',
    },
};

// contact form

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});