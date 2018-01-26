var ResourceApp = angular.module('ResourceApp', ['ngRoute', 'ng-fusioncharts']);

ResourceApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/browse', {
			templateUrl: 'views/browse.html'
		})
		.when('/ResourceApp/resources', {
			templateUrl: 'views/resources.html'
		})
		.when('/ResourceApp/categories', {
			templateUrl: 'views/categories.html'
		})
		.when('/ResourceApp/keywords', {
			templateUrl: 'views/keywords.html'
		})
		.when('/ResourceApp/resources_requested', {
			templateUrl: 'views/resources_requested.html'
		})
		.when('/ResourceApp/transactions', {
			templateUrl: 'views/transactions.html'
		})
		.when('/ResourceApp/orders', {
			templateUrl: 'views/orders.html'
		})
		.when('/ResourceApp/cashes', {
			templateUrl: 'views/cashes.html'
		})
		.when('/ResourceApp/credit_cards', {
			templateUrl: 'views/credit_cards.html'
		})
		.when('/ResourceApp/accounts', {
			templateUrl: 'views/accounts.html'
		})
		.when('/ResourceApp/credentials', {
			templateUrl: 'views/credentials.html'
		})
		.when('/ResourceApp/regions', {
			templateUrl: 'views/regions.html'
		})
		.when('/ResourceApp/cities', {
			templateUrl: 'views/cities.html'
		})
		.when('/ResourceApp/addresses', {
			templateUrl: 'views/addresses.html'
		})
		.when('/ResourceApp/suppliers', {
			templateUrl: 'views/suppliers.html'
		})
		.when('/ResourceApp/requesters', {
			templateUrl: 'views/requesters.html'
		})
		.when('/ResourceApp/administrators', {
			templateUrl: 'views/administrators.html'
		})
		.when('/ResourceApp/bank_accounts', {
			templateUrl: 'views/bank_accounts.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

/* JOSUE CONTROLLERS */
ResourceApp.controller('ResourceController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/resources').success(function(response) {
		$scope.resources = response.Resources;
		console.log(response);
	});

	$scope.insertResource = function() {
		$scope.formData = {
			rsname: $scope.newResource.rsname,
			rdescription: $scope.newResource.rdescription,
			r_changed_date: $scope.newResource.r_changed_date,
			rqty: $scope.newResource.rqty,
			rprice: $scope.newResource.rprice,
			r_supply_date: $scope.newResource.r_supply_date,
			sid: $scope.newResource.sid,
			cat_name: $scope.newResource.cat_name
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/resources",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Resource added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newResource.rsname = null;
		$scope.newResource.rdescription = null;
		$scope.newResource.r_changed_date = null;
		$scope.newResource.rqty = null;
		$scope.newResource.rprice = null;
		$scope.newResource.r_supply_date = null;
		$scope.newResource.sid = null;
		$scope.newResource.cat_name = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources').success(function(response) {
			$scope.resources = response.Resources;
			console.log(response);
		});
	};

	$scope.updateResource = function() {
		$scope.formData = {
			rsname: $scope.resource_to_update.rsname,
			rdescription: $scope.resource_to_update.rdescription,
			r_changed_date: $scope.resource_to_update.r_changed_date,
			rqty: $scope.resource_to_update.rqty,
			rprice: $scope.resource_to_update.rprice,
			r_supply_date: $scope.resource_to_update.r_supply_date
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/resources/" + $scope.resource_to_update.rsid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Resource updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.resource_to_update.rsid = null;
		$scope.resource_to_update.rsname = null;
		$scope.resource_to_update.rdescription = null;
		$scope.resource_to_update.r_changed_date = null;
		$scope.resource_to_update.rqty = null;
		$scope.resource_to_update.rprice = null;
		$scope.resource_to_update.r_supply_date = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources').success(function(response) {
			$scope.resources = response.Resources;
			console.log(response);
		});
	};

	$scope.deleteResource = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/resources/' + $scope.resource_to_delete.rsid).success(function(response) {
			console.log(response);
			alert("Resource deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.resource_to_delete.rsid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources').success(function(response) {
			$scope.resources = response.Resources;
			console.log(response);
		});
	};
});

ResourceApp.controller('CategoryController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/categories').success(function(response) {
		$scope.categories = response.Categories;
		console.log(response);
	});

	$scope.insertCategory = function() {
		$scope.formData = {
			cat_name: $scope.newCategory.cat_name,
			cat_pname: $scope.newCategory.cat_pname
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/categories",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Category added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newCategory.cat_name = null;
		$scope.newCategory.cat_pname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/categories').success(function(response) {
			$scope.categories = response.Categories;
			console.log(response);
		});
	};

	$scope.updateCategory = function() {
		$scope.formData = {
			cat_pname: $scope.category_to_update.cat_pname
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/categories/" + $scope.category_to_update.cat_name,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Category updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.category_to_update.cat_name = null;
		$scope.category_to_update.cat_pname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/categories').success(function(response) {
			$scope.categories = response.Categories;
			console.log(response);
		});
	};

	$scope.deleteCategory = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/categories/' + $scope.category_to_delete.cat_name).success(function(response) {
			console.log(response);
  		  	alert("Category deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.category_to_delete.cat_name = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/categories').success(function(response) {
			$scope.categories = response.Categories;
			console.log(response);
		});
	};
});

ResourceApp.controller('KeywordController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/keywords').success(function(response) {
		$scope.keywords = response.Keywords;
		console.log(response);
	});

	$scope.insertKeyword = function() {
		$scope.formData = {
			keyword: $scope.newKeyword.keyword
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/keywords",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Keyword added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newKeyword.keyword = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/keywords').success(function(response) {
			$scope.keywords = response.Keywords;
			console.log(response);
		});
	};

	$scope.updateKeyword = function() {
		$scope.formData = {
			keyword: $scope.keyword_to_update.keyword
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/keywords/" + $scope.keyword_to_update.kid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Keyword updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.keyword_to_update.kid = null;
		$scope.keyword_to_update.keyword = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/keywords').success(function(response) {
			$scope.keywords = response.Keywords;
			console.log(response);
		});
	};

	$scope.deleteKeyword = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/keywords/' + $scope.keyword_to_delete.kid).success(function(response) {
			console.log(response);
  		  	alert("Keyword deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.keyword_to_delete.kid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/keywords').success(function(response) {
			$scope.keywords = response.Keywords;
			console.log(response);
		});
	};
});

ResourceApp.controller('ResourceRequestedController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/resources_requested').success(function(response) {
		$scope.resources_requested = response.Resources_Requested;
		console.log(response);
	});

	$scope.insertResourceRequested = function() {
		$scope.formData = {
			rrqty: $scope.newRR.rrqty,
			rrname: $scope.newRR.rrname,
			rr_request_date: $scope.newRR.rr_request_date,
			rr_changed_date: $scope.newRR.rr_changed_date,
			rid: $scope.newRR.rid,
			cat_name: $scope.newRR.cat_name
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/resources_requested",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Resource Requested added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newRR.rrqty = null;
		$scope.newRR.rrname = null;
		$scope.newRR.rr_request_date = null;
		$scope.newRR.rr_changed_date = null;
		$scope.newRR.rid = null;
		$scope.newRR.cat_name = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources_requested').success(function(response) {
			$scope.resources_requested = response.Resources_Requested;
			console.log(response);
		});
	};

	$scope.updateResourceRequested = function() {
		$scope.formData = {
			rrqty: $scope.rr_to_update.rrqty,
			rrname: $scope.rr_to_update.rrname,
			rr_request_date: $scope.rr_to_update.rr_request_date,
			rr_changed_date: $scope.rr_to_update.rr_changed_date
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/resources_requested/" + $scope.rr_to_update.rrid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Resource Requested updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.rr_to_update.rrid = null;
		$scope.rr_to_update.rrqty = null;
		$scope.rr_to_update.rrname = null;
		$scope.rr_to_update.rr_request_date = null;
		$scope.rr_to_update.rr_changed_date = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources_requested').success(function(response) {
			$scope.resources_requested = response.Resources_Requested;
			console.log(response);
		});
	};

	$scope.deleteResourceRequested = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/resources_requested/' + $scope.rr_to_delete.rrid).success(function(response) {
			console.log(response);
  		  alert("Resource Requested deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.rr_to_delete.rrid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/resources_requested').success(function(response) {
			$scope.resources_requested = response.Resources_Requested;
			console.log(response);
		});
	};
});

/* ANDRES CONTROLLERS */

ResourceApp.controller('TransactionController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/transactions').success(function(response) {
		$scope.transactions = response.Transactions;
		console.log(response);
	});

	$scope.insertTransaction = function() {
		$scope.formData = {
			tprice: $scope.newTransaction.tprice,
			tqty: $scope.newTransaction.tqty,
			tdate: $scope.newTransaction.tdate,
			sid: $scope.newTransaction.sid,
			bid: $scope.newTransaction.bid,
			rsid: $scope.newTransaction.rsid,
			rid: $scope.newTransaction.rid,
			oid: $scope.newTransaction.oid,
			tstatus: $scope.newTransaction.tstatus
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/transactions",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Transaction added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newTransaction.tprice = null;
		$scope.newTransaction.tqty = null;
		$scope.newTransaction.tdate = null;
		$scope.newTransaction.sid = null;
		$scope.newTransaction.bid = null;
		$scope.newTransaction.rsid = null;
		$scope.newTransaction.rid = null;
		$scope.newTransaction.oid = null;
		$scope.newTransaction.tstatus = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/transactions').success(function(response) {
			$scope.transactions = response.Transactions;
			console.log(response);
		});
	};

	$scope.updateTransaction = function() {
		$scope.formData = {
			tprice: $scope.transaction_to_update.tprice,
			tqty: $scope.transaction_to_update.tqty,
			tdate: $scope.transaction_to_update.tdate,
			tstatus: $scope.transaction_to_update.tstatus
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/transactions/" + $scope.transaction_to_update.tid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Transaction updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.transaction_to_update.tid = null;
		$scope.transaction_to_update.tprice = null;
		$scope.transaction_to_update.tqty = null;
		$scope.transaction_to_update.tdate = null;
		$scope.transaction_to_update.tstatus = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/transactions').success(function(response) {
			$scope.transactions = response.Transactions;
			console.log(response);
		});
	};

	$scope.deleteTransaction = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/transactions/' + $scope.transaction_to_delete.tid).success(function(response) {
			console.log(response);
  		  alert("Transaction deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.transaction_to_delete.tid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/transactions').success(function(response) {
			$scope.transactions = response.Transactions;
			console.log(response);
		});
	};
});

ResourceApp.controller('OrderController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/orders').success(function(response) {
		$scope.orders = response.Orders;
		console.log(response);
	});

	$scope.insertOrder = function() {
		$scope.formData = {
			odate: $scope.newOrder.odate,
			oprice: $scope.newOrder.oprice,
			ostatus: $scope.newOrder.ostatus,
			payid: $scope.newOrder.payid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/orders",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Order added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newOrder.odate= null;
		$scope.newOrder.oprice= null;
		$scope.newOrder.ostatus= null;
		$scope.newOrder.payid= null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/orders').success(function(response) {
			$scope.orders = response.Orders;
			console.log(response);
		});
	};

	$scope.updateOrder = function() {
		$scope.formData = {
			odate: $scope.order_to_update.odate,
			oprice: $scope.order_to_update.oprice,
			ostatus: $scope.order_to_update.ostatus
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/orders/" + $scope.order_to_update.oid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Order updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.order_to_update.oid = null;
		$scope.order_to_update.odate = null;
		$scope.order_to_update.oprice = null;
		$scope.order_to_update.ostatus = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/orders').success(function(response) {
			$scope.orders = response.Orders;
			console.log(response);
		});
	};

	$scope.deleteOrder = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/orders/' + $scope.order_to_delete.oid).success(function(response) {
			console.log(response);
  		  alert("Order deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.order_to_delete.oid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/orders').success(function(response) {
			$scope.orders = response.Orders;
			console.log(response);
		});
	};
});

ResourceApp.controller('CashController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/cashes').success(function(response) {
		$scope.cashes = response.Cashes;
		console.log(response);
	});

	$scope.insertCash = function() {
		$scope.formData = {
			cashid: $scope.newCash.cashid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/cashes",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Cash added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newCash.cashid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/cashes').success(function(response) {
			$scope.cashes = response.Cashes;
			console.log(response);
		});
	};

	$scope.deleteCash = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/cashes/' + $scope.cash_to_delete.cashid).success(function(response) {
			console.log(response);
  		  alert("Cash deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.cash_to_delete.cashid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/cashes').success(function(response) {
			$scope.cashes = response.Cashes;
			console.log(response);
		});
	};
});

ResourceApp.controller('Credit_CardController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/credit_cards').success(function(response) {
		$scope.credit_cards = response.Credit_Cards;
		console.log(response);
	});

	$scope.insertCredit_Card = function() {
		$scope.formData = {
			card_number: $scope.newCredit_Card.card_number,
			security_code: $scope.newCredit_Card.security_code,
			ccname: $scope.newCredit_Card.ccname,
			exp_date: $scope.newCredit_Card.exp_date,
			rid: $scope.newCredit_Card.rid,
			addid: $scope.newCredit_Card.addid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/credit_cards",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Credit Card added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newCredit_Card.card_number = null;
		$scope.newCredit_Card.security_code = null;
		$scope.newCredit_Card.ccname = null;
		$scope.newCredit_Card.exp_date = null;
		$scope.newCredit_Card.rid = null;
		$scope.newCredit_Card.addid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credit_cards').success(function(response) {
			$scope.credit_cards = response.Credit_Cards;
			console.log(response);
		});
	};

	$scope.updateCredit_Card = function() {
		$scope.formData = {
			card_number: $scope.credit_card_to_update.card_number,
			security_code: $scope.credit_card_to_update.security_code,
			ccname: $scope.credit_card_to_update.ccname,
			exp_date: $scope.credit_card_to_update.exp_date
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/credit_cards/" + $scope.credit_card_to_update.cid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Credit Card updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.credit_card_to_update.cid = null;
		$scope.credit_card_to_update.card_number = null;
		$scope.credit_card_to_update.security_code = null;
		$scope.credit_card_to_update.ccname = null;
		$scope.credit_card_to_update.exp_date = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credit_cards').success(function(response) {
			$scope.credit_cards = response.Credit_Cards;
			console.log(response);
		});
	};

	$scope.deleteCredit_Card = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/credit_cards/' + $scope.credit_card_to_delete.cid).success(function(response) {
			console.log(response);
  		  alert("Credit Card deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.credit_card_to_delete.cid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credit_cards').success(function(response) {
			$scope.credit_cards = response.Credit_Cards;
			console.log(response);
		});
	};
});

/* YORKI CONTROLLERS */

ResourceApp.controller('AccountController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/accounts').success(function(response) {
		$scope.accounts = response.Accounts;
		console.log(response);
	});

	$scope.insertAccount = function() {
		$scope.formData = {
			afirst: $scope.newAccount.afirst,
			alast: $scope.newAccount.alast,
			email: $scope.newAccount.email,
			phone: $scope.newAccount.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/accounts",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Account added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newAccount.afirst = null;
		$scope.newAccount.alast = null;
		$scope.newAccount.email = null;
		$scope.newAccount.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/accounts').success(function(response) {
			$scope.accounts = response.Accounts;
			console.log(response);
		});
	};

	$scope.updateAccount = function() {
		$scope.formData = {
			afirst: $scope.account_to_update.afirst,
			alast: $scope.account_to_update.alast,
			email: $scope.account_to_update.email,
			phone: $scope.account_to_update.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/accounts/" + $scope.account_to_update.aid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Account updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.account_to_update.aid = null;
		$scope.account_to_update.afirst = null;
		$scope.account_to_update.alast = null;
		$scope.account_to_update.email = null;
		$scope.account_to_update.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/accounts').success(function(response) {
			$scope.accounts = response.Accounts;
			console.log(response);
		});
	};

	$scope.deleteAccount = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/accounts/' + $scope.account_to_delete.aid).success(function(response) {
			console.log(response);
  		  alert("Account deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.account_to_delete.aid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/accounts').success(function(response) {
			$scope.accounts = response.Accounts;
			console.log(response);
		});
	};
});

ResourceApp.controller('CredentialController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/credentials').success(function(response) {
		$scope.credentials = response.Credentials;
		console.log(response);
	});

	$scope.insertCredential = function() {
		$scope.formData = {
			username: $scope.newCredential.username,
			password: $scope.newCredential.password,
			aid: $scope.newCredential.aid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/credentials",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Credential added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newCredential.username = null;
		$scope.newCredential.password = null;
		$scope.newCredential.aid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credentials').success(function(response) {
			$scope.credentials = response.Credentials;
			console.log(response);
		});
	};

	$scope.updateCredential = function() {
		$scope.formData = {
			password: $scope.credential_to_update.password,
			aid: $scope.credential_to_update.aid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/credentials/" + $scope.credential_to_update.username,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Credential updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.credential_to_update.username = null;
		$scope.credential_to_update.password = null;
		$scope.credential_to_update.aid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credentials').success(function(response) {
			$scope.credentials = response.Credentials;
			console.log(response);
		});
	};

	$scope.deleteCredential = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/credentials/' + $scope.credential_to_delete.username).success(function(response) {
			console.log(response);
  		  alert("Credential deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.credential_to_delete.username = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/credentials').success(function(response) {
			$scope.credentials = response.Credentials;
			console.log(response);
		});
	};
});

ResourceApp.controller('RegionController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/regions').success(function(response) {
		$scope.regions = response.Regions;
		console.log(response);
	});

	$scope.insertRegion = function() {
		$scope.formData = {
			rname: $scope.newRegion.rname
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/regions",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Region updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newRegion.rname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/regions').success(function(response) {
			$scope.regions = response.Regions;
			console.log(response);
		});
	};

	$scope.deleteRegion = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/regions/' + $scope.region_to_delete.rname).success(function(response) {
			console.log(response);
  		  alert("Region deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.region_to_delete.rname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/regions').success(function(response) {
			$scope.regions = response.Regions;
			console.log(response);
		});
	};
});

ResourceApp.controller('CityController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/cities').success(function(response) {
		$scope.cities = response.Cities;
		console.log(response);
	});

	$scope.insertCity = function() {
		$scope.formData = {
			cname: $scope.newCity.cname,
			rname: $scope.newCity.rname
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/cities",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("City added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newCity.cname = null;
		$scope.newCity.rname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/cities').success(function(response) {
			$scope.cities = response.Cities;
			console.log(response);
		});
	};

	$scope.deleteCity = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/cities/' + $scope.city_to_delete.cname).success(function(response) {
			console.log(response);
  		  alert("City deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.city_to_delete.cname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/cities').success(function(response) {
			$scope.cities = response.Cities;
			console.log(response);
		});
	};
});

ResourceApp.controller('AddressController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/addresses').success(function(response) {
		$scope.addresses = response.Addresses;
		console.log(response);
	});

	$scope.insertAddress = function() {
		$scope.formData = {
			street: $scope.newAddress.street,
			number: $scope.newAddress.number,
			unit: $scope.newAddress.unit,
			zipcode: $scope.newAddress.zipcode,
			aid: $scope.newAddress.aid,
			cname: $scope.newAddress.cname
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/addresses",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Address added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newAddress.street = null;
		$scope.newAddress.number = null;
		$scope.newAddress.unit = null;
		$scope.newAddress.zipcode = null;
		$scope.newAddress.aid = null;
		$scope.newAddress.cname = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/addresses').success(function(response) {
			$scope.addresses = response.Addresses;
			console.log(response);
		});
	};

	$scope.updateAddress = function() {
		$scope.formData = {
			street: $scope.address_to_update.street,
			number: $scope.address_to_update.number,
			unit: $scope.address_to_update.unit,
			zipcode: $scope.address_to_update.zipcode
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/addresses/" + $scope.address_to_update.addId,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Address updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.address_to_update.addId = null;
		$scope.address_to_update.street = null;
		$scope.address_to_update.number = null;
		$scope.address_to_update.unit = null;
		$scope.address_to_update.zipcode = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/addresses').success(function(response) {
			$scope.addresses = response.Addresses;
			console.log(response);
		});
	};

	$scope.deleteAddress = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/addresses/' + $scope.address_to_delete.addId).success(function(response) {
			console.log(response);
  		  alert("Address deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.address_to_delete.addId = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/addresses').success(function(response) {
			$scope.addresses = response.Addresses;
			console.log(response);
		});
	};
});

ResourceApp.controller('SupplierController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/suppliers').success(function(response) {
		$scope.suppliers = response.Suppliers;
		console.log(response);
	});

	$scope.insertSupplier = function() {
		$scope.formData = {
			afirst: $scope.newSupplier.afirst,
			alast: $scope.newSupplier.alast,
			email: $scope.newSupplier.email,
			phone: $scope.newSupplier.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/suppliers",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Supplier added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newSupplier.afirst = null;
		$scope.newSupplier.alast = null;
		$scope.newSupplier.email = null;
		$scope.newSupplier.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/suppliers').success(function(response) {
			$scope.suppliers = response.Suppliers;
			console.log(response);
		});
	};

	$scope.updateSupplier = function() {
		$scope.formData = {
			afirst: $scope.supplier_to_update.afirst,
			alast: $scope.supplier_to_update.alast,
			email: $scope.supplier_to_update.email,
			phone: $scope.supplier_to_update.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/suppliers/" + $scope.supplier_to_update.sid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Supplier updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.supplier_to_update.sid = null;
		$scope.supplier_to_update.afirst = null;
		$scope.supplier_to_update.alast = null;
		$scope.supplier_to_update.email = null;
		$scope.supplier_to_update.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/suppliers').success(function(response) {
			$scope.suppliers = response.Suppliers;
			console.log(response);
		});
	};

	$scope.deleteSupplier = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/suppliers/' + $scope.supplier_to_delete.sid).success(function(response) {
			console.log(response);
  		  alert("Supplier deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.supplier_to_delete.sid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/suppliers').success(function(response) {
			$scope.suppliers = response.Suppliers;
			console.log(response);
		});
	};
});

ResourceApp.controller('RequesterController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/requesters').success(function(response) {
		$scope.requesters = response.Requesters;
		console.log(response);
	});

	$scope.insertRequester = function() {
		$scope.formData = {
			afirst: $scope.newRequester.afirst,
			alast: $scope.newRequester.alast,
			email: $scope.newRequester.email,
			phone: $scope.newRequester.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/requesters",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Requester added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newRequester.afirst = null;
		$scope.newRequester.alast = null;
		$scope.newRequester.email = null;
		$scope.newRequester.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/requesters').success(function(response) {
			$scope.requesters = response.Requesters;
			console.log(response);
		});
	};

	$scope.updateRequester = function() {
		$scope.formData = {
			afirst: $scope.requester_to_update.afirst,
			alast: $scope.requester_to_update.alast,
			email: $scope.requester_to_update.email,
			phone: $scope.requester_to_update.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/requesters/" + $scope.requester_to_update.rid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Requester updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.requester_to_update.rid = null;
		$scope.requester_to_update.afirst = null;
		$scope.requester_to_update.alast = null;
		$scope.requester_to_update.email = null;
		$scope.requester_to_update.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/requesters').success(function(response) {
			$scope.requesters = response.Requesters;
			console.log(response);
		});
	};

	$scope.deleteRequester = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/requesters/' + $scope.requester_to_delete.rid).success(function(response) {
			console.log(response);
  		  alert("Requester deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.requester_to_delete.rid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/requesters').success(function(response) {
			$scope.requesters = response.Requesters;
			console.log(response);
		});
	};
});

ResourceApp.controller('AdministratorController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/administrators').success(function(response) {
		$scope.administrators = response.Administrators;
		console.log(response);
	});

	$scope.insertAdministrator = function() {
		$scope.formData = {
			afirst: $scope.newAdministrator.afirst,
			alast: $scope.newAdministrator.alast,
			email: $scope.newAdministrator.email,
			phone: $scope.newAdministrator.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/administrators",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Administrator added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newAdministrator.afirst = null;
		$scope.newAdministrator.alast = null;
		$scope.newAdministrator.email = null;
		$scope.newAdministrator.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/administrators').success(function(response) {
			$scope.administrators = response.Administrators;
			console.log(response);
		});
	};

	$scope.updateAdministrator = function() {
		$scope.formData = {
			afirst: $scope.administrator_to_update.afirst,
			alast: $scope.administrator_to_update.alast,
			email: $scope.administrator_to_update.email,
			phone: $scope.administrator_to_update.phone
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/administrators/" + $scope.administrator_to_update.adminId,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Administrator updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.administrator_to_update.adminId = null;
		$scope.administrator_to_update.afirst = null;
		$scope.administrator_to_update.alast = null;
		$scope.administrator_to_update.email = null;
		$scope.administrator_to_update.phone = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/administrators').success(function(response) {
			$scope.administrators = response.Administrators;
			console.log(response);
		});
	};

	$scope.deleteAdministrator = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/administrators/' + $scope.administrator_to_delete.adminId).success(function(response) {
			console.log(response);
  		  alert("Administrator deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.administrator_to_delete.adminId = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/administrators').success(function(response) {
			$scope.administrators = response.Administrators;
			console.log(response);
		});
	};
});

ResourceApp.controller('Bank_AccountController', function($scope, $http, $httpParamSerializerJQLike) {
	$http.get('https://resource-app.herokuapp.com/ResourceApp/bank_accounts').success(function(response) {
		$scope.bank_accounts = response.Bank_Accounts;
		console.log(response);
	});

	$scope.insertBank_Account = function() {
		$scope.formData = {
			routing: $scope.newBank_Account.routing,
			accountNumber: $scope.newBank_Account.accountNumber,
			BankName: $scope.newBank_Account.BankName,
			sid: $scope.newBank_Account.sid
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/bank_accounts",
	      method: "POST",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Bank Account added successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.newBank_Account.routing = null;
		$scope.newBank_Account.accountNumber = null;
		$scope.newBank_Account.BankName = null;
		$scope.newBank_Account.sid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/bank_accounts').success(function(response) {
			$scope.bank_accounts = response.Bank_Accounts;
			console.log(response);
		});
	};

	$scope.updateBank_Account = function() {
		$scope.formData = {
			routing: $scope.bank_account_to_update.routing,
			accountNumber: $scope.bank_account_to_update.accountNumber,
			BankName: $scope.bank_account_to_update.BankName
		};

		$http({
	      url: "https://resource-app.herokuapp.com/ResourceApp/bank_accounts/" + $scope.bank_account_to_update.bid,
	      method: "PUT",
	      data: $httpParamSerializerJQLike($scope.formData),
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    }).success(function(response) {
	      console.log(response);
		  alert("Bank Account updated successfully!\n\n" + JSON.stringify(response, null, 4));
	    });

		$scope.bank_account_to_update.bid = null;
		$scope.bank_account_to_update.routing = null;
		$scope.bank_account_to_update.accountNumber = null;
		$scope.bank_account_to_update.BankName = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/bank_accounts').success(function(response) {
			$scope.bank_accounts = response.Bank_Accounts;
			console.log(response);
		});
	};

	$scope.deleteBank_Account = function() {
		$http.delete('https://resource-app.herokuapp.com/ResourceApp/bank_accounts/' + $scope.bank_account_to_delete.bid).success(function(response) {
			console.log(response);
  		  alert("Bank Account deleted successfully!\n\n" + JSON.stringify(response, null, 4));
		});

		$scope.bank_account_to_delete.bid = null;

		$http.get('https://resource-app.herokuapp.com/ResourceApp/bank_accounts').success(function(response) {
			$scope.bank_accounts = response.Bank_Accounts;
			console.log(response);
		});
	};
});
