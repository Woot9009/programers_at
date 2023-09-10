//프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
//쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
//시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
/*
예를 들어
1081마리를 주문하면 쿠폰이 1081장 발급되므로 서비스 치킨 108마리를 주문할 수 있습니다. 그리고 쿠폰이 1장 남습니다.
108마리를 주문하면 쿠폰이 108장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다. 그리고 쿠폰이 8장 남습니다.
10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.
1마리를 주문하면 쿠폰이 1장 발급됩니다.
가지고 있는 쿠폰이 총 10장이므로 서비스 치킨 1마리를 추가로 주문할 수 있습니다.
따라서 108 + 10 + 1 + 1 = 120 을 return합니다.
*/

function solution(chicken) {
  let service = 0;
  let serviceCnt = 0;
  let coupon = chicken;
  
  while(coupon>=10){
      service = parseInt(coupon/10);
      coupon -= service*9;//coupon = coupon - service*10 + service;를 축약한 것
      serviceCnt += service;
      service = 0;
  }
  
  return serviceCnt;
}

/*
처음에 while의 조건문을 coupon<10으로 해서 안됐었음;;
조건문까지가 아니라 조건문 동안 실행하는 것!!!

*/