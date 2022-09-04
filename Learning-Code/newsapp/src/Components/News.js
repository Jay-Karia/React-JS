import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles =  [
    {
    "source": {
    "id": "wirtschafts-woche",
    "name": "Wirtschafts Woche"
    },
    "author": "Philipp Frohn",
    "title": "Thelen, Diekmann & Co.: Die durchwachsene Bilanz der Promifonds",
    "description": "Vor einem Jahr ging Frank Thelen mit seinem Techfonds 10xDNA an den Start – und enttäuscht seither Anleger. Auch andere Promi-Fonds offenbaren Ertragsprobleme.",
    "url": "https://www.wiwo.de/my/finanzen/geldanlage/geldanlage-mit-promifaktor-thelen-diekmann-und-co-die-durchwachsene-bilanz-der-promifonds/28645254.html",
    "urlToImage": "https://www.wiwo.de/images/promifonds/28653448/3-format11240.jpg",
    "publishedAt": "2022-09-04T15:15:59+00:00",
    "content": "Für Nachrichtenseiten wie WirtschaftsWoche Online sind Anzeigen eine wichtige Einnahmequelle. Mit den Werbeerlösen können wir die Arbeit unserer Redaktion bezahlen und Qualitätsartikel kostenfrei ver… [+173 chars]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Alana Mastrangelo",
    "title": "Libs of TikTok Takes on Big Tech: 'If Twitter Permanently Bans Me, I'll Sue Them'",
    "description": "Chaya Raichik, the woman behind the popular Twitter account Libs of TikTok, known for exposing the outrageous behavior of radical leftists, says she will sue the social media platform if it permanently bans her. Raichik promised a legal war against the far-le…",
    "url": "https://www.breitbart.com/tech/2022/09/04/libs-of-tiktok-takes-on-big-tech-if-twitter-permanently-bans-me-ill-sue-them/",
    "urlToImage": "https://media.breitbart.com/media/2022/07/Twitter-CEO-Parag-Agrawal-640x335.jpg",
    "publishedAt": "2022-09-04T15:03:16Z",
    "content": "Chaya Raichik, the woman behind the popular Twitter account Libs of TikTok, known for exposing the outrageous behavior of radical leftists, says she will sue the social media platform if it permanent… [+2487 chars]"
    },
    {
    "source": {
    "id": "google-news-uk",
    "name": "Google News (UK)"
    },
    "author": "Ben Perrin",
    "title": "Picture of biker killed as family reveal what he would be saying 'Don’t cry'",
    "description": "Damian Demkowski, 33, was killed after a smash with a car on Station Road, Stechford, on August 19",
    "url": "https://www.birminghammail.co.uk/news/midlands-news/first-picture-biker-killed-city-24926478",
    "urlToImage": "https://i2-prod.birminghammail.co.uk/incoming/article24926384.ece/ALTERNATES/s1200/0_dam1PNG.png",
    "publishedAt": "2022-09-04T11:57:06+00:00",
    "content": "The family of a biker killed in a tragic crash has revealed what he would be telling them. Damian Demkowski has been named by police as the motorcyclist who died in the city last month.\r\n The 33-year… [+1592 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Caroline O'Donovan",
    "title": "Amazon Care is dead, but the tech giant’s health-care ambitions live on",
    "description": "After the sudden shutdown of its ambitious telemedicine experiment, the company continues to explore options for a major expansion into the health industry.",
    "url": "https://www.washingtonpost.com/technology/2022/09/04/amazon-care-health-one-medical/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MAJ54WBJN4I63KIK7TSACXP4R4.jpg&w=1440",
    "publishedAt": "2022-09-04T10:00:43Z",
    "content": "Comment on this story\r\nLate last month, staffers at Amazon Care the companys in-person and virtual primary care service were called into a meeting and given bad news: Amazon was shutting it down. Som… [+11504 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Mary Beth Griggs, Emma Roth",
    "title": "NASA’s Artemis I mission is delayed even further",
    "description": "After technical difficulties disrupted NASA’s Artemis I mission twice, its Space Launch System (SLS) rocket will not launch this week.",
    "url": "https://www.theverge.com/2022/9/3/23335684/nasa-sls-roll-back-launch-delay-artemis",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/Eq00VZkwzWWkqxQsocek0vtgQrI=/0x103:2040x1171/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23326746/lgrush_220317_5079_0015.jpg",
    "publishedAt": "2022-09-03T22:13:52Z",
    "content": "Engineers are working through their options for the SLS rocket\r\nNASAs SLS rocket rolling out to the launchpad from the Vehicle Assembly Building in March. \r\nPhoto by Loren Grush / The Verge\r\nNASA wil… [+3641 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Greg Kumparak",
    "title": "Apple readies its next iPhone, Joe Rogan interviews Zuck, and Twitter purportedly pauses plans to compete with OnlyFans",
    "description": "Hello again! Welcome back to Week in Review, the newsletter where we quickly recap the last week’s worth of TechCrunch’s most read posts. Want it in your inbox every Saturday morning? Sign up here. Ready? Let’s just dive right in. most read What to expect fro…",
    "url": "https://techcrunch.com/2022/09/03/apple-readies-its-next-iphone-joe-rogan-interviews-zuck-and-twitter-purportedly-pauses-plans-to-compete-with-onlyfans/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/Screenshot-2022-08-24-at-12.00.27-PM.jpg?w=764",
    "publishedAt": "2022-09-03T20:16:02Z",
    "content": "Hello again! Welcome back to Week in Review, the newsletter where we quickly recap the last week’s worth of TechCrunch’s most read posts. Want it in your inbox every Saturday morning? Sign up here.\r\n… [+3568 chars]"
    },
    {
    "source": {
    "id": "techradar",
    "name": "TechRadar"
    },
    "author": null,
    "title": "Meet the best tech from IFA 2022 – here are our award winners",
    "description": "The 10 top products we saw on the IFA 2022 show floor",
    "url": "https://www.techradar.com/features/meet-the-best-tech-from-ifa-2022-here-are-our-award-winners",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/w6Uy2pLBFbKjYwS5dNYnaN-1200-80.jpeg",
    "publishedAt": "2022-09-03T18:57:21Z",
    "content": "The TechRadar team has spent the last few days wearing away the soles of our feet by trekking around the halls of IFA 2022, looking for the smartest, most innovative and highest quality new tech rele… [+12467 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Jaclyn Trop",
    "title": "Aston Martin is finally upgrading its stale infotainment system",
    "description": "When it comes to touchscreens and in-car entertainment, Aston Martin has not only lagged behind ultra-luxury rivals and Lamborghini and Bentley, it has trailed lower priced tech-forward models as well. Now, the automaker is preparing to catch up with a modern…",
    "url": "https://techcrunch.com/2022/09/03/aston-martin-is-finally-upgrading-its-stale-infotainment-system/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/aston-martin-dbx-hyper-red-a1-aml-202-jpg..jpg?w=600",
    "publishedAt": "2022-09-03T16:00:20Z",
    "content": "When it comes to touchscreens and in-car entertainment, Aston Martin has not only lagged behind ultra-luxury rivals and Lamborghini and Bentley, it has trailed lower priced tech-forward models as wel… [+4749 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "Indian agency searches fintech Paytm, Razorpay and Cashfree offices in Chinese loan apps probe",
    "description": "India’s financial crime fighting agency searched the offices of fintech unicorns Paytm and Razorpay as well as Cashfree on Friday as part of an ongoing investigation into fraudulent Chinese loan apps, it said Saturday, the latest in a series of probes in rece…",
    "url": "https://techcrunch.com/2022/09/03/indian-agency-searches-fintech-paytm-razorpay-and-cashfree-offices-in-chinese-loan-apps-probe/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-923835828.jpg?w=640",
    "publishedAt": "2022-09-03T10:42:51Z",
    "content": "India’s financial crime fighting agency searched the offices of fintech unicorns Paytm and Razorpay as well as Cashfree on Friday as part of an ongoing investigation into fraudulent Chinese loan apps… [+2559 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kirsten Korosec",
    "title": "In leaked memo, Aurora CEO weighs spinouts, layoffs and acquisitions against sale to big tech",
    "description": "Aurora has a \"cash runway\" that will allow it to continue operations through mid-2024, according to its second-quarter letter to shareholders.",
    "url": "https://techcrunch.com/2022/09/02/in-leaked-memo-aurora-ceo-weighs-spinouts-layoffs-and-acquisitions-against-sale-to-big-tech/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/IMG_2495.jpg?w=533",
    "publishedAt": "2022-09-02T23:16:08Z",
    "content": "The chief executive of autonomous vehicle developer Aurora Innovation presented a swath of cost-cutting and cash-generating options to its board, ranging from a hiring freeze and spinning out assets … [+7264 chars]"
    },
    {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Ioanna Lykiardopoulou",
    "title": "Researchers train AI to predict EV battery degradation",
    "description": "Lithium-ion batteries have become a key component in the rise of electric mobility, but forecasting their health and lifespans is limiting the technology.\r\n\r\nWhile they've proven successful, ...",
    "url": "http://thenextweb.com/news/researchers-train-ai-predict-ev-battery-degradation",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/shift?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F09%2FUntitled-design-95.jpg&signature=88e8395624ea78e8d593bb91359998cc",
    "publishedAt": "2022-09-02T18:31:15Z",
    "content": "Lithium-ion batteries have become a key component in the rise of electric mobility, but forecasting their health and lifespans is limiting the technology.\r\nWhile theyve proven successful, the capacit… [+3454 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "https://www.engadget.com/about/editors/valentina-palladino",
    "title": "Introducing Engadget’s 2022 back to school gift guide! | Engadget",
    "description": "Engadget's 2022 back to school gift guide includes the best tech for college students, including recommendations for laptops, backpacks, accessories and more..",
    "url": "https://www.engadget.com/introducing-engadgets-2022-back-to-school-gift-guide-160024491.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/21352af0-f7d5-11ec-b2bf-fff85be9c5fb",
    "publishedAt": "2022-09-02T12:07:19.6289525Z",
    "content": "It may be too early for you to think about the upcoming school year, but it cant hurt to get a jump-start on planning. We dont mean to take away from the myriad beach days and barbecues you have plan… [+1414 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Wired",
    "title": "Y Combinator, Silicon Valley’s Most Powerful ‘Mafia,’ Gets a New Boss",
    "description": "The startup incubator birthed big names like Airbnb and Stripe. Incoming CEO Garry Tan says he’ll tap the program’s alumni network to generate new tech giants.",
    "url": "https://www.wired.com/story/silicon-valleys-most-powerful-mafia-gets-a-new-boss",
    "urlToImage": "https://media.wired.com/photos/63111628f64c675d6d1a5121/191:100/w_1280,c_limit/Garry-Tan-YCombinator-Business-R0MKB3.jpg",
    "publishedAt": "2022-09-02T11:00:00Z",
    "content": "The power of Y Combinator has always been its network. The legendary Silicon Valley startup accelerator is known for smelting mere ideas into some of the most successful companies in technology, incl… [+2756 chars]"
    },
    {
    "source": {
    "id": "gruenderszene",
    "name": "Gruenderszene"
    },
    "author": null,
    "title": "45 Millionen Euro nur ein Jahr nach Gründung: Das ist das aktuelle Pitchdeck von Topi",
    "description": "Hardware-Subscriptions: So erweiterte Topi sein Angebot und erhielt 45 Millionen von Investoren. Hier seht ihr das Pitchdeck des Fintechs.",
    "url": "https://www.businessinsider.de/gruenderszene/fintech/topi-pitchdeck-zur-45-millionen-runde-des-berliner-startups/",
    "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/08/Topi-gruenderinnen-pallua-merle-scaled-e1661858536481.jpg?ver=1661858539",
    "publishedAt": "2022-09-02T09:45:43+00:00",
    "content": "Hardware-Subscriptions: So erweiterte Topi sein Angebot und erhielt weitere 45 Millionen von Investoren. Hier seht ihr das Pitchdeck des Berliner Fintechs.\r\nVon einer Art B2B-Klarna zum Anbieter von … [+1487 chars]"
    },
    {
    "source": {
    "id": "le-monde",
    "name": "Le Monde"
    },
    "author": "Alexandre Piquard",
    "title": "Sous pression, Snapchat est contraint de licencier 1 200 personnes",
    "description": "Cette réduction de 20 % des effectifs reflète les récentes difficultés rencontrées par le réseau social, et plus largement par plusieurs étoiles pâlissantes de la high-tech américaine.",
    "url": "https://www.lemonde.fr/economie/article/2022/08/31/sous-pression-snapchat-est-contraint-de-licencier-1-200-personnes_6139713_3234.html",
    "urlToImage": "https://img.lemde.fr/2022/08/30/141/0/3500/2333/1440/960/60/0/d6391e5_fw1-snap-layoffs-0830-1a.jpg",
    "publishedAt": "2022-08-31T18:42:34Z",
    "content": "Un plan social de 1 200 personnes, soit 20 % des effectifs. Ce genre dannonce est inhabituel dans le secteur du numérique. Cest pourtant la mesure qua officialisée Snap mercredi 31 août. « Il est dev… [+3224 chars]"
    },
    {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Tristan Greene",
    "title": "Counterpoint: AI is far more dangerous than quantum computing",
    "description": "Vivek Wadhwa and Mauritz Kop recently penned an op-ed urging governments around the world to get ahead of the threat posed by the emerging technology known as quantum computing. They ...",
    "url": "http://thenextweb.com/news/counterpoint-ai-far-more-dangerous-than-quantum-computing",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/neural?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2Fscaredrobot.jpg&signature=33af3f0f76c643a35c6038c920c40200",
    "publishedAt": "2022-08-25T19:35:06Z",
    "content": "Vivek Wadhwa and Mauritz Kop recently penned an op-ed urging governments around the world to get ahead of the threat posed by the emerging technology known as quantum computing. They even went so far… [+6757 chars]"
    },
    {
    "source": {
    "id": "techradar",
    "name": "TechRadar"
    },
    "author": "Matt Hanson",
    "title": "IFA 2022: all the latest news from the huge tech show",
    "description": "IFA is back, and we're there",
    "url": "https://www.techradar.com/news/ifa-2022",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/Pjr4Kf777oCoaPRCYagdve-1200-80.jpg",
    "publishedAt": "2022-08-05T15:38:43Z",
    "content": "IFA 2022 officially starts for the general public on September 2 in Berlin, Germany, but there are early press days before the event that allows the media - like us - to get a glimpse of the new tech… [+10139 chars]"
    },
    {
    "source": {
    "id": "recode",
    "name": "Recode"
    },
    "author": "Jason Del Rey",
    "title": "Leaked internal memo reveals Amazon’s anti-union strategies",
    "description": "Inside the tech giant’s plan to neutralize one of America’s most powerful unions.",
    "url": "https://www.vox.com/recode/23282640/leaked-internal-memo-reveals-amazons-anti-union-strategies-teamsters",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/zRomhFa6e4Lu7KR4D11YSmmRKcE=/0x200:2800x1666/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23908023/GettyImages_1231889284.jpg",
    "publishedAt": "2022-07-29T10:00:00Z",
    "content": "In June 2021, the International Brotherhood of Teamsters, one of the most powerful unions in the world, published a special resolution about Amazon, labeling the tech giant an existential threat and … [+16131 chars]"
    },
    {
    "source": {
    "id": "t3n",
    "name": "T3n"
    },
    "author": "Jörn Brien",
    "title": "Quantenakku soll E-Autos in Sekunden voll laden können",
    "description": "Akkus von E-Autos könnten dank Quantentechnologie künftig in Sekunden statt in Stunden geladen werden – wie je",
    "url": "https://t3n.de/news/quantenakku-e-auto-schnell-laden-1461272/",
    "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/03/E-Auto-Quantenakku-Schnellladen.jpg",
    "publishedAt": "2022-03-24T13:45:54Z",
    "content": "Der Begriff Schnellladestation könnte mit Quantentechnologie eine neue Dimension bekommen. Quantenakkus gelten als vielversprechend für hohe Ladegeschwindigkeiten und die Speicherung von Energie  bis… [+2018 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": null,
    "title": "Brand Loyalty Revolution by Oracle Advertising and CX",
    "description": "How technology is changing the customer relationship game",
    "url": "https://www.newsweek.com/sponsored/brand-loyalty-revolution-oracle-advertising-cx",
    "urlToImage": "https://d.newsweek.com/en/full/1987118/oracle-advertising-cx-sq.jpg",
    "publishedAt": "2022-02-16T19:17:44Z",
    "content": "Brand Loyalty Revolution\r\nIn a world of more choice and increased consumer spending, brands are using creative solutions to grab customers' attention and keep them engaged. While shoppers seek out co… [+467 chars]"
    }
    ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsExplorer Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((e) => {
              return <div className="col-md-4">
                <NewsItem
                  title={e.title}
                  description={e.description}
                  url={e.urlToImage}
                  newsURL= {e.url}
                />
              </div>;
            })}
          </div>
          ;
        </div>
      </>
    );
  }
}
