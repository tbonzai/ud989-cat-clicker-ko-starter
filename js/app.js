var CatList = [
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: '',
		nicknames: ['Predator', 'Stalker']
	},
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: '',
		nicknames: ['Fluffy', 'Yo Mamma']
	},
	{
		clickCount: 0,
		name: 'Joel Twin',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: '',
		nicknames: ['Old Yeller', 'Old Man']
	},
	{
		clickCount: 0,
		name: 'Ugly',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: '',
		nicknames: ['Mr. Mean','Unphotogenic']
	},
	{
		clickCount: 0,
		name: 'Lazy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: '',
		nicknames: ['Sleepy','Whatever']
	}
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return 'Newborn';
		} else if (this.clickCount() < 50) {
			return 'Infant';
		} else if (this.clickCount() < 100) {
			return 'Child';
		} else if (this.clickCount() < 200) {
			return 'Teen';
		} else if (this.clickCount() < 500) {
			return 'Adult';
		} else {
			return 'Ninja';
		}
	}, this);

};

var ViewModel = function() {
	var self = this;

	this.catlist = ko.observableArray([]);

	CatList.forEach(function(catItem) {
		self.catlist.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catlist()[0])

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.changeCat = function(catObject) {
		self.currentCat(catObject);
	}

}

ko.applyBindings(new ViewModel());