import Category from '../models/Category';
import DogSitter from '../models/DogSitter';
export const CATEGORIES = [
  new Category('c1','דוג סיטר','https://i.pinimg.com/736x/b5/ac/cc/b5accc73715f9e92eb53b14d8cb96cf8.jpg'),
  new Category('c2', 'דוג ווקר','https://i.pinimg.com/564x/a7/3d/c2/a73dc27fc4e933d073f8f13bf941ea60.jpg'), 
  new Category('c3', 'מחפש עבודה','https://www.shutterstock.com/image-vector/job-searching-icon-260nw-1224749530.jpg'),
];

export const DOGSITTER = [
  new DogSitter(
    'DS1',
    ['c1', 'c2'],//dogSitter&dogwalker
    'דוג סיטר',
    'https://www.google.com/search?q=ALOMA+LASKAR&sxsrf=AJOqlzV3rq4nVg8PHeZT9WEu1bLGmy_mKw:1676882358144&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV6qXK2aP9AhUG7aQKHYWKAu8Q_AUoAXoECAEQAw&biw=1422&bih=641&dpr=1.35#imgrc=X8TClzDDpRcJhM',
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