public class MobileVerificationAPI {
    
    @AuraEnabled
    public static void mobileVerificationMethod(Id ContactId){

        string mobileNumber = [Select id, mobilePhone From Contact where Id =: contactId].mobilePhone;

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.veriphone.io/v2/verify?phone='+mobileNumber+'&key=1167FD97AA2241C39EE61024E0083DD0');
        
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        
        system.debug('Status code ='+response.getStatusCode());
        system.debug('Body ='+response.getBody());
        
        /*MobileVerificationAPIWrapper objWrap = (MobileVerificationAPIWrapper)JSON.deserialize(response.getBody(),MobileVerificationAPIWrapper.class);
        
        system.debug('Staus code after deserilize ='+objWrap.Status);
        system.debug('Phone valid ='+objWrap.phone_valid);
        system.debug('Phone type ='+objWrap.phone_type);*/
        
        MobileVerificationAPIWrapper objWrap = new MobileVerificationAPIWrapper();
        MobileVerificationAPIWrapper objWrapInstance = objWrap.parse(response.getBody());

        system.debug('status ='+objWrapInstance.status);
        system.debug('valid? ='+objWrapInstance.phone_valid);
        
        contact objCon = new contact(id=ContactId);
        
        objCon.Mobile_Verified__c = true;

        if(objWrapInstance.phone_valid == true){
        objCon.Mobile_Active__c = true;
        objCon.Mobile_Service_Operator__c = objWrapInstance.carrier;
        }
        else{
        objCon.Mobile_Active__c = false;
        objCon.Mobile_Service_Operator__c = '';
        }

        update objCon;
    }
    
    public class MobileVerificationAPIWrapper{
	public String status;	//success
	public String phone;	//+919730237637
	public boolean phone_valid;
	public String phone_type;	//mobile
	public String phone_region;	//India
	public String country;	//India
	public String country_code;	//IN
	public String country_prefix;	//91
	public String international_number;	//+91 97302 37637
	public String local_number;	//097302 37637
	public String e164;	//+919730237637
	public String carrier;	//Airtel
	public MobileVerificationAPIWrapper parse(String json){
		return (MobileVerificationAPIWrapper) System.JSON.deserialize(json, MobileVerificationAPIWrapper.class);
	}
    

    }
}