import { LightningElement,api,track} from 'lwc';
import SURVEY_LOGO from "@salesforce/resourceUrl/casecsatlogo";
import OBJECT_NAME from "@salesforce/schema/Case";
import FIRST_PART_QUESTION from "@salesforce/schema/Case.how_much_like_aceldata_customer_support__c";
import SECOND_PART_QUESTION from "@salesforce/schema/Case.Acceldata_made_it_easy_for_me_to_handle__c";
import SECOND_PART_SECOND_QUESTION from "@salesforce/schema/Case.On_Time_Response_Next_Action_Plan__c";
import THIRD_PART_QUESTION from "@salesforce/schema/Case.Rate_of_Satisfaction_form_Support_Agent__c";
import SURVEY_SUBMITTED_FIELD from "@salesforce/schema/Case.Survey_Submitted__c";


export default class CaseFeedBackRatingNewTemplateLWC extends LightningElement {
@api recordId;
objectApiName=OBJECT_NAME;
acceldatalogo=SURVEY_LOGO;
//variables to check if first part button is selected
  isSelected=false;
 isSelectedOne=false;
  isSelectedTwo=false;
  isSelectedThree=false;
 isSelectedFour=false;
   isSelectedFive=false;
  isSelectedSix=false;
  isSelectedSeven=false;
   isSelectedEight=false;
 isSelectedNine=false;
  isSelectedTen=false;
  //variables to check last part buttons are selected
  isSelectedOverallOne=false;
  isSelectedOverallTwo=false;
  isSelectedOverallThree=false;
 isSelectedOverallFour=false;
 //variables to check if checkboxes are disabled
  isDisabledRowOneFirst=false;
  isDisabledRowOneSecond=false;
 isDisabledRowTwoFirst=false;
 isDisabledRowTwoSecond=false;
  isDisabledRowOneThird=false;
  isDisabledRowTwoThird=false;
 isDisabledRowOneFourth=false;
isDisabledRowTwoFourth=false;
//input field label for record edit form
 firstPartQuestionLabel=FIRST_PART_QUESTION ;
secondPartQuestionLabel=SECOND_PART_QUESTION;
 secondPartSecondQuestionLabel=SECOND_PART_SECOND_QUESTION;
thirdPartQuestionLabel=THIRD_PART_QUESTION ;
surveySubmittedLabel=SURVEY_SUBMITTED_FIELD;
//variables to hold record edit form input field values
firstPartQuestionValueNewM;
thirdPartQuestionValueNewM;
secondPartQuestionValueNewM;
secondPartSecondQuestionValueNewM;
surveySubmittedCheckboxValueNewM=true; 
renderCaseCsatCardFieldNewM=true;

 //functions to handle number button clicks
handleClick(){
    
    
    

    this.isSelectedTen=false;
    this.isSelectedOne=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelected=!this.isSelected;
    this.firstPartQuestionValueNewM=0;
    


}
handleClickOne(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedOne=!this.isSelectedOne;
    this.firstPartQuestionValueNewM=1;

   
   }
handleClickTwo(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedOne=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedTwo=!this.isSelectedTwo;
    this.firstPartQuestionValueNewM=2;

   }
handleClickThree(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedOne=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedThree=!this.isSelectedThree;
    this.firstPartQuestionValueNewM=3;
 
    }
handleClickFour(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedOne=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedFour=!this.isSelectedFour;
    this.firstPartQuestionValueNewM=4;

   }
handleClickFive(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedOne=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedFive=!this.isSelectedFive;
    this.firstPartQuestionValueNewM=5;
  
    }
 handleClickSix(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedOne=false;
    this.isSelectedSeven=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedSix=!this.isSelectedSix;
    this.firstPartQuestionValueNewM=6;
   
   
   }
handleClickSeven(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedOne=false;
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedSeven=!this.isSelectedSeven;
    this.firstPartQuestionValueNewM=7;


   
   }
handleClickEight(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedSeven=false;
    this.isSelectedOne=false;
    this.isSelectedNine=false;
    this.isSelectedEight=!this.isSelectedEight;
    this.firstPartQuestionValueNewM=8;
 
   
   }
handleClickNine(){
    this.isSelectedTen=false;
    this.isSelected=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    this.isSelectedOne=false;
    this.isSelectedEight=false;
 
    this.isSelectedSeven=false;
    this.isSelectedNine=!this.isSelectedNine;
    this.firstPartQuestionValueNewM=9;
  
   
   }
handleClickTen(){
    this.isSelected=false;
    this.isSelectedOne=false;
    this.isSelectedTwo=false;
    this.isSelectedThree=false;
    this.isSelectedFour=false;
    this.isSelectedFive=false;
    this.isSelectedSix=false;
    
    this.isSelectedEight=false;
    this.isSelectedNine=false;
    this.isSelectedSeven=false;
    this.isSelectedTen=!this.isSelectedTen;
    this.firstPartQuestionValueNewM=10;

   
   }
//functions to handle last part buttons click
   handleClickOverallOne(){
     this.isSelectedOverallTwo=false;
    this.isSelectedOverallThree=false;
    this.isSelectedOverallFour=false;
    this.isSelectedOverallOne=!this.isSelectedOverallOne;
    this.thirdPartQuestionValueNewM="Dissatisfied";
   

   }
   handleClickOverallTwo(){
    this.isSelectedOverallOne=false;
    this.isSelectedOverallThree=false;
    this.isSelectedOverallFour=false;
    this.isSelectedOverallTwo=!this.isSelectedOverallTwo;
    this.thirdPartQuestionValueNewM="Neither dissatisfied nor Satisfied";
       
   }
   handleClickOverallThree(){
    this.isSelectedOverallTwo=false;
    this.isSelectedOverallOne=false;
    this.isSelectedOverallFour=false;
    this.isSelectedOverallThree=!this.isSelectedOverallThree;
    this.thirdPartQuestionValueNewM="Satisfied";
        
       
    
   }
   handleClickOverallFour(){
    this.isSelectedOverallTwo=false;
    this.isSelectedOverallThree=false;
    this.isSelectedOverallOne=false;
    this.isSelectedOverallFour=!this.isSelectedOverallFour;
    this.thirdPartQuestionValueNewM="Extremely Satisfied";
       
    
   }
   //functions to handle checkbox onchange
   handleClickRowOneFirst(){
   
        
            this.isDisabledRowOneSecond=!this.isDisabledRowOneSecond;
          
            this.isDisabledRowOneThird=!this.isDisabledRowOneThird;
           
            this.isDisabledRowOneFourth=!this.isDisabledRowOneFourth;
          
           this.secondPartQuestionValueNewM="Disagree";
    }
   handleClickRowOneSecond(){

    this.isDisabledRowOneFirst=!this.isDisabledRowOneFirst;
 
     this.isDisabledRowOneThird=!this.isDisabledRowOneThird;
    
     this.isDisabledRowOneFourth=!this.isDisabledRowOneFourth;
  
        this.secondPartQuestionValueNewM="Neither agree nor disagree";
   }
   handleClickRowOneThird(){
    this.isDisabledRowOneFirst=!this.isDisabledRowOneFirst;
    this.isDisabledRowOneSecond=!this.isDisabledRowOneSecond;

     this.isDisabledRowOneFourth=!this.isDisabledRowOneFourth;
  
    this.secondPartQuestionValueNewM="Agree";
}
   handleClickRowOneFourth(){
    this.isDisabledRowOneFirst=!this.isDisabledRowOneFirst;
    this.isDisabledRowOneSecond=!this.isDisabledRowOneSecond;
    
     this.isDisabledRowOneThird=!this.isDisabledRowOneThird;

    this.secondPartQuestionValueNewM="Strongly Agree";
   }
   handleClickRowTwoFirst(){

    this.isDisabledRowTwoThird=!this.isDisabledRowTwoThird;
  
     this.isDisabledRowTwoFourth=!this.isDisabledRowTwoFourth;
    this.isDisabledRowTwoSecond=!this.isDisabledRowTwoSecond;
    this.secondPartSecondQuestionValueNewM="Disagree";
   }
   handleClickRowTwoSecond(){
    
    this.isDisabledRowTwoFirst=!this.isDisabledRowTwoFirst;
     
    this.isDisabledRowTwoThird=!this.isDisabledRowTwoThird;
     
    this.isDisabledRowTwoFourth=!this.isDisabledRowTwoFourth;

    this.secondPartSecondQuestionValueNewM="Neither agree nor disagree";
   
   }
   handleClickRowTwoThird(){
      
    this.isDisabledRowTwoFirst=!this.isDisabledRowTwoFirst;

    this.isDisabledRowTwoFourth=!this.isDisabledRowTwoFourth;
     this.isDisabledRowTwoSecond=!this.isDisabledRowTwoSecond;
     this.secondPartSecondQuestionValueNewM="Agree";
   }
   handleClickRowTwoFourth(){
   
    this.isDisabledRowTwoFirst=!this.isDisabledRowTwoFirst;
    
    this.isDisabledRowTwoThird=!this.isDisabledRowTwoThird;
   
    this.isDisabledRowTwoSecond=!this.isDisabledRowTwoSecond;
    this.secondPartSecondQuestionValueNewM="Strongly Agree";
   }
//function to handle conditional rendering when form is submitted successfully
   handleSubmitCaseSurveyx(){
         
         this.renderCaseCsatCardFieldNewM=false;
       
   }
   //function to check if buttons are selected or not on form submit
   handleOnSubmitCaseSurveyx(){
    
        if(this.isSelected==false&&this.isSelectedOne==false&&this.isSelectedTwo==false&&this.isSelectedThree==false&&this.isSelectedFour==false&&this.isSelectedFive==false&&this.isSelectedSix==false&&this.isSelectedSeven==false&&this.isSelectedEight==false&&this.isSelectedNine==false&&this.isSelectedTen==false){
            this.firstPartQuestionValueNewM=null;}
    
        if(this.isSelectedOverallOne==false&&this.isSelectedOverallTwo==false&&this.isSelectedOverallThree==false&&this.isSelectedOverallFour==false){
                this.thirdPartQuestionValueNewM="  ";}
    
         if(this.isDisabledRowOneFirst==false&&this.isDisabledRowOneSecond==false&&this.isDisabledRowOneThird==false&&this.isDisabledRowOneFourth==false){
                    this.secondPartQuestionValueNewM="  ";}
    
    
        if(this.isDisabledRowTwoFirst==false&&this.isDisabledRowTwoSecond==false&&this.isDisabledRowTwoThird==false&&this.isDisabledRowTwoFourth==false){
                        this.secondPartSecondQuestionValueNewM="  ";}
                    
   }

}