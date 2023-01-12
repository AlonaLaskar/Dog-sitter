import Category from '../models/Category';
import DogSitter from '../models/DogSitter';
export const CATEGORIES = [
  new Category('c1','דוג סיטר','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fsitting-dog-flat-line-icon-vector-thin-sign-of-black-puppy-animal-logo-pet-shop-gm1160720703-317796435&psig=AOvVaw0kbOXzg01WOllx6wKV-s5_&ust=1672999185449000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCXzOOVsPwCFQAAAAAdAAAAABAJ'),
  new Category('c2', 'דוג ווקר','https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F01%2F70%2F11%2F76%2F360_F_170117681_nRm09hfGxLjUDoOJugXv6vFk2h5WCBgp.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddog%2Bwalker%2Blogo&tbnid=lXx8ULulimHZ6M&vet=10CAQQxiAoA2oXChMIgKK02JSw_AIVAAAAAB0AAAAAEAc..i&docid=sXf_gts0ub8tfM&w=360&h=360&itg=1&q=dogs%20walker%20logo&ved=0CAQQxiAoA2oXChMIgKK02JSw_AIVAAAAAB0AAAAAEAc'), 
  new Category('c3', 'מחפש עבודה','https://www.shutterstock.com/image-vector/job-searching-icon-260nw-1224749530.jpg'),
];

export const DOGSITTER = [
  new DogSitter(
    'DS1',
    ['c1', 'c2'],//dogSitter&dogwalker
    'דוג סיטר',
    'https://media-exp1.licdn.com/dms/image/C4D03AQEXGXkmkQyzkg/profile-displayphoto-shrink_800_800/0/1647288747201?e=1675900800&v=beta&t=GgQkdz5i2H-w0E6cBBs4_wfrAKflb5AMSWf1DwludLI',
    'אלונה לסקר',
    27.0,
    'ירושלים',
    '0526384055',
    12,
    false,
    'ירושלים והסביבה',
    true,

    ['הי לכולם שמי אלונה לסקר אני מאוד אוהבת כלבים,יש לי שפיץ יפני קטן וחברותי מאוד.',
    'ריי ואני מאוד נשמח לשמור על כלב במהלך הסוף שבוע הקרוב ',
    'אנחנו גרים באיזורבית הכרם ויש לנו מקום בלב ובבית',
    'לצערי נוכל לארח רק כלבים מהסוג שפיץ יפני',
    'זה מה שרייצוק הכי אוהב'
      
    ]   
  ),

  new DogSitter(
    'DS2',
    ['c1'],
    'דוג סיטר',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    'סתיו דוד',
    26.2,
    'מעלה אדומים',
    '0525381648',
    1,
    true,
    'מעלה אדומים ועזריה',
    true,
    [
        'היי חברים שמי סתיו יש לי ולבעלי כלב מסוג צאוצאו חמוד מאוד',
        'תמונה מאה שקלים ליום אשמור על הכלב שלכם באהבה ומסירות רבה',
        'עבור תמונות תשלחו הודעה בפרטי'
    ]
  ),

  new DogSitter(
    'DS3',
    ['c1'],
    'דוג סיטר',
    'https://www.biopet.co.il/wp-content/uploads/2017/01/unnamed-file-101.png',
    'בר דוד',
    27.3,
    'כפר סבא',
    '1700707060',
    45,
    true,
    'כפר סבא',
    false,
    [
      'אוהבת כלבים אך יותר חתולים תמיד יש אצלי ואצל בעלי עקיבא מקום בבית',
      'תשאירו אצלי את הכלבים שלכם ותאספו אותם 10 קילו יותר כי אצלנו אוכלים רק בונזו מטוגן',
      'לחתולים יש לי פינה נפרדת בלב ולכן אשמור על חתולים ללא תשלום.',
      'התשלום על יום בייביסטר לכלב הוא על סך 180 כ-ח"י שקלים כפול 10 נשמות שירדו לי במהלך השהייה של הכלב',
    ]
  ),
 
];