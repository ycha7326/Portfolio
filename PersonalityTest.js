class PersonalTest {
    constructor(target) {
        this.container = document.querySelector(target); // 추후 dom 내용을 바꾸기 위한 선택자
        this.page = 0; // 0: intro, 1: test, 2: result 현재 페이지
        this.progress = 0; // 현재 질문 단계
        this.questions = {
            EI: [
                { question: 'You have been invited to a birthday party of a popular cat.', answer: { a:'It souds so much fun! I will say I am definitely going.', b: 'Just thinking about it makes me tired. I will vaguely say I have plans and that I will get back to them later.'} },
                { question: 'However, the friend you were supposed to go with says they cannot join because they have got stomachache.', answer: { a:'I can just make new ones! it sounds fun, so I will attend.', b: 'It might be awkward without my friend, but you were invited, you will attend the party.'} }],
            SN: [
                { question: 'You arrive at the party!.', answer: { a: 'You offer your birthday wishes and help with the party preparations.', b: 'You offer your birthday wishes and move to another area so as not to disturb them.' } },
                { question: 'As you look around the party, you realise you are the only cat without a friend.', answer: { a: 'You approach an interesting-looking group, introduce yourself, and start a conversation.', b: 'You decide to wait for someone to reaches out to you first.' } }
                ],
            CR: [
                { question: 'While enjoing a conversation with your new friends, one cat makes a rude joke towards you.', answer: { a: 'You brush it off and play along with the joke lightheartedly.', b: 'The rudenss leaves you feeling uncomfotable.' } },
                { question: 'As the conversation reaches its peak, chaos suddenly erupts from one sied.', answer: { a: 'You are too busy talking with your friends to noice what is happening.', b: 'You have a gut feeling that something sserious has happened.' } }
                ],   
            FT: [
                { question: 'As the situation grows more chaotic, you move to there and are faced with the sight of two cats fighting, one of them crying.', answer: { a: 'You comfort the crying cat.', b: 'You try to figure aout exactly what happened.' } },
                { question: 'Everyone found out what happened. It turned out that the crying cat was mostly to blame... ', answer: { a: 'The mistake was still a mistake, but seeing the crying cat makes you feel sorry, so you cannot say anything.', b: 'It is not acceptable to cry after making a mistake. You tell them to calm down and apologise.' } }
                    ],
            JP: [
                { question: 'The party is over, and it is time to head home. Then, you realise your birthday is just around the corner..', answer: { a: 'I will invite all the friends I made today.', b: 'I will think about it later.' } },
                { question: 'Finally, you arrive home!.', answer: { a: 'You reach out to the frineds you made today and the birthday cat to share your excitement, and organise your birthday party. ', b: 'You are feeling soft and relaxed, so you decide to rest and think about contacting them later.' } }
                ],
             
        }; // 질문 모음
        this.results = []; // 사용자가 선택한 답모음
        this.resultInfors = {
            this.resultInfors = {
            INRTJ: {title:"White cat", desc: "Introvert, sensitive<br />여행가면 나서서 계획짬<br /> 협동하고 이런거 극혐 그냥 나혼자 하는게 젤 편하고 젤 빠름<br /> 누가 도와준다고 해도 혼자 할 수 있음 혼자 함<br /> 내 일이랑 의견에 간섭받는 거 싫어함<br /> 남한테 관심 별로 없는 편<br /> 내 얘기 하는것도 싫고 남 얘기 들어주는 것도 힘듦 내가 왜 듣고있어야 하는지 모르겠음<br /> 책임감 많음<br /> 가끔 공감능력 부족한 거 같다는 소리 들음(남 이야기에 잘 공감 못함)<br /> 딱딱하단 소리 자주 들음<br /> 철벽 잘 침<br /> 프젝같은거 할 때 이야기 딴데로 새는거 개 싫어함 시작했으면 목표한 거 끝내야함 "},
            ISCFP: {title:"Tortoise shell cat", desc: "원칙주의자<br />남 눈치봄, 남들 챙기는 거 좋아함<br />외로움 많이 타는데 많은 사람이랑 있는건 싫음<br />아싸무리에서 인싸, 인싸무리에서 아싸<br />전화오면 고민 오조오억번 하고 받음<br />게으른 완벽주의자<br />게으름뱅이<br />조 짜서 하는 단체활동 안 좋아함<br />혼자서 할 수 있는 일 좋아함<br />남이 볼땐 인생 노잼처럼 보이지만 자기선에선 매우 만족하며 삶<br />배려심 쩔고 공감 잘해줌, 생각 많음<br />인간관계에 스트레서 많이 받음<br />아니면 아니고 말면 말자 마인드<br />겉으론 무덤덤해보여도 속으론 온갖 생각 다 함<br />살짝 비판적<br />어쩔 땐 내향적이고 어쩔 땐 외향적, 성격 왔다갔다해서 나도 내 성격 잘 모름<br />겸손하고 칭찬 많이 해줌<br />진짜 싫어하는 사람 아니면 잘 안까고 남한테 관심도 별로 없음<br />성격 온화, 하자고 하면 거의 다 해줌<br />계획 세우는 거 좋아하고 메모하고 기억해둠<br />사람들한테 나에 대한 어필 잘 안함<br />나서는 거 싫어하는데 관심 받는건 좋음<br />사람들과 어울리는거 좋아하는데 그만큼 혼자 노는것도 좋음<br />되게 쓸데없는 것까지 신경씀 근데 또 쿨함(왔다리 갔다리)<br /> 애인 사귀면 오래감"},
            INRFJ: {title:"Tricolour cat", desc: "생각이 너무 많음<br />새로운 일 시작하는거, 새로운 사람 만나는거 극혐<br />낯가림 심함, 눈치 빠름<br />겉으로 웃는데 속으로 욕 많이 함<br />집순인데 여행가는 건 좋음<br />할거 미리 해치우는 편<br />친해지고 싶은 사람이 있어도 그 사람이 먼저 다가와주길 바람<br />관심받고 싶은데 나서는 건 싫어함<br />내사람한테는 존나 잘해줌 물론 그냥 아는 사람한테도 어느정도 선의를 베풀지만 잘못하면 얄짤없이 버림<br />엄청 조용히 다니는데 엠티 이런곳 가면 나가서 막 춤추고 노래부르고 싶음(가끔 좀 튀고싶을 때 있음)<br />나 혼자 생각할 시간 꼭 필요<br />계획적인거 좋아함, 항상 계획을 세움<br />친하고 마음 맞는 애랑 단 둘이 노는거 좋아함<br />내가 하고싶은건 열심히 함 특히 예술쪽으로<br />감수성 풍부<br />혼자서 생각 정리할 시간 꼭 필요<br />다같이 노는 무의미한 시간이 제일 지루<br />무슨 말을 하더라도 근거가 없으면 너무 싫음 어디서 주워들어서 말하는거 절대 못믿음<br />생각 존나 많고 망상 잦음"},
            ENRFJ: {title:"Tuxedo cat", desc: "혼자있는거 존나 좋아함, 사회활동 극혐 근데 단체활동할 때 주도적인 역할 자주 맡음<br />사람많고 시끄러운 장소 극혐<br />굉장한 개인주의자, 이기적<br />하루하루 세세하게 계획짜놓고 지내는 것 좋아함(시간별로, 순서대로)<br />돈관리도 잘 하는 편, 사실과 원리원칙 중요시<br />감정에 휘둘리는 거 싫어함<br />남에게 관심 없고 친구가 고민 상담할때도 공감 못함(근데 겉으로 관심있는 척)-그래서 문제 해결에 도움은 줘도 위로 자체는 잘 못함(남 연애사 듣는게 세상에서 제일 재미없음)<br />공상 잦음, 어떤 사안이나 작품에 대해 다각도로 해석하는 거 좋아함<br />수다 떠는 거 좋아함<br />인간관계 정리 잘 하고 사람에게 정 붙이는데 시간 오래 걸림<br />사람 얼굴, 이름 잘 기억 못함<br />약간 관종끼 있지만 내성적이라 표출은 안함<br />동물들에게는 한없이 친절, 좀 완벽주의자<br />몇몇 물건에 집착함<br />무신경하다는 소리 들음 근데 좋아하는건 또 쩔게 집착함<br />할땐 함 안할땐 안함<br />이성적인데 감성적<br />성격 이상하다는 생각 스스로 자주 함<br />특이하고 특별한데 남에게 그런소리 듣는 건 싫음<br />남 눈치 안보고 남 일에 무신경"},
            ENCTP: {title:"Black cat", desc: "만사가 귀찮음★<br />무미건조, 낯가림 근데 친해지면 말 많고 장난도 잘 침<br />새로운 사람 만나는거 극혐<br />남한테 관심 없고 내 얘기도 잘 안함<br />혼자만의 문화생활 즐김, 마웨<br />쓸데없는 소비 엄청함(꽂힌게 있으면 관련된거 다 사야함)<br />노력절약형, 효율적인거 개 좋아함<br />망상 잘 함<br />내가 제일 잘난줄 암<br />카톡 할말없으면 읽씹, 대화 이어가기 안함<br />주류에 속하기 싫어함<br />자기자랑 꼴뵈기 싫음<br />이것저것 공부하고 싶은게 너무 많음 근데 끝을 못봄<br />미루고 미루다 발등에 불떨어져도 안하다가 발등 타들어가면 그제야 함(벼락치기 존나 잘함)<br />기계조작 잘하고 재미있어함<br />하나에 꽂히면 끝장을 봐야함 내가 질릴때까지<br />관심있고 하고싶은것만 함 하기싫은건 죽어도 안함<br />내가 맡은바는 다 함<br />위계질서 개싫어하고 내가 하는거 간섭받으면 육성으로 욕나옴<br />친하면 활발한데 내사람 아니면 입 꾹다물고 있음<br />관종이라 관심받는건 좋은데 시끄러운건 싫어함<br />누가 내 욕해도 별로 신경 안씀<br />웹툰같은거 귀찮아서 못 챙겨봄-챙겨보다가 한번 놓치면 걍 안봄<br />관찰력 뛰어남, 멀티 안됨, 호불호 강함<br />공감능력 부족★티안내려고 노력은 하는데 그래도 티남)<br />엠비티아, 사주, 타로 관심많음<br />청소 안함"},
            ESRFJ: {title:"Tabby cat", desc: "귀찮음, 행동 느림 감정기복 심하고 공감능력 개쩜<br />모든 일 미룰 수 있을 때까지 다 미룸<br />귀찮고 무기력(매사에 의욕 부족) 근데 한번 삘타면 제대로 함<br />존나 집순이(밖에 나돌아 다니는거 개싫어함)<br />집에가면 연락두절됨<br />배려형 개인주의<br />누구랑 약속 있었는데 취소되면 속으로 기뻐함(약속 잡히는거 극혐)<br />혼자가 좋은데 놀 때가 좋을때가 있기도 하고(막상 만나면 잘 놈)<br />노는건 좋지만 금방 지침<br />조용한 관종(관심받는거 개싫은데 좋음, 소심한 관종)<br />칭찬 받으면 그거 하루종일 생각남<br />갈등, 불화 싫어함<br />다이어리 끝까지 써본 적 없음<br />사람들이랑 만나면 기빨림<br />한번 받은 일은 끝까지 해야한다는 생각이 있음 근데 하다가 잠<br />친해지면 활발함<br />남 눈치 존나 많이 봄<br />하기 싫은거 안하고 하고싶은것만 함<br />착한 줄 아는데 사실 이기적(겉으로 착한척하고 속으로 영악한 생각함)<br />고집, 자존심 진짜 셈<br />남한테 속마음 얘기 잘 안함(제일 친한 사람에게도 얘기할까말까)<br />사람 만나는거 좋은데 싫음<br />결정 잘 못함<br />거절을 잘 못함, 양보를 잘함<br />분석, 비판, 판단은 잘하는데 이러한 판단을 적극적으로 행동에 옮기지는 않음<br />미룰 수 있을때까지 미룸<br />겸손하다는 말 자주 들음<br />낙천적<br />인간관계에 신경 많이 쓰는 편<br />자존감 낮음<br />주변 의견, 주변 분위기 따라감<br />불평불만 다 쌓아두기만하고 표출은 못함"},
            ESCFP: {title:"Orange cat", desc: "해야될 일 생각만 하고 실제로는 발만 담그고 안 함<br /> 완전 처음 보는 사람한테는 말 잘 거는데 학교같이 조직생활 하는 곳에서는 낯 엄청 가림<br /> 좋아하는 건 미친 듯이 파고 집중 근데 열정이 초기에만 불타고 빨리 식음<br /> 너무 게을러서 벼락치기 함<br /> 멀티 안됨, 연락 귀찮아함, 안읽씹 잘함<br /> 내적 성장 엄청 중요하게 여김<br /> 가끔 우울한 나에 심취<br /> 내 개인적인 얘기 남들한테 하는거 싫어함(가족포함)<br /> 화날 때 혼자 있어야 함 누가 건들면 안됨<br /> 한번 싫은건 끝까지 싫음(호불호 명확)<br /> 남한테 정말 관심 없음, 남을 잘 안믿음<br /> 남이 나를 어떻게 생각할지 고민 많이 함<br /> 누가 내 일하는 방식에 대해 간섭하면 개빡침, 한국에 살면 예민충이나 사회 부적응자로 보임<br /> 남의 가치관 같은거에 별로 신경 안쓰고 인정하는 편, 누가 내 가치관에 뭐라하는거 싫어함<br /> 남들한테 뭐라고 잘 안 함 근데 이건 귀찮아서지 불만이 없어서가 아님<br /> 인간 존재에 대한 생각을 많이 하고 그래서 인간 자체에 대한 기대치 낮음<br /> 남한테 의지하는 방법을 잘 모르기도 하고 의지하기도 싫어서 힘들어도 혼자 해결하려고 함<br /> 혼자 있는건 좋은데 외로운 건 싫음<br /> 나가는거 귀찮아하는데 막상 나가면 잘놈<br /> 집에서 뒹굴거리면서 티비보는거 개좋아함(존나 집순이)<br /> 여러명이서 노는것보다 한두명이서 노는게 좋음<br /> 돈개념 존나 없음 쓰는데 합리화함<br /> 싸우는 거 싫어해서 걍 내가 희생함<br /> 인간관계에 존나 예민함 나한테 백번을 잘해주다가 한번만 반응 안해줘도 내가 뭐 잘못했나 혼자 생각함<br /> 내 성격 존나 싫은데 스스로를 너무 아끼고 사랑함(난 왜 이럴까 싶으면서도 나자신 겁나 좋아함)<br /> 자기애 강한데 자존감은 낮음<br /> 처음 보는 사이면 먼저 말 못걸음 근데 말 걸면 또 잘 얘기함<br /> 남얘기 잘 들어주는척 하는데 사실 딴생각함(남얘기에 큰 관심없고 공감하고 싶은 마음도 없음)<br /> 시작은 창대하나, 정작 끝을 내는 법은 없음 근데 또 하면 평균 이상<br /> 계획적으로 뭘 하질 못해서 항상 벼락치기함 근데 성적은 나름 잘 나옴<br /> 끈기 없음, 생각만 하고 실천 안함<br /> 남한테 폐끼치는 거 제일 싫어함<br /> 낯 심하게 가리고 사람 사귈 때 따지는거 존나 많음"},
        }
        this.init();
    }

    init() {
        this.questionArray = this.getQuestion(); // 질문을 배열로 저장

        const answerAButton = this.container.querySelector('button[data-answer="a"]');
        const answerBButton = this.container.querySelector('button[data-answer="b"]');
        const startButton = this.container.querySelector('button[data-action="start"]');
        const restartButton = this.container.querySelector('button[data-action="restart"]');

        answerAButton.addEventListener('click', () => this.submitAnswer(answerAButton.innerText));
        answerBButton.addEventListener('click', () => this.submitAnswer(answerBButton.innerText));
        startButton.addEventListener('click', this.start.bind(this));
        restartButton.addEventListener('click', this.restart.bind(this));

        /*
        2023-05-19 리팩토링
        1. 이벤트 리스너 함수 분리: 이벤트 리스너를 분리하여 코드 가독성 향상.
        2. e.target.innerText 대신 클릭한 버튼의 innerText를 매개변수로 전달. (직관성)
        3. querySelector 결과를 변수에 저장: 반복적인 querySelector 호출을 피하여 가독성 향상.
        */

        this.render();
    }

    start() {
        if(this.progress !== 0) return; // 진행중이면 실행하지 않음

        this.page = 1;
        this.render();
    }

    restart() {
        this.page = 0;
        this.progress = 0;
        this.results = [];
        this.render();
    }

    getQuestion() { // questions의 키를 참조해서 질문을 반환
        return Object.entries(this.questions)
        .flatMap(([type, questions]) => questions.map(question => ({ ...question, type })));

        /*
        2023-05-19 리팩토링
        1. Object.entries를 사용하여 객체를 배열로 변환 후 이차원 배열을 flatMap으로 평탄화.
        */
    }

    getCurrentQuestions() { // 현재 progress의 질문을 반환
        const currentQuestionIndex = this.progress;
        return this.questionArray[currentQuestionIndex];

        /*
        2023-05-19 리팩토링
        1. currentQuestionIndex 변수 도입으로 현재 질문의 인덱스를 명시적으로 표현하여 가독성 향상.
        */
    }

    submitAnswer(answer) {
        const currentQuestion = this.questionArray[this.progress];

        if (this.questionArray.length <= this.progress + 1) {
            this.page = 2;
            this.render();
        }

        const selectedAnswer = Object.keys(currentQuestion.answer)
        .find(selectedAnswer => currentQuestion.answer[selectedAnswer] === answer);

        this.results.push({
            type: currentQuestion.type,
            answer: selectedAnswer
        });

        this.progress++;
        this.render();

        return this.getCurrentQuestions();

        /*
        2023-05-19 리팩토링
        1. this.questionArray[this.progress]를 반복해서 사용하는 대신 currentQuestion라는 변수를 도입하여 가독성 향상
        2. Object.keys() 및 find() 메서드를 사용하여 사용자가 선택한 답변에 해당하는 키 값을 찾는 과정을 단순화.
        */
    }

    calcResult() {
        const totalResult = Object.keys(this.questions).reduce((acc, cur) => {
            acc[cur] = this.results
                .filter(result => result.type === cur)
                .reduce((acc, cur) => {
                acc[cur.answer] = acc[cur.answer] ? acc[cur.answer] + 1 : 1;
                return acc;
            }, {});
            return acc;
        }, {});
        
        return this.createPersonalResult(totalResult);
        /*
        2023-05-19 리팩토링
        1. this.result = 부분 제거, totalResult 변수에 할당 이후 중첩 reduce() 메서드를 사용하여 가독성 향상.
        */
    }

    createPersonalResult(totalResult) {
        return Object.keys(totalResult).reduce((acc, cur) => {
            const result = totalResult[cur];
            
            if (!result.a) return acc + cur[1];
            if (!result.b) return acc + cur[0];
        
            if (result.a === result.b) {
                return acc + cur[0];
            }
            
            return acc + (result.a > result.b ? cur[0] : cur[1]);
        }, "");
        /*
        2023-05-19 리팩토링
        1. totalResult[cur]를 result 변수로 저장하여 가독성 향상
        2. if문의 반환 값이 같은 경우를 하나로 통합하여 가독성을 개선
        */
    }

    render() {
        const introContainer = this.container.querySelector('.intro_container');
        const testContainer = this.container.querySelector('.test_container');
        const resultContainer = this.container.querySelector('.result_container');

        if (this.page === 0) {
            introContainer.classList.add('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');

        } else if (this.page === 1) {
            testContainer.classList.add('active');
            introContainer.classList.remove('active');
            resultContainer.classList.remove('active');

            const progressElement = this.container.querySelector('.progress');
            const questionElement = this.container.querySelector('.question');
            const answerAElement = this.container.querySelector('button[data-answer="a"]');
            const answerBElement = this.container.querySelector('button[data-answer="b"]');
        
            progressElement.textContent = `Q${this.progress + 1}. `;
            questionElement.textContent = this.getCurrentQuestions().question;
            answerAElement.textContent = this.getCurrentQuestions().answer.a;
            answerBElement.textContent = this.getCurrentQuestions().answer.b;

        } else if (this.page === 2) {
            resultContainer.classList.add('active');
            introContainer.classList.remove('active');
            testContainer.classList.remove('active');
        
            const resultTextElement = this.container.querySelector('.result_text');
            const resultInforTitleElement = this.container.querySelector('.result_infor_title');
            const resultInforElement = this.container.querySelector('.result_infor');
            const calcResult = this.calcResult();
        
            resultTextElement.innerHTML = `당신의 성향은 <span class="point_text">${calcResult}</span>입니다.`;
            resultInforTitleElement.innerHTML = `[ ${this.resultInfors[calcResult].title} ]`;
        
            resultInforElement.innerHTML = this.resultInfors[calcResult].desc
            .split('<br />')
            .map(el => `<li>${el}</li>`)
            .join('');
        }
        /*
        2023-05-19 리팩토링
        1. 각각의 UI 요소를 변수로 저장하여 가독성을 향상 
        2. 텍스트 콘텐츠와 HTML 내용을 설정하는 부분을 변수로 분리하여 가독성을 개선
        */
    }
}
