import {load} from '@cashfreepayments/cashfree-js';
export const cashfree = await load({
	mode: "sandbox" //or production
});

export let checkoutOptions = {
	paymentSessionId: "session_rHLHJmjlBRO2gj-stV_r9AU3d_-OIdg-RwDRoyVHDg2dQaz7YhWkwuR5WtT3jr3SmueZtV-5A1VDVfnxpmCTv1NlFaBtM1X025O1Iyjg9utg",
	returnUrl: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}",
	
}
cashfree.checkout(checkoutOptions).then(function(result){
	if(result.error){
		alert(result.error.message)
	}
	if(result.redirect){
		console.log("Redirection")
	}
});
