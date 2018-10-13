class travel {
	public	name: Array<string>;
  	public	street: Array<string>;
	public	zip_code: Array<string>;
	public	image: Array<string>;

	constructor(name,street,zip_code,image){
		this.name=name;
		this.street=street;
		this.zip_code=zip_code;
		this.image=image;
	}

	Rander(){
		for(let i=0;i<this.name.length;i++){
		document.getElementById("cards").innerHTML+=`
		<div class="col-md-3 col-sm-12 mb-5">
			  <div class="card">
				  <img id="images" class="card-img-top" src="${this.image[i]}">
				<div class="card-body">
				    <h5 class="card-title">${this.street[i]}</h5>
				    <p>${this.name[i]}</p>
				    <p>${this.zip_code[i]}</p>
				    <a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		`
	}
}
};

let places= new travel(['St. Charles Church','Zoo Vienna'],['Karlsplatz 1','Maxingstraße 13b'], ['1010 Vienna','1130 Wien'],['img/img1.jpg','img/img2.jpg']);
places.Rander();

class restaurants extends travel{
	public tel: Array<number>;
	public website: Array<string>;
	public type: Array<string>;


	constructor(name,street,zip_code,image,tel,website,type){
			super(name,street,zip_code,image);
			this.tel=tel;
			this.website=website;
			this.type=type;
			
	}

	Rander(){
		for(let i=0;i<this.tel.length;i++){
		document.getElementById("cards").innerHTML+=`
			<div class="col-md-3 col-sm-12 mb-5">
			  <div class="card">
				  <img id="images" class="card-img-top" src="${this.image[i]}">
				<div class="card-body">
				    <h5 class="card-title">${this.type[i]}</h5>
				    <p>${this.street[i]}</p>
				    <p>${this.zip_code[i]}</p>
				    <p>${this.tel[i]}</p>
				    <a href="${this.website}" class="btn btn-primary">visit our websit</a>
				</div>
			</div>
		</div>
		`
	}
}
};

let restaurant= new restaurants([' ',' '],['Kettenbrückengasse 19','Schönbrunner Straße 21'],['1050 Vienna','1050 Wien'],['img/img3.png','img/img4.png'],['+43(1)5812308','+43 1 58 528 56 l +43 ,1 58 528 56'],['www.lemonleaf.at','http://www.sixta-restaurant.at/'],['Lemon Leaf Thai Restaurant','SIXTA']);
restaurant.Rander();

class events extends travel{
	public event_date:Array<string>;
	public event_time:Array<number>;
	public tickt_price:Array<string>;
	public website:Array<string>;

	constructor(name,street,zip_code,image,event_date,event_time,tickt_price,website){
		super(name,street,zip_code,image);
		this.event_date=event_date;
		this.event_time=event_time;
		this.tickt_price=tickt_price;
		this.website=website;


	}

	Rander(){
		for(let i=0;i<this.event_date.length;i++){
		document.getElementById("cards").innerHTML+=`
			<div class="col-md-3 col-sm-12 mb-5">
			  <div class="card">
				  <img id="images" class="card-img-top" src="${this.image[i]}">
				<div class="card-body">
				    <h5 class="card-title">${this.name[i]}</h5>
				    <p>${this.street[i]}</p>
				    <p>${this.zip_code[i]}</p>
				    <p>${this.event_date[i]}</p>
				    <p>${this.event_time[i]}</p>
				    <p>${this.tickt_price[i]}</p>
				    <a href="${this.website}" class="btn btn-primary">visit our websit</a>
				</div>
			</div>
		</div>
		`
	}
}
};

let Event1 = new events(['Kris Kristofferson','Lenny Kravitz'],['Wiener Stadthalle, Halle F, Roland Rainer Platz 1','Wiener Stadthalle - Halle D, Roland Rainer Platz 1'],['1150 Wien','1150 Wien'],['img/img5.jpg','img/img6.jpg'],['Fri, 15. Jun.','Sat, 09.06.2018'],['20:00','19:30'],['€58,50 EUR','€ 47,80'],['http://kriskristofferson.com/','www.lennykravitz.com/']);

Event1.Rander();