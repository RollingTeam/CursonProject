class Reviews{
    constructor(nombreCurso,nombreUser,comentario,fecha,calificacionCurso){
        this.nombreCurso= nombreCurso
        this.nombreUser= nombreUser
        this.comentario= comentario
        this.fecha=fecha
        this.calificacionCurso=calificacionCurso
    }
}

//Cargar array de Reviews en LocalStorage
let rev1= new Reviews("PHP Avanzado","Florencia","Me parecio un curso super interesante","6-10-2020",5);
let rev2= new Reviews("Diseño de Interior","Florencia","Me parecio un curso super interesante","6-10-2020",1);
let rev3= new Reviews("Diseño de Moda","Florencia","Me parecio un curso super interesante","6-10-2020",2);
let rev4= new Reviews("PHP Avanzado","Florencia","Me parecio un curso super interesante","6-10-2020",3);
let rev5= new Reviews("Diseño de Interior","Florencia","Me parecio un curso super interesante","6-10-2020",4);
let rev6= new Reviews("Diseño de Moda","Florencia","Me parecio un curso super interesante","6-10-2020",1);
let rev7= new Reviews("Diseño de Moda","Florencia","Me parecio un curso super interesante","6-10-2020",5);

let reviews=[]
reviews.push(rev1,rev2,rev3,rev4,rev5,rev6,rev7)
localStorage.setItem("reviews",JSON.stringify(reviews))

//Cargar Reviews en la LandingPage

cargarReviews();
//myFunction()
export function cargarReviews(){
    //Buscar en el localStorage el conjunto de Reviews almacenadas
    ordenarReviews();
    let reviewsLS = localStorage.getItem("reviews",reviews)
    let reviewsDB = JSON.parse(reviewsLS)
    reviewContainer.innerHTML=""
    for(let i=0 ; i< reviewsDB.length ; i++){
        while(i<6){
            let reviewContainer= document.getElementById("reviewContainer")
            let reviewContent=`
            <div class="col-md-4 mt-3" id="contReview">
                <div class="card card-multicolor">
                    <div class="card-body card-multicolor py-1 px-3">
                        <h6 class="card-title">${reviewsDB[i].nombreCurso}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${reviewsDB[i].comentario}</h6>
                        <p class="card-text">${reviewsDB[i].comentario}</p>
                        <span class="float-left color-rosa pr-2">By</span><span class="float-left"> ${reviewsDB[i].nombreUser}</span>
                        <span class="float-right">${reviewsDB[i].calificacionCurso}
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i></span><br>
                        <span class="float-right color-gris">${reviews[i].fecha}</span>
                    </div>
                </div>
            </div>`
            reviewContainer.innerHTML+=reviewContent
            i+=1
        }
    }
   // 
     /*reviewsDB.map(function(r){
        let reviewContainer= document.getElementById("reviewContainer")
        let reviewContent=`
        <div class="col">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">${r.nombreCurso}</h4>
                <h6 class="card-subtitle mb-2 text-muted">${r.comentario}</h6>
                <p class="card-text">
                    ${r.comentario}
                </p>
                <span class="float-left color-rosa">By</span><span class="float-left">${r.nombreUser}</span>
                <span class="float-right">${r.calificacionCurso}</span>
                </div>
            </div>
        </div>`
        reviewContainer.innerHTML+=reviewContent
    })*/
}
function ordenarReviews(){
    let reviewsDB= JSON.parse(localStorage.getItem("reviews"));
    reviewsDB.sort(function(a,b){
        return b.calificacionCurso - a.calificacionCurso
    });
    console.log(reviewsDB)
    let rev= JSON.stringify(reviewsDB)
    localStorage.setItem("reviews",rev)
}

function myFunction() {
    setInterval(function(){
    cargarReviews();
    },60000)
}

