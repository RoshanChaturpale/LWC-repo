public with sharing class ApplicantProvider {
    @AuraEnabled
    public static list<Address__c> addressProviderMethod(Applicant__c objApp){
        try {
            
            return [Select Id, pan_card__c, pin_code__c, City__c, Country__c, State__c From Address__c Where Applicant__r.Name =: objApp.Name];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    /*@AuraEnabled
    public static list<Address__c> addressRecordShownMethod(Applicant__c objAppNew){
        try {

            return [Select Id, pan_card__c, Applicant__r.Name, pin_code__c, city__c, country__c From Address__c where Applicant__r.Name =: objAppNew.Name];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }*/
}