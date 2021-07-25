interface IPerson6 {
    name: string;

}

interface IKorean extends IPerson6 {
    city: string;
}

const p6: IPerson6 = {
    name: 'Mark'
};

const k6: IKorean = {
    name: 'Mark',
    city: 'Seoul'
};

//indexable type이란?  인덱스를 설정해서 어던 값을 넣음. type 2개만 넣을수있음.
// string과 number index가 number다? 배열. 완벽한 배열과는 다르다.
interface StringArray {
    [index: number]: string;
}

const sa: StringArray = { }; 
sa[100] = '백'; //잘안쓴다.

//String indexable.
interface StringDict {
    [index: string]: string;
}

const sd: StringDict = {};
sd['hundred'] = '백';
sd.hundred = '백';


sd['hundred'] = '백';



interface Optional {
    [index: string]: string;
    name: string;
}

