let numberOfFilms = +prompt(`Qancha film ko'rgansiz?`)
let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
if(numberOfFilms <= 10){
    console.log(`Kurilgan kinolar soni kam`);
}else if(numberOfFilms > 10 && numberOfFilms <= 30){
    console.log(`Siz klassik tomoshabinsiz`);
}else if(numberOfFilms > 30 && numberOfFilms <= 50){
    console.log(`Siz kino ishqibozisiz`);    
}else {
    console.log(`Xatolik yuz berdi`);
}
console.log(personalMovieDB);
for (let i = 0; i < 1; i++){
    let firstQ = prompt(`Oxirgi ko'rgan filmlaringizdan biri?`);
    let secondQ = prompt(`Uni qancha baholagan bo'lardingiz?`);
    if(firstQ== null || firstQ=='' || secondQ==null || secondQ==''){
        i--;
    }else{
        personalMovieDB.movies[firstQ] = secondQ
    }
}