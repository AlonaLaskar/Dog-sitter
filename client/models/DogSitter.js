class DogSitter {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    name,
    age,
    location,
    phoneNum,
    experienceYears,
    isFree,
    serviceArea,
    hasADog,
    aboutMe
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.name=name;
    this.age=age;
    this.location =location;
    this.phoneNum=phoneNum;
    this.experienceYears=experienceYears;
    this.isFree=isFree;
    this.serviceArea=serviceArea;
    this.hasADog=hasADog;
    this.aboutMe=aboutMe;
  }
}

export default DogSitter;
