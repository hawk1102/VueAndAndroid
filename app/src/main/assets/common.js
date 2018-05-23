(function($) {
	$.extend({
		globalData: {
			contextPath: '',
			weibogetdevmsg: 'http://business.jr.sina.com.cn/link/syncRedirect?business=4&callback=', //测试环境http
			//			weibogetdevmsg:'https://business.jr.sina.com.cn/link/syncRedirect?business=4&callback='//线上环境https
		},
		skipUrl: {
			login: '../html/login.html', //登录
			index: '../html/index.html', //首页
			hotbrand: 'html/hotbrand.html', //从首页跳转热门品牌
			detail: '../html/shopdetail.html', //商品详情页
			indextodetail: 'html/shopdetail.html', //从首页跳转至商品详情页
			indextoshopcart: 'html/shoppingcart.html', //从首页跳转到购物车
			indextoorderlist: 'html/orderlist.html', //从首页跳转订单列表
			orderlistquerySchedule: 'html/orderlistquerySchedule.html', //进度查询单独拿出来--from  list
			orderlistquerySchedule2: '../html/orderlistquerySchedule.html', //进度查询单独拿出来--from  list
			indextomy: 'html/my.html', //从首页跳转到我的
			indextologin: 'html/login.html', //从首页跳转到登录
			indextoindex: '../index.html', //首页
			orderconfirm: '../html/confirmorder.html', //订单确认页面
			shopcart: '../html/shoppingcart.html', //购物车
			showaddress: '../html/showaddress.html', //展示收货地址
			address: '../html/address.html', //添加收货地址
			my: '../html/my.html', //我的页面
			setting: '../html/setting.html', //设置
			feedback: '../html/feedback.html', //一键反馈
			registerpro: '../html/proregister.html', //用户注册协议
			orderdetail: '../html/orderdetail.html', //订单详情页
			orderlist: '../html/orderlist.html', //订单列表(全部状态)
			logistics: '../html/logistics.html', //物流
			choicepay: '../html/choicepay.html', //选择支付方式
			addCard: '../html/addbankcard.html', //添加银行卡
			choiceCard: '../html/choicecardtwo.html', //选择银行卡
			confirmpay: '../html/confirmpay.html', //确认支付,
			paystatus: '../html/paystatus.html', //支付状态
			stagingindex: '../baitiao/#/installment', //分期支付详情
			indextobaitiao: 'baitiao/', //从商城首页跳转白条首页
			baitiaoindex: '../baitiao/', //从其他页面跳转白条首页
			baitiaopayindex: '../baitiao/#/firstpay', //支付首页
			repayment: '../html/repayment.html', //我要还款
			repaytype: '../html/repaytype.html', //我要还款还款单页
			repayway: '../html/repayway.html', //选择还款方式,
			repayakey: '../html/repayakey.html', //一键还款
			repaystatus: '../html/repaystatus.html', //还款状态
			phonelist: 'html/phonelist.html', //手机列表页
			checkphone: '../html/checkphone.html', //四要素
			baitiaochoicecard: '../baitiao/#/chosecard', //白条选择支付银行卡
			prorepay: '../baitiao/#/y_borrow_agreement/agreement2', //自动还款协议
			discount: '../html/discount.html', //优惠券
			insurance: '../html/insurance.html', //我的保险
			insurancetable: '../html/insurancetable.html', //保险详情
			aftersale: '../html/aftersale.html', //售后
			helpcenter: '../html/helpcenter.html', //帮助中心
			helpcenterhot: '../html/helpcenter-hot.html', //热门问题
			helpcentertype: '../html/helpcenter-type.html', //问题分类
			customer: '../html/customer.html', //客服
			customerWeibo: '../html/customer-weibo.html', //客服
		},
		requestUrl: {
			login: '/weibofenqi/user/loginAndRegist', //登录,
			logout: '/weibofenqi/user/logout', //退出
			verify: '/weibofenqi/sms/sendSmsCaptcha', //验证码
			indexbrand: '/weibofenqi/item/getIndexBrand', //首页品牌名称
			indexswiper: '/banner/getIndexBanner', //首页banner图
			indexcategory: '/weibofenqi/item/getIndexItemCategory', //首页商品列表
			hotbrand: '/weibofenqi/item/getItemByBrandId', //热门品牌
			indexsearch: '/weibofenqi/item/getItemByItemName', //搜索商品
			detailmsg: '/weibofenqi/item/getItemDetail', //详情页内容
			addshopcart: '/weibofenqi/shoppingCar/addItemToShoppingCar', //加入购物车
			getDefaultaddress: '/weibofenqi/shippingaddress/getDefaultAddress', //获取默认收货地址
			setDefaultaddres: '/weibofenqi/shippingaddress/defaultShippingAddress', //设置默认地址
			addshippingAddress: '/weibofenqi/shippingaddress/addShippingAddress', //添加收货地址
			updateshippingAddress: '/weibofenqi/shippingaddress/updateShippingAddress', //修改收货地址
			getshippingAddress: '/weibofenqi/shippingaddress/getShippingAddressList', //获取所有地址
			deleteShippingAddress: '/weibofenqi/shippingaddress/deleteShippingAddress', //删除地址
			getshopcartgoods: '/weibofenqi/shoppingCar/getShoppingCar', //获取购物车商品
			updateItemCount: '/weibofenqi/shoppingCar/updateItemCount', //修改购物车商品数量
			deleteItemgoods: '/weibofenqi/shoppingCar/removeItemToShoppingCar', //从购物车中删除商品
			clearshopcar: '/weibofenqi/shoppingCar/clearItemToShoppingCar', //清空购物车
			addorder: '/weibofenqi/order/addOrder', //立即购买添加订单
			shoppingCaraddorder: '/weibofenqi/shoppingCar/addOrder', //购物车添加订单
			deleteorder: '/weibofenqi/order/deleteOrder', //删除订单
			cancelorder: '/weibofenqi/order/closeOrder', //取消订单
			getorderlist: '/weibofenqi/order/getMyOrderList', //获取订单列表
			getorderDetail: '/weibofenqi/order/getMyOrderDetail', //获取订单详情
			confirmreceipt: '/weibofenqi/order/overOrder', //确认收货
			getlogistics: '/weibofenqi/express/getSFExpressRoute', //获取物流
			getuserinfo: '/weibofenqi/user/getUserBaseInfo', //获取用户信息
			saveuserinfo: '/weibofenqi/user/setUserInfo', //保存用户信息
			confirmPayOrde: '/weibofenqi/payment/confirmPayOrder', //确认订单
			confirmFirstPayOrder: '/weibofenqi/payment/confirmFirstPayOrder', //分期确认首付
			getPayOrderDetail: '/weibofenqi/payment/getPayOrderDetail', //获取订单状态
			paymentOrder: '/weibofenqi/payment/paymentOrder', //添加支付订单
			addBankCard: '/weibofenqi/bank/addBankCard', //添加银行卡
			getBankCardList: '/weibofenqi/bank/getBankCardList', //获取银行卡列表
			feedback: '/weibofenqi/evaluate/addEvaluate', //意见反馈
			getStateData: '/weibofenqi/authorizationCredit/getStateData', //获取分期支付详情
			getCurrentLoanStageReapyPlan: '/weibofenqi/authorizationCredit/getCurrentLoanStageReapyPlan', //获取还款计划表
			getCurrentLoan: '/weibofenqi/authorizationCredit/getCurrentLoan', //获取用户正在进行中的贷款
			uploadConsume: '/weibofenqi/userserver/uploadUserCertificate', //保存消费凭证
			saveConsume: '/weibofenqi/authorizationCredit/saveConsume', //保存消费凭证,
			repayLoanBill: '/weibofenqi/authorizationCredit/repayLoanBill', //手动还款
			getrepaymoney: '/weibofenqi/authorizationCredit/getCurrentLoanMoney', //获取用户本期应还金额
			checkThirdPlatformUser: '/weibofenqi/user/checkWeiboUserBindPhone', //第三方判断是否绑定手机号
			weiboUserlogin: '/weibofenqi/user/weiboUserlogin', //微博第三方登录
			bankCardAuthSendSMS: '/weibofenqi/bank/bankCardAuthSendSMS', //四要素
			checkToken: '/weibofenqi/user/checkToken', //检查token是否过期
			getInstallmentPlan: '/basedata/getInstallmentPlan', //获取月供详情
			getInsurance: '/weibofenqi/insurance/getInsurance', //获取保险详细信息
			getReturnOverOrderList: '/weibofenqi/order/getReturnOverOrderList', //售后完成
			getReturningOrderList: '/weibofenqi/order/getReturningOrderList', //售后申请中
			getAuthSwitch: '/weibofenqi/paymentLoan/getAuthSwitch', //判断进件开关
			getPersonalCard: '/weibofenqi/userserver/getUserIdCard', //获取个人身份证信息
			getRepayRecord: '/weibofenqi/authorizationCredit/getRepayRecord', //获取还款记录
			getRepayStageByRepayId: '/weibofenqi/authorizationCredit/getRepayStageByRepayId', // 还款失败原因查询
			record: '/monitor-center/api/v1/event/record', // 埋点记录
			loanRecord: '/weibofenqi/authorizationCredit/getLoanRecord', //借款记录
		},
		//农行　bk0001 || ABC     招行　bk0006 　||CMB

		nouseBank: [
			'CMB', '999999', 'bk0006', 'ABC', 'bk0001'
		],
		isTologin: function() { //判断是否需要去登录
			if(!localStorage.SESSIONID) {
				window.location.href = this.skipUrl.register;
			}
		},
		
		connectNative: function(data){
		  if(this.isiOSAndAndroid()){//ios
		    
		  }else{
		    return cashloan.jsSendMessageToNative();
		  }
		},

		doEventRecord: function(eventId, time) {
			var data = {
				"data": {},
				"event_id": eventId,
				"source": "weibo",
				"timestamp": time,
				"token": localStorage.SESSIONID,
				//"uid": "string",
				"user_id": localStorage.UserId
			};
			$.requestWhenJson($.setRequsetUrl($.requestUrl.record, true), data, function(res) {
				// 
				//console.log(res);
			}, function() {
				//
			});
		},
		/*
		 * 一键还款操作性弹窗
		 * content 弹窗内容 [element/text]
		 * btnok 确认按钮文案 [text]
		 * btncancel 取消按钮文案 [text]
		 * success 确定回调函数 [fun]
		 * fail 取消回调函数 [fun]
		 * title 弹窗标题 [text]
		 * 如果内容需要换行 自定义内容加个div <div class="customContent">自定义内容</div>
		 */
		dialogAkeyOperate: function(content, btnok, btncancel, success, fail, title) {
			content ? content = content : content = '确定删除吗？';
			btnok ? btnok = btnok : btnok = '确定';
			btncancel ? btncancel = btncancel : btncancel = '取消';
			title ? title = '<div class="art-Title">' + title + '</div>' : title = '';
			var _dialogHtml = '<div class="artDialog-container" data-ope="diglogContainer">' +
				'<div class="artDialog-contentBox akeybox">' +
				'<div class="artDialog-akeyTitle">' + title + '</div>' +
				'<div class="art-content">' + content + '</div>' +
				'<div class="art-button">' +
				'<span class="art-btnOk" data-ope="btnOk">' + btnok + '</span>' +
				'<span class="art-btnCancel" data-ope="btnCancel">' + btncancel + '</span>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $body = $('body'),
				$html = $('html'),
				$document = $(document);
			$body.append(_dialogHtml);
			$html.addClass('noscroll');
			var $diglogContainer = $('[data-ope="diglogContainer"]'),
				$btnOk = $('[data-ope="btnOk"]'),
				$btncancel = $('[data-ope="btnCancel"]');
			$document.off().on('touchmove', function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$btnOk.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$document.off('touchmove');
				if(success) {
					success();
				};
			});
			$btncancel.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$document.off('touchmove');
				if(fail) {
					fail();
				};
			});
		},
		/*
		 * 操作性弹窗
		 * content 弹窗内容 [element/text]
		 * btnok 确认按钮文案 [text]
		 * btncancel 取消按钮文案 [text]
		 * success 确定回调函数 [fun]
		 * fail 取消回调函数 [fun]
		 * title 弹窗标题 [text]
		 * 如果内容需要换行 自定义内容加个div <div class="customContent">自定义内容</div>
		 */
		dialogOperate: function(content, btnok, btncancel, success, fail, title) {
			content ? content = content : content = '确定删除吗？';
			btnok ? btnok = btnok : btnok = '确定';
			btncancel ? btncancel = btncancel : btncancel = '取消';
			title ? title = '<div class="art-Title" style="font-weight:700;">' + title + '</div>' : title = '';
			var _dialogHtml = '<div class="artDialog-container" data-ope="diglogContainer">' +
				'<div class="artDialog-contentBox">' +

				'<div class="art-content"><div class="artDialog-Title">' + title + '</div>' + content + '</div>' +
				'<div class="art-button">' +
				'<span class="art-btnOk" data-ope="btnOk">' + btnok + '</span>' +
				'<span class="art-btnCancel" data-ope="btnCancel">' + btncancel + '</span>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $body = $('body'),
				$html = $('html'),
				$document = $(document);
			$body.append(_dialogHtml);
			$html.addClass('noscroll');
			var $diglogContainer = $('[data-ope="diglogContainer"]'),
				$btnOk = $('[data-ope="btnOk"]'),
				$btncancel = $('[data-ope="btnCancel"]');
			$diglogContainer.off().on('touchmove', function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$btnOk.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$diglogContainer.off('touchmove');
				if(success) {
					success();
				};
			});
			$btncancel.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$document.off('touchmove');
				if(fail) {
					fail();
				};
			});
		},
		/*
		 * 确认型弹窗
		 * content 弹窗内容 [element/text]
		 * btn 按钮文案 [text]
		 * success 回调函数 [fun]
		 * title 标题 [text]
		 */
		dialogConfirm: function(content, btn, success, title) {
			content ? content = content : content = '确定删除吗？';
			btn ? btn = btn : btn = '确定';
			title ? title = '<div class="art-Title">' + title + '</div>' : title = '';
			var _dialogHtml = '<div class="artDialog-container" data-ope="confirmContainer">' +
				'<div class="artDialog-contentBox">' +
				'<div class="art-content"><div class="artDialog-Title">' + title + '</div>' + content + '</div>' +
				'<div class="art-button">' +
				'<span class="art-btnconfirm" data-ope="btnconfirm">' + btn + '</span>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $body = $('body'),
				$html = $('html'),
				$document = $(document);
			$body.append(_dialogHtml);
			$html.addClass('noscroll');
			var $diglogContainer = $('[data-ope="confirmContainer"]'),
				$btnconfirm = $('[data-ope="btnconfirm"]');
			$document.off().on('touchmove', function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$btnconfirm.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$document.off('touchmove');
				if(success) {
					success();
				};
			});
		},
		/*
		 * 确认型弹窗用来展示通知
		 * content 弹窗内容 [element/text]
		 * btn 按钮文案 [text]
		 * success 回调函数 [fun]
		 * title 标题 [text]
		 */
		dialogConfirmLong: function(content, btn, success, title) {
			content ? content = content : content = '确定删除吗？';
			btn ? btn = btn : btn = '确定';
			title ? title = '<div class="art-Title">' + title + '</div>' : title = '';
			var _dialogHtml = '<div class="artDialog-container" data-ope="confirmContainer">' +
				'<div class="artDialog-contentBox">' +
				'<div class="art-content confirmart"><div class="artDialog-Title">' + title + '</div>' + content + '</div>' +
				'<div class="art-button">' +
				'<span class="art-btnconfirm" data-ope="btnconfirm">' + btn + '</span>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $body = $('body'),
				$html = $('html'),
				$document = $(document);
			$body.append(_dialogHtml);
			$html.addClass('noscroll');
			var $diglogContainer = $('[data-ope="confirmContainer"]'),
				$btnconfirm = $('[data-ope="btnconfirm"]');
			$document.off().on('touchmove', function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$btnconfirm.off().on('click', function() {
				$diglogContainer.remove();
				$html.removeClass('noscroll');
				$document.off('touchmove');
				if(success) {
					success();
				};
			});
		},
		/*
		 * toast提示框
		 * content 内容 [text/element]
		 * callback 回调函数 [fun]
		 * time 默认消失事件 [ms]
		 * type 是否显示图标/切换图标 success——成功  fail——失败
		 * */
		dialogToast: function(content, type, callback, time) {
			content ? content = content : content = '操作成功';
			time ? time = time : time = 2000;
			type ? type = type : type = '';
			type == '' ? typeHtml = '' : typeHtml = '<div class="toast-icon ' + type + '"></div>';
			if($('[data-ope="toastContainer"]').length > 0) {
				return false;
			} else {
				var _toastHtml = '<div class="toast-container" data-ope="toastContainer">' +
					'<div class="toast-contentBox">' +
					typeHtml +
					'<div class="toast-content">' + content + '</div>' +
					'</div>' +
					'</div>';
				var $body = $('body');
				$body.append(_toastHtml);
				var $toastContainer = $('[data-ope="toastContainer"]');
				window.setTimeout(function() {
					$toastContainer.remove();
					if(callback) {
						callback();
					}
				}, time);
			}
		},
		/*
		 * loading提示框
		 * type 是否显示文字 [boolean] true——显示  false——不显示
		 * content 提示文字[text/element]
		 * */
		dialogLoading: function(type, content) {
			type ? type = type : type = false;
			if(type) {
				content = content ? content = '<div class="loading-content">' + content + '</div>' : content = '加载中…';
			} else {
				content = '';
			}
			var _dialogHtml = '<div class="loading-container" data-ope="loadingContainer">' +
				'<div class="loading-contentBox">' +
				'<div class="loading-pointer">' +
				'<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>' +
				'</div>' +
				content +
				'</div>' +
				'</div>';
			var $body = $('body');
			$body.append(_dialogHtml);
			var $dialogloading = $('[data-ope="loadingContainer"]');
			return $dialogloading;
		},
		dialogLogoloading: function(type, content) {
			type ? type = type : type = false;
			if(type) {
				content = content ? content = '<div class="logoloading-content">' + content + '</div>' : content = '加载中…';
			} else {
				content = '';
			}
			var _dialogHtml = '<div class="logoloading-container" data-ope="loadingContainer">' +
				'<div class="logoloading-contentBox">' +
				'<div class="logoloading-pointer"></div>' +
				content +
				'</div>' +
				'</div>';
			var $body = $('body');
			$body.append(_dialogHtml);
			var $dialogloading = $('[data-ope="loadingContainer"]');
			return $dialogloading;
		},
		btnEvent: function() {
			//给按钮添加点击事件ope-slideBtn
			$(document).on('touchstart', '[ope-slideBtn]', function() {
				if($(this).find('div').length > 0) {
					if($(this).find('div').hasClass('active')) {
						$(this).addClass('touchend');
					}
				} else {
					$(this).addClass('touchend');
				}
			})
			$(document).on('touchend', '[ope-slideBtn]', function() {
				if($(this).find('div').length > 0) {
					if($(this).find('div').hasClass('active')) {
						$(this).removeClass('touchend');
					}
				} else {
					$(this).removeClass('touchend');
				}
			})

			$('[shopdetail-slideBtn]').on({
				'touchstart': function() {

					if($(this).find('div').length > 0) {
						if($(this).find('div').hasClass('active')) {
							$(this).addClass('touchend');
						}
					} else {
						$(this).addClass('touchend');
					}
				},
				'touchend': function() {
					if($(this).find('div').length > 0) {
						if($(this).find('div').hasClass('active')) {
							$(this).removeClass('touchend');
						}
					} else {
						$(this).removeClass('touchend');
					}
				},
			})

		},
		pageGetCookie: function(c_name) {
			if(document.cookie.length > 0) {
				var mCookies = document.cookie.split(";");
				for(var i in mCookies) {
					var mCookie = mCookies[i];
					var mCookiePair = mCookie.split("=");
					if(mCookiePair.length >= 2) {
						var mCookieName = mCookiePair[0].trim();
						if(mCookieName == c_name) {
							return decodeURIComponent(mCookiePair[1]);
						}
					}
				}
			}
			return "";
		},
		pageSetCookie: function(c_name, c_value, c_time, c_domain) {
			var strsec = this.pageCookiegetsec(c_time);
			var exp = new Date();
			exp.setTime(exp.getTime() + strsec * 1);
			if(c_domain) {
				document.cookie = c_name + "=" + encodeURIComponent(c_value) + "; domain=" + c_domain + ";expires=" + exp.toGMTString() + "; path=/";
			} else {
				document.cookie = c_name + "=" + encodeURIComponent(c_value) + ";expires=" + exp.toGMTString();
			}
		},
		pageDelCookie: function(c_name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = this.pageGetCookie(c_name);
			document.cookie = c_name + "=" + cval + "; expires=" + exp.toGMTString();
		},
		pageCookiegetsec: function(str) {
			var str1 = str.substring(1, str.length) * 1;
			var str2 = str.substring(0, 1);
			if(str2 == "s") {
				return str1 * 1000;
			} else if(str2 == "h") {
				return str1 * 60 * 60 * 1000;
			} else if(str2 == "d") {
				return str1 * 24 * 60 * 60 * 1000;
			}
		},
		setToken: function() {
			return localStorage.SESSIONID || '';
		},
		requestWhen: function(requestUrl, requestData, success, fail, type, async) {
			var that = this;
			try {
				$.when(
						$.ajax({
							type: type || "post",
							url: requestUrl,
							contentType: "application/x-www-form-urlencoded; charset=UTF-8",
							async: async || true,
							headers: {
								token: this.setToken(),
								appId: 'youjieloan'
							},
							timeout: 10000,
							data: requestData || {}
						})
					)
					.done(function(res) {
						if(res.code == '40000110') {
							window.location.href = that.skipUrl.login;
						} else {
							success(res);
						}
					})
					.fail(function() {
						fail();
					});
			} catch(ex) {
				console.error('AJAX请求有误，请修正！错误代码：' + ex);
			}
		},
		requestWhenJson: function(requestUrl, requestData, success, fail, type, async) {
			var that = this;
			try {
				$.when(
						$.ajax({
							type: type || "post",
							url: requestUrl,
							contentType: "application/json; charset=UTF-8",
							async: async || true,
							headers: {
								token: this.setToken(),
								appId: 'youjieloan'
							},
							timeout: 10000,
							data: JSON.stringify(requestData) || {}
						})
					)
					.done(function(res) {
						if(res.code == '40000110') {
							window.location.replace(that.skipUrl.login);
						} else {
							success(res);
						}
					})
					.fail(function() {
						fail();
					});
			} catch(ex) {
				console.error('AJAX请求有误，请修正！错误代码：' + ex);
			}
		},
		requestAjax: function(requestUrl, requestData, token, success, fail, type, async) {
			var that = this;
			try {
				$.when(
						$.ajax({
							type: type || "post",
							url: requestUrl,
							contentType: "application/json; charset=UTF-8",
							async: async || true,
							headers: {
								token: '' + token
							},
							timeout: 10000,
							data: JSON.stringify(requestData) || {},
						})
					)
					.done(function(res) {
						success(res);
					})
					.fail(function() {
						fail();
					});
			} catch(ex) {
				console.error('AJAX请求有误，请修正！错误代码：' + ex);
			}
		},
		requestWhenCart: function(requestUrl, requestData, success, fail, type, async) {
			var that = this;
			try {
				$.when(
						$.ajax({
							type: type || "post",
							url: requestUrl,
							contentType: "application/json; charset=UTF-8",
							async: async || true,
							headers: {
								token: this.setToken(),
								appId: 'youjieloan'
							},
							timeout: 10000,
							data: JSON.stringify(requestData) || {},
						})
					)
					.done(function(res) {
						success(res);
					})
					.fail(function() {
						fail();
					});
			} catch(ex) {
				console.error('AJAX请求有误，请修正！错误代码：' + ex);
			}
		},

		// 获取借款记录
		// getLoanRecord: function(requestUrl, token, requestData, success, fail, type, async) {
		// 	var that = this;
		// 	try {
		// 		$.when(requestUrl, token, requestData, success, fail, type, async
		// 			$.ajax({
		// 				type: type || "post",
		// 				url: requestUrl,
		// 				contentType: "application/json; charset=UTF-8",
		// 				async: async || true,
		// 				headers: {
		// 					token: token,
		// 					appId: 'youjieloan'
		// 				},
		// 				timeout: 10000,
		// 				data: JSON.stringify(requestData) || {},
		// 			})
		// 		)
		// 		.done(function(res) {
		// 			success(res);
		// 		})
		// 		.fail(function() {
		// 			fail();
		// 		});
		// 	} catch(ex) {
		// 		console.error('AJAX请求有误，请修正！错误代码：' + ex);
		// 	}
		// },
		setRequsetUrl: function(url, record) {
			// var domain ='http://192.168.100.20:8888';//何申兴
			//			 var domain ='http://122.225.200.117:9999';//开发
			//			 var domain ='http://10.40.2.204:9088';//开发
						// var domain ='http://122.196.202.145:8090';//测试
			var domain = 'http://122.225.200.117:8880';
			//			var domain ='http://192.168.100.35:8080';

			var domainrecord = 'http://47.97.195.120:8999'; //埋点-李彬彬
			//   118.31.133.211:80   47.97.195.120:8999-测试
			// '......'
			//			var domain ='http://weibo-api.sinafenqi.com';//正式
			//   app-ip   122.225.200.117:8880
			if(record) {
				return domainrecord + url;
			} else {
				return domain + url;
			}

		},
		getUrlRelativePath: function() { //获取相对路径
			　　　　
			var url = document.location.toString();　　　　
			var arrUrl = url.split("//");　　　　
			var start = arrUrl[1].indexOf("/");　　　　
			var relUrl = arrUrl[1].substring(start);　　　　
			if(relUrl.indexOf("?") != -1) {　　　　　　
				relUrl = relUrl.split("?")[0];　　　　
			}　　　　
			return relUrl;　　
		},
		pageGetParam: function(pKey) {
			var queryStr = window.location.search;
			if(queryStr.length > 0) {
				var qMark = queryStr.indexOf("?");
				if(qMark >= 0) {
					queryStr = queryStr.substr(qMark + 1);
					var queryList = queryStr.split("&");
					for(var queryIndex in queryList) {
						var queryRow = queryList[queryIndex];
						var queryPair = queryRow.split("=");
						if(queryPair.length >= 2) {
							var queryKey = queryPair[0];
							if(queryKey == pKey) {
								var queryVal = decodeURIComponent(queryPair[1]);
								return queryVal;
							}
						}
					}
				}
			}
			return "";
		},
		/*
		 * 判断是android 还是ios
		 * */
		isiOSAndAndroid: function() {
			var sUserAgent = navigator.userAgent.toLowerCase(),
				// bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
				bIsIphoneOs = sUserAgent.split('-')[1] == "ios";
				// $.dialogToast(''+sUserAgent);
			if(bIsIphoneOs) {
				return true;
			} else {
				return false;
			};
		},
		/*
		 * 获取客户端版本号
		 * */
		getiosAndandroidVersion: function() {
			var sUserAgent = navigator.userAgent.toLowerCase(),
				userAgent_android = sUserAgent.indexOf("shualian/android"),
				userAgent_ios = sUserAgent.indexOf("shualian/ios"),
				appVersion = {
					ios: 0,
					android: 0
				}
			if(userAgent_android > 0 || userAgent_ios > 0) {
				var leftIndex = sUserAgent.indexOf("(bf#"),
					rightIndex = sUserAgent.indexOf("#fb)");
				if(leftIndex != -1 && rightIndex != -1) {
					var version = sUserAgent.substring(leftIndex + 4, rightIndex);
					if(userAgent_android > 0) {
						appVersion = {
							ios: 0,
							android: version
						};
					} else {
						appVersion = {
							ios: version,
							android: 0
						};
					}

				}
			}
			return appVersion;
		},
		/*
		 * 时间格式化
		 * time 时间戳  [ms]
		 * */
		timeFormate: function(time) {
			var date = new Date(time);
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			m = m < 10 ? ('0' + m) : m;
			var d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			var h = date.getHours();
			var minute = date.getMinutes();
			minute = minute < 10 ? ('0' + minute) : minute;
			return m + '-' + d + ' ' + h + ':' + minute;
		},
		countTime: function(time) {
			var date = time;
			window.setTimeout(function() {
				var startTime = Number(new Date().getTime());
				var endTime = Number(date);
				var countTime = Math.floor((endTime - startTime) / 1000);
				var hh = parseInt(countTime / 3600);
				var mm = parseInt((countTime - hh * 3600) / 60);
				var ss = parseInt((countTime - hh * 3600) % 60);
				dataObjTimer = timeope.checknumber(hh) + '小时' + timeope.checknumber(mm) + '分钟' + timeope.checknumber(ss) + '秒';
				if(startTime < endTime) {
					$(obj).html(dataObjTimer);
				} else {
					$(obj).remove();
				}
			}, 1000);
		},
		checknumber: function(num) {
			var newNum = '';
			if(num < 10) {
				newNum = '0' + num;
			} else {
				newNum = num;
			}
			return newNum;
		},
		/*是否是数字*/
		isNumber: function(obj) {
			if(this.isiOSAndAndroid()) {
				var regStrs = [
					[/^0(\d+)$/, '$1'], // 禁止录入整数部分两位以上，但首位为0
					[/[^\d\.]/g, ''], // 禁止录入任何非数字和点
					[/\.(\d?)\.+/, '.$1'], // 禁止录入两个以上的点
					[/^(\d*\.\d{2}).+/, '$1'] // 禁止录入小数点后两位以上
				];
				for(var i = 0, reg; reg = regStrs[i++];) {
					obj.value = obj.value.replace(reg[0], reg[1]);
				}
			}
		},
		/*是否是整数*/
		isInteger: function(obj) {
			if(this.isiOSAndAndroid()) {
				var regStrs = [
					[/^0(\d+)$/, '$1'], // 禁止录入整数部分两位以上，但首位为0
					[/[^\d]/g, ''] // 禁止录入任何非数字和点
				];
				for(var i = 0, reg; reg = regStrs[i++];) {
					obj.value = obj.value.replace(reg[0], reg[1]);
				}
			}
		},
		regisPhone: function(value) {
			var patrn = /^(1)\d{10}$/;
			//			var patrn=/^1(3|4|5|7|8)\d{9}$/;
			return patrn.test(value);
		},
		regisNumber: function(value) {
			//		var patrn= /^[0-9]+.?[0-9]*$/;
			var patrn = /^\d*$/;
			return patrn.test(value);
		},
		dividemoney: function(s, n) {
			n = n >= 0 && n <= 20 ? n : 2;
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
			var l = s.split(".")[0].split("").reverse(),
				r = s.split(".")[1];
			t = "";
			for(i = 0; i < l.length; i++) {
				t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
			}
			if(n == 0) {
				return t.split("").reverse().join("");
			} else {
				return t.split("").reverse().join("") + "." + r;
			}
		},
		dataObjTimers: function(payTime, obj) {
			var date = payTime;
			var that = this;
			setInterval(function() {
				var startTime = Number(new Date().getTime());
				var endTime = Number(date);
				var countTime = Math.floor((endTime - startTime));
				var hh = parseInt(countTime / 3600);
				var mm = parseInt((countTime - hh * 3600) / 60);
				var ss = parseInt((countTime - hh * 3600) % 60);
				dataObjTimer = that.checknumber(hh) + '小时' + that.checknumber(mm) + '分' + that.checknumber(ss) + '秒';
				$(obj).html(dataObjTimer);
			}, 1000);
		},
		checknumber: function(num) {
			var newNum = '';
			if(num < 10) {
				newNum = '0' + num;
			} else {
				newNum = num;
			}
			return newNum;
		},
		isCardID: function(sId) {
			var aCity = {
				11: "北京",
				12: "天津",
				13: "河北",
				14: "山西",
				15: "内蒙古",
				21: "辽宁",
				22: "吉林",
				23: "黑龙江",
				31: "上海",
				32: "江苏",
				33: "浙江",
				34: "安徽",
				35: "福建",
				36: "江西",
				37: "山东",
				41: "河南",
				42: "湖北",
				43: "湖南",
				44: "广东",
				45: "广西",
				46: "海南",
				50: "重庆",
				51: "四川",
				52: "贵州",
				53: "云南",
				54: "西藏",
				61: "陕西",
				62: "甘肃",
				63: "青海",
				64: "宁夏",
				65: "新疆",
				71: "台湾",
				81: "香港",
				82: "澳门",
				91: "国外"
			};
			var iSum = 0;
			var info = "";
			if(!/^\d{17}(\d|x)$/i.test(sId)) return false; // 你输入的身份证长度或格式错误
			sId = sId.replace(/x$/i, "a");
			if(aCity[parseInt(sId.substr(0, 2))] == null) return false; //"你的身份证地区非法"
			var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
			var d = new Date(sBirthday.replace(/-/g, "/"));
			if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return false; // "身份证上的出生日期非法"
			for(var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
			if(iSum % 11 != 1) return false; //"你输入的身份证号非法"
			//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
			return true;
		},
		isName: function(val) {
			reg = /^[\u4E00-\u9FA5]{1,10}$/;
			if(!reg.test(val)) {
				return false;
			} else {
				return true;
			}
		},
		isPhoneX: function() {
			return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
		}
	});
})(jQuery);