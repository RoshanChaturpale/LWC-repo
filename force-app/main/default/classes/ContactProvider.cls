public with sharing class ContactProvider {
   
    @AuraEnabled
    public static string contactCreationMethod(Contact objCon){
        try {

            if(objCon.Email.endswith('gmail.com') || objCon.Email.endswith('yahoo.com')){
            insert objCon;
            return 'Contact Record'+objCon.LastName+' and this '+objCon.Email+' Id is Inserted just now in the system';
            }else{

                return 'Locha... Something went wrong';
            }

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}