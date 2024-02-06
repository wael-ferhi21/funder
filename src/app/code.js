<div>
    <div class="row" >
      <div class="col-md-3">
        
          [icon]="'el:link'"
          [activeStep]="activeStep"
          [borderStyle]="{ 'border': '1px solid black' }"
          [content]="{
            title: 'Partenaires clés',
            height: isFinalStep ? '360px' : '270px',
            color: '#CEE8BF',
            text: partenaire
          }"
          [limit]="'3'"
       
      </div>
  
      <div class="col-md-3">
        <div class="row">
        
            [icon]="'akar-icons:check'"
            [activeStep]="activeStep"
            [borderStyle]="{
              'border': '1px solid black',
              'border-right': 'none',
              'border-left': 'none'
            }"
            [limit]="'1'"
            [content]="{
              title: 'Activités clés',
              height: isFinalStep ? '180px' : '135px',
              color: '#F7C4B6',
              text: activite
            }"
       
        </div>
        <div class="row">
        
            [icon]="'icon-park-solid:factory-building'"
            [activeStep]="activeStep"
            [borderStyle]="{
              'border-bottom': '1px solid black'
            }"
            [limit]="'1'"
            [content]="{
              title: 'Ressources clés',
              height: isFinalStep ? '180px' : '135px',
              color: '#FAE2EC',
              text: ressource
            }"
       
        </div>
      </div>
  
      <div class="col-md-3">
      
          [icon]="'bxs:gift'"
          [activeStep]="activeStep"
          [borderStyle]="{ 'border': '1px solid black' }"
          [content]="{
            title: 'Proposition de valeur',
            height: isFinalStep ? '360px' : '270px',
            color: '#FCF9CE',
            text: proposition
          }"
          [limit]="'3'"
     
      </div>
  
      <div class="col-md-3">
        <div class="row">
          
            [icon]="'ant-design:heart-filled'"
            [borderStyle]="{
              'border': '1px solid black',
              'border-left': 'none'
            }"
            [activeStep]="activeStep"
            [content]="{
              title: 'Relation client',
              height: isFinalStep ? '180px' : '135px',
              color: '#ECF6F9',
              text: relation
            }"
            [limit]="'1'"
        
        </div>
        <div class="row">
         
            [icon]="'fa6-solid:truck'"
            [activeStep]="activeStep"
            [borderStyle]="{
              'border': '1px solid black',
              'border-top': 'none',
              'border-left': 'none'
            }"
            [content]="{
              title: 'Canaux de distribution',
              height: isFinalStep ? '180px' : '135px',
              color: '#BCBCCD',
              text: distribution
            }"
            [limit]="'1'"
      
        </div>
      </div>
  
      <div class="col-md-3">
      
          [icon]="'bi:people-fill'"
          [borderStyle]="{
            'border': '1px solid black',
            'border-left': 'none'
          }"
          [limit]="'3'"
          [activeStep]="activeStep"
          [content]="{
            title: 'Segments',
            height: isFinalStep ? '360px' : '270px',
            color: '#E3D3E6',
            text: segment
          }"
      
      </div>
    </div>
  
    <div class="row">
      <div class="col-md-6">
       
       
          [icon]="'ion:pricetag'"
          [activeStep]="activeStep"
          [borderStyle]="{
            'border': '1px solid black',
            'border-top': 'none'
          }"
          [content]="{
            title: 'Structure de coûts',
            height: '120px',
            color: '#C0B5B9',
            text: cout
          }"
          [limit]="'3'"
        
      </div>
      <div class="col-md-6">
      
        
          [icon]="'clarity:coin-bag-solid'"
          [activeStep]="activeStep"
          [borderStyle]="{
            'border': '1px solid black',
            'border-top': 'none',
            'border-left': 'none'
          }"
          [limit]="'3'"
          [content]="{
            title: 'Structure de revenus',
            height: '120px',
            color: '#C0BCB7',
            text: revenue
          }"
        
      </div>
    </div>
  </div>
  </div>
