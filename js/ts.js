var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var travel = /** @class */ (function () {
    function travel(name, street, zip_code, image) {
        this.name = name;
        this.street = street;
        this.zip_code = zip_code;
        this.image = image;
    }
    travel.prototype.Rander = function () {
        for (var i = 0; i < this.name.length; i++) {
            document.getElementById("cards").innerHTML += "\n\t\t<div class=\"col-md-3 col-sm-12 mb-5\">\n\t\t\t  <div class=\"card\">\n\t\t\t\t  <img id=\"images\" class=\"card-img-top\" src=\"" + this.image[i] + "\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.street[i] + "</h5>\n\t\t\t\t    <p>" + this.name[i] + "</p>\n\t\t\t\t    <p>" + this.zip_code[i] + "</p>\n\t\t\t\t    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
        }
    };
    return travel;
}());
;
var places = new travel(['St. Charles Church', 'Zoo Vienna'], ['Karlsplatz 1', 'Maxingstraße 13b'], ['1010 Vienna', '1130 Wien'], ['img/img1.jpg', 'img/img2.jpg']);
places.Rander();
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(name, street, zip_code, image, tel, website, type) {
        var _this = _super.call(this, name, street, zip_code, image) || this;
        _this.tel = tel;
        _this.website = website;
        _this.type = type;
        return _this;
    }
    restaurants.prototype.Rander = function () {
        for (var i = 0; i < this.tel.length; i++) {
            document.getElementById("cards").innerHTML += "\n\t\t\t<div class=\"col-md-3 col-sm-12 mb-5\">\n\t\t\t  <div class=\"card\">\n\t\t\t\t  <img id=\"images\" class=\"card-img-top\" src=\"" + this.image[i] + "\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.type[i] + "</h5>\n\t\t\t\t    <p>" + this.street[i] + "</p>\n\t\t\t\t    <p>" + this.zip_code[i] + "</p>\n\t\t\t\t    <p>" + this.tel[i] + "</p>\n\t\t\t\t    <a href=\"" + this.website + "\" class=\"btn btn-primary\">visit our websit</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
        }
    };
    return restaurants;
}(travel));
;
var restaurant = new restaurants([' ', ' '], ['Kettenbrückengasse 19', 'Schönbrunner Straße 21'], ['1050 Vienna', '1050 Wien'], ['img/img3.png', 'img/img4.png'], ['+43(1)5812308', '+43 1 58 528 56 l +43 ,1 58 528 56'], ['www.lemonleaf.at', 'http://www.sixta-restaurant.at/'], ['Lemon Leaf Thai Restaurant', 'SIXTA']);
restaurant.Rander();
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, street, zip_code, image, event_date, event_time, tickt_price, website) {
        var _this = _super.call(this, name, street, zip_code, image) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.tickt_price = tickt_price;
        _this.website = website;
        return _this;
    }
    events.prototype.Rander = function () {
        for (var i = 0; i < this.event_date.length; i++) {
            document.getElementById("cards").innerHTML += "\n\t\t\t<div class=\"col-md-3 col-sm-12 mb-5\">\n\t\t\t  <div class=\"card\">\n\t\t\t\t  <img id=\"images\" class=\"card-img-top\" src=\"" + this.image[i] + "\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.name[i] + "</h5>\n\t\t\t\t    <p>" + this.street[i] + "</p>\n\t\t\t\t    <p>" + this.zip_code[i] + "</p>\n\t\t\t\t    <p>" + this.event_date[i] + "</p>\n\t\t\t\t    <p>" + this.event_time[i] + "</p>\n\t\t\t\t    <p>" + this.tickt_price[i] + "</p>\n\t\t\t\t    <a href=\"" + this.website + "\" class=\"btn btn-primary\">visit our websit</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
        }
    };
    return events;
}(travel));
;
var Event1 = new events(['Kris Kristofferson', 'Lenny Kravitz'], ['Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1'], ['1150 Wien', '1150 Wien'], ['img/img5.jpg', 'img/img6.jpg'], ['Fri, 15. Jun.', 'Sat, 09.06.2018'], ['20:00', '19:30'], ['€58,50 EUR', '€ 47,80'], ['http://kriskristofferson.com/', 'www.lennykravitz.com/']);
Event1.Rander();
