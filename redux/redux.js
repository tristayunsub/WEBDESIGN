// action - dispatch - reducer -state , getState, render

state와 render의 관계 redux의 핵심은 store다 정보가 저장되는 것
store안에 state가있다  reducer라는 함수를 만들어 공급한다. 
subscribe에 render함수넣으면 state값이 바뀔때마다 render함수가 호출되면서
UI가 새롭게 갱신된다.

dispatch란? reducer를 호출해서 state값을 바꾼다. 그작없끝난후
subscribe를 이용해서 render함수를 호출해준다. 디스패치가 리듀서를 어떻게다루나

2개의값을 전달한다. 두개의값 첫번째는 현재의 스테이트값, 액션데이타, 객체를 전달한다
디스패치에 의해서 함수가 호출된다. 
리턴을해주면 리턴해주는 객체는 스테이트의 새로운값이된다.UI가
액션을 참조해서 새로운 스테이트 값을 만들어내서 리턴해주는
스테이트를 가공하는 가공자임. 머라는겨이거
getstate를통해 값을 가져오고  디스패치를 통해 값을 변경 서브스크라이브를
이용해서 값이 변경됬을때 구동될 함수들을 등록해준다. 리듀서를 통해서
스테이트값을 변경한다. 
