// 일본어 회화 필수단어 프리셋 데이터
// 테마별로 구성된 단어팩

export const WORD_PACKS = [
  {
    id: 'basic',
    title: '기초 회화 100',
    description: '일본 여행·일상에 꼭 필요한 기본 단어',
    level: '초급',
    themes: [
      {
        name: '인사·기본 표현',
        words: [
          { hiragana: 'おはようございます', korean: '좋은 아침이에요', romaji: 'ohayou gozaimasu', examples: [
            { jp: 'おはようございます、きょうもいいてんきですね', kr: '좋은 아침이에요, 오늘도 날씨 좋네요' },
          ]},
          { hiragana: 'こんにちは', korean: '안녕하세요', romaji: 'konnichiwa', examples: [
            { jp: 'こんにちは、おげんきですか', kr: '안녕하세요, 잘 지내세요?' },
          ]},
          { hiragana: 'こんばんは', korean: '안녕하세요(저녁)', romaji: 'konbanwa', examples: [
            { jp: 'こんばんは、もうおそいですね', kr: '안녕하세요, 벌써 늦었네요' },
          ]},
          { hiragana: 'さようなら', korean: '안녕히 가세요', romaji: 'sayounara', examples: [
            { jp: 'さようなら、またあしたね', kr: '잘 가요, 내일 또 봐요' },
          ]},
          { hiragana: 'ありがとうございます', korean: '감사합니다', romaji: 'arigatou gozaimasu', examples: [
            { jp: 'たすけてくれて、ありがとうございます', kr: '도와주셔서 감사합니다' },
            { jp: 'いろいろありがとうございます', kr: '여러모로 감사합니다' },
          ]},
          { hiragana: 'すみません', korean: '죄송합니다/실례합니다', romaji: 'sumimasen', examples: [
            { jp: 'すみません、えきはどこですか', kr: '실례합니다, 역이 어디인가요?' },
            { jp: 'おそくなって、すみません', kr: '늦어서 죄송합니다' },
          ]},
          { hiragana: 'おねがいします', korean: '부탁합니다', romaji: 'onegaishimasu', examples: [
            { jp: 'みずをいっぱいおねがいします', kr: '물 한 잔 부탁합니다' },
            { jp: 'ゆっくりはなしてください、おねがいします', kr: '천천히 말해 주세요, 부탁드립니다' },
          ]},
          { hiragana: 'はい', korean: '네', romaji: 'hai', examples: [
            { jp: 'はい、わかりました', kr: '네, 알겠습니다' },
          ]},
          { hiragana: 'いいえ', korean: '아니요', romaji: 'iie', examples: [
            { jp: 'いいえ、にほんじんではありません', kr: '아니요, 일본인이 아니에요' },
          ]},
          { hiragana: 'だいじょうぶ', korean: '괜찮아요', romaji: 'daijoubu', examples: [
            { jp: 'だいじょうぶですか', kr: '괜찮으세요?' },
            { jp: 'はい、だいじょうぶです', kr: '네, 괜찮아요' },
          ]},
          { hiragana: 'わかりました', korean: '알겠습니다', romaji: 'wakarimashita', examples: [
            { jp: 'はい、わかりました。やってみます', kr: '네, 알겠습니다. 해볼게요' },
          ]},
          { hiragana: 'わかりません', korean: '모르겠습니다', romaji: 'wakarimasen', examples: [
            { jp: 'にほんごがよくわかりません', kr: '일본어를 잘 모르겠어요' },
            { jp: 'すみません、わかりません', kr: '죄송합니다, 모르겠어요' },
          ]},
          { hiragana: 'おやすみなさい', korean: '안녕히 주무세요', romaji: 'oyasuminasai', examples: [
            { jp: 'おやすみなさい、またあした', kr: '안녕히 주무세요, 내일 봐요' },
          ]},
          { hiragana: 'いただきます', korean: '잘 먹겠습니다', romaji: 'itadakimasu', examples: [
            { jp: 'では、いただきます', kr: '그럼, 잘 먹겠습니다' },
          ]},
          { hiragana: 'ごちそうさまでした', korean: '잘 먹었습니다', romaji: 'gochisousamadeshita', examples: [
            { jp: 'ごちそうさまでした、とてもおいしかったです', kr: '잘 먹었습니다, 정말 맛있었어요' },
          ]},
        ]
      },
      {
        name: '숫자·시간',
        words: [
          { hiragana: 'いち', korean: '1', romaji: 'ichi', examples: [
            { jp: 'いちまいください', kr: '한 장 주세요' },
          ]},
          { hiragana: 'に', korean: '2', romaji: 'ni', examples: [
            { jp: 'ふたりです', kr: '두 명이에요' },
          ]},
          { hiragana: 'さん', korean: '3', romaji: 'san', examples: [
            { jp: 'みっつください', kr: '세 개 주세요' },
          ]},
          { hiragana: 'よん', korean: '4', romaji: 'yon', examples: [
            { jp: 'よんじかんかかります', kr: '4시간 걸려요' },
          ]},
          { hiragana: 'ご', korean: '5', romaji: 'go', examples: [
            { jp: 'ごふんまってください', kr: '5분만 기다려 주세요' },
          ]},
          { hiragana: 'ろく', korean: '6', romaji: 'roku', examples: [
            { jp: 'ろくじにあいましょう', kr: '6시에 만납시다' },
          ]},
          { hiragana: 'なな', korean: '7', romaji: 'nana', examples: [
            { jp: 'ななにんでいきます', kr: '7명이서 갑니다' },
          ]},
          { hiragana: 'はち', korean: '8', romaji: 'hachi', examples: [
            { jp: 'はちじにおきます', kr: '8시에 일어나요' },
          ]},
          { hiragana: 'きゅう', korean: '9', romaji: 'kyuu', examples: [
            { jp: 'きゅうじかんねました', kr: '9시간 잤어요' },
          ]},
          { hiragana: 'じゅう', korean: '10', romaji: 'juu', examples: [
            { jp: 'じゅっぷんまちました', kr: '10분 기다렸어요' },
          ]},
          { hiragana: 'いま', korean: '지금', romaji: 'ima', examples: [
            { jp: 'いまなんじですか', kr: '지금 몇 시예요?' },
            { jp: 'いまいそがしいです', kr: '지금 바빠요' },
          ]},
          { hiragana: 'きょう', korean: '오늘', romaji: 'kyou', examples: [
            { jp: 'きょうはいいてんきですね', kr: '오늘 날씨 좋네요' },
            { jp: 'きょうはひまです', kr: '오늘은 한가해요' },
          ]},
          { hiragana: 'あした', korean: '내일', romaji: 'ashita', examples: [
            { jp: 'あしたいっしょにいきませんか', kr: '내일 같이 가지 않을래요?' },
            { jp: 'あしたはいそがしいです', kr: '내일은 바빠요' },
          ]},
          { hiragana: 'きのう', korean: '어제', romaji: 'kinou', examples: [
            { jp: 'きのうなにをしましたか', kr: '어제 뭐 했어요?' },
            { jp: 'きのうえいがをみました', kr: '어제 영화를 봤어요' },
          ]},
        ]
      },
      {
        name: '음식·레스토랑',
        words: [
          { hiragana: 'みず', korean: '물', romaji: 'mizu', examples: [
            { jp: 'みずをください', kr: '물 주세요' },
            { jp: 'おみずをいっぱいおねがいします', kr: '물 한 잔 부탁합니다' },
          ]},
          { hiragana: 'おちゃ', korean: '차', romaji: 'ocha', examples: [
            { jp: 'おちゃをのみますか', kr: '차 마실래요?' },
            { jp: 'つめたいおちゃをください', kr: '차가운 차 주세요' },
          ]},
          { hiragana: 'ごはん', korean: '밥/식사', romaji: 'gohan', examples: [
            { jp: 'ごはんをたべましょう', kr: '밥 먹읍시다' },
            { jp: 'あさごはんはもうたべました', kr: '아침밥은 이미 먹었어요' },
          ]},
          { hiragana: 'にく', korean: '고기', romaji: 'niku', examples: [
            { jp: 'にくがすきです', kr: '고기를 좋아해요' },
            { jp: 'このにくはやわらかいですね', kr: '이 고기는 부드럽네요' },
          ]},
          { hiragana: 'さかな', korean: '생선', romaji: 'sakana', examples: [
            { jp: 'さかなをたべますか', kr: '생선 드세요?' },
            { jp: 'このさかなはしんせんです', kr: '이 생선은 신선해요' },
          ]},
          { hiragana: 'やさい', korean: '채소', romaji: 'yasai', examples: [
            { jp: 'やさいをたくさんたべてください', kr: '채소를 많이 드세요' },
            { jp: 'やさいがきらいです', kr: '채소를 싫어해요' },
          ]},
          { hiragana: 'たまご', korean: '계란', romaji: 'tamago', examples: [
            { jp: 'たまごりょうりがすきです', kr: '계란 요리를 좋아해요' },
            { jp: 'たまごをふたつください', kr: '계란 두 개 주세요' },
          ]},
          { hiragana: 'おさけ', korean: '술', romaji: 'osake', examples: [
            { jp: 'おさけはのめません', kr: '술을 못 마셔요' },
            { jp: 'すこしおさけをのみました', kr: '조금 술을 마셨어요' },
          ]},
          { hiragana: 'メニュー', korean: '메뉴', romaji: 'menyuu', examples: [
            { jp: 'メニューをみせてください', kr: '메뉴 보여주세요' },
            { jp: 'にほんごのメニューはありますか', kr: '일본어 메뉴 있나요?' },
          ]},
          { hiragana: 'おかいけい', korean: '계산', romaji: 'okaikei', examples: [
            { jp: 'おかいけいをおねがいします', kr: '계산 부탁합니다' },
            { jp: 'べつべつにおかいけいできますか', kr: '따로따로 계산할 수 있나요?' },
          ]},
          { hiragana: 'おいしい', korean: '맛있다', romaji: 'oishii', examples: [
            { jp: 'このりょうりはとてもおいしいです', kr: '이 요리는 정말 맛있어요' },
            { jp: 'おいしそうですね', kr: '맛있어 보이네요' },
          ]},
          { hiragana: 'くだもの', korean: '과일', romaji: 'kudamono', examples: [
            { jp: 'くだものがすきです', kr: '과일을 좋아해요' },
            { jp: 'にほんのくだものはたかいです', kr: '일본 과일은 비싸요' },
          ]},
          { hiragana: 'パン', korean: '빵', romaji: 'pan', examples: [
            { jp: 'あさはパンをたべます', kr: '아침에는 빵을 먹어요' },
            { jp: 'このパンはやわらかくておいしいです', kr: '이 빵은 부드럽고 맛있어요' },
          ]},
          { hiragana: 'べんとう', korean: '도시락', romaji: 'bentou', examples: [
            { jp: 'コンビニでべんとうをかいました', kr: '편의점에서 도시락을 샀어요' },
            { jp: 'べんとうをもってきました', kr: '도시락을 가져왔어요' },
          ]},
        ]
      },
      {
        name: '교통·이동',
        words: [
          { hiragana: 'えき', korean: '역', romaji: 'eki', examples: [
            { jp: 'えきはどこですか', kr: '역이 어디인가요?' },
            { jp: 'えきのちかくにホテルがあります', kr: '역 근처에 호텔이 있어요' },
          ]},
          { hiragana: 'でんしゃ', korean: '전철', romaji: 'densha', examples: [
            { jp: 'でんしゃでいきます', kr: '전철로 갑니다' },
            { jp: 'でんしゃはなんじにきますか', kr: '전철은 몇 시에 오나요?' },
          ]},
          { hiragana: 'バス', korean: '버스', romaji: 'basu', examples: [
            { jp: 'バスにのっていきましょう', kr: '버스를 타고 갑시다' },
            { jp: 'このバスはくうこうにいきますか', kr: '이 버스는 공항에 가나요?' },
          ]},
          { hiragana: 'タクシー', korean: '택시', romaji: 'takushii', examples: [
            { jp: 'タクシーをよんでください', kr: '택시를 불러주세요' },
            { jp: 'タクシーでいくらですか', kr: '택시로 얼마예요?' },
          ]},
          { hiragana: 'くうこう', korean: '공항', romaji: 'kuukou', examples: [
            { jp: 'くうこうまでどのくらいかかりますか', kr: '공항까지 얼마나 걸려요?' },
            { jp: 'くうこうはとおいですか', kr: '공항은 먼가요?' },
          ]},
          { hiragana: 'きっぷ', korean: '표/티켓', romaji: 'kippu', examples: [
            { jp: 'きっぷをかいたいです', kr: '표를 사고 싶어요' },
            { jp: 'きっぷはどこでかえますか', kr: '표는 어디서 살 수 있나요?' },
          ]},
          { hiragana: 'みぎ', korean: '오른쪽', romaji: 'migi', examples: [
            { jp: 'みぎにまがってください', kr: '오른쪽으로 돌아주세요' },
            { jp: 'みぎがわにあります', kr: '오른쪽에 있어요' },
          ]},
          { hiragana: 'ひだり', korean: '왼쪽', romaji: 'hidari', examples: [
            { jp: 'ひだりにまがると、えきがあります', kr: '왼쪽으로 돌면 역이 있어요' },
          ]},
          { hiragana: 'まっすぐ', korean: '똑바로', romaji: 'massugu', examples: [
            { jp: 'まっすぐいってください', kr: '똑바로 가주세요' },
            { jp: 'まっすぐいくとえきがあります', kr: '똑바로 가면 역이 있어요' },
          ]},
          { hiragana: 'ちかく', korean: '근처', romaji: 'chikaku', examples: [
            { jp: 'えきのちかくにコンビニがあります', kr: '역 근처에 편의점이 있어요' },
            { jp: 'このちかくにレストランはありますか', kr: '이 근처에 레스토랑 있나요?' },
          ]},
          { hiragana: 'とおい', korean: '멀다', romaji: 'tooi', examples: [
            { jp: 'えきからとおいですか', kr: '역에서 먼가요?' },
            { jp: 'すこしとおいですが、あるけます', kr: '조금 멀지만 걸어갈 수 있어요' },
          ]},
          { hiragana: 'ちかい', korean: '가깝다', romaji: 'chikai', examples: [
            { jp: 'ホテルはえきからちかいです', kr: '호텔은 역에서 가까워요' },
          ]},
          { hiragana: 'ちず', korean: '지도', romaji: 'chizu', examples: [
            { jp: 'ちずをみせてもらえますか', kr: '지도를 보여주실 수 있나요?' },
            { jp: 'スマホでちずをみます', kr: '스마트폰으로 지도를 봐요' },
          ]},
        ]
      },
      {
        name: '쇼핑',
        words: [
          { hiragana: 'いくら', korean: '얼마', romaji: 'ikura', examples: [
            { jp: 'これはいくらですか', kr: '이것은 얼마예요?' },
            { jp: 'ぜんぶでいくらですか', kr: '전부 다 해서 얼마예요?' },
          ]},
          { hiragana: 'たかい', korean: '비싸다/높다', romaji: 'takai', examples: [
            { jp: 'すこしたかいですね', kr: '조금 비싸네요' },
            { jp: 'このかばんはたかすぎます', kr: '이 가방은 너무 비싸요' },
          ]},
          { hiragana: 'やすい', korean: '싸다', romaji: 'yasui', examples: [
            { jp: 'このみせはやすいですね', kr: '이 가게는 싸네요' },
            { jp: 'もうすこしやすくなりますか', kr: '조금 더 싸게 해주실 수 있나요?' },
          ]},
          { hiragana: 'おおきい', korean: '크다', romaji: 'ookii', examples: [
            { jp: 'もうすこしおおきいサイズはありますか', kr: '조금 더 큰 사이즈 있나요?' },
          ]},
          { hiragana: 'ちいさい', korean: '작다', romaji: 'chiisai', examples: [
            { jp: 'このサイズはちいさすぎます', kr: '이 사이즈는 너무 작아요' },
            { jp: 'もうすこしちいさいものはありますか', kr: '조금 더 작은 것 있나요?' },
          ]},
          { hiragana: 'みせ', korean: '가게', romaji: 'mise', examples: [
            { jp: 'このちかくにいいみせはありますか', kr: '이 근처에 좋은 가게 있나요?' },
            { jp: 'あのみせはなんじにあきますか', kr: '저 가게는 몇 시에 열어요?' },
          ]},
          { hiragana: 'かいもの', korean: '쇼핑', romaji: 'kaimono', examples: [
            { jp: 'かいものにいきませんか', kr: '쇼핑하러 가지 않을래요?' },
            { jp: 'きょうはかいものをしました', kr: '오늘은 쇼핑을 했어요' },
          ]},
          { hiragana: 'これ', korean: '이것', romaji: 'kore', examples: [
            { jp: 'これをください', kr: '이것을 주세요' },
          ]},
          { hiragana: 'それ', korean: '그것', romaji: 'sore', examples: [
            { jp: 'それはなんですか', kr: '그것은 뭐예요?' },
          ]},
          { hiragana: 'あれ', korean: '저것', romaji: 'are', examples: [
            { jp: 'あれをみてください', kr: '저것을 봐주세요' },
          ]},
          { hiragana: 'ください', korean: '주세요', romaji: 'kudasai', examples: [
            { jp: 'みずをください', kr: '물 주세요' },
            { jp: 'すこしまってください', kr: '조금 기다려 주세요' },
          ]},
          { hiragana: 'おかね', korean: '돈', romaji: 'okane', examples: [
            { jp: 'おかねがたりません', kr: '돈이 부족해요' },
            { jp: 'おかねをはらいます', kr: '돈을 낼게요' },
          ]},
        ]
      },
      {
        name: '기본 동사',
        words: [
          { hiragana: 'たべる', korean: '먹다', romaji: 'taberu', examples: [
            { jp: 'いっしょにたべましょう', kr: '같이 먹어요' },
            { jp: 'すしをたべたいです', kr: '스시를 먹고 싶어요' },
          ]},
          { hiragana: 'のむ', korean: '마시다', romaji: 'nomu', examples: [
            { jp: 'みずをのんでください', kr: '물을 마셔주세요' },
            { jp: 'コーヒーをのみますか', kr: '커피 마실래요?' },
          ]},
          { hiragana: 'いく', korean: '가다', romaji: 'iku', examples: [
            { jp: 'どこにいきますか', kr: '어디에 가나요?' },
            { jp: 'いっしょにいきましょう', kr: '같이 갑시다' },
          ]},
          { hiragana: 'くる', korean: '오다', romaji: 'kuru', examples: [
            { jp: 'なんじにきますか', kr: '몇 시에 오나요?' },
            { jp: 'ともだちがきました', kr: '친구가 왔어요' },
          ]},
          { hiragana: 'みる', korean: '보다', romaji: 'miru', examples: [
            { jp: 'えいがをみませんか', kr: '영화 보지 않을래요?' },
            { jp: 'ちょっとみてもいいですか', kr: '잠깐 봐도 될까요?' },
          ]},
          { hiragana: 'きく', korean: '듣다', romaji: 'kiku', examples: [
            { jp: 'おんがくをきくのがすきです', kr: '음악 듣는 것을 좋아해요' },
            { jp: 'ちょっときいてもいいですか', kr: '잠깐 물어봐도 될까요?' },
          ]},
          { hiragana: 'はなす', korean: '말하다', romaji: 'hanasu', examples: [
            { jp: 'にほんごではなせますか', kr: '일본어로 말할 수 있나요?' },
            { jp: 'ゆっくりはなしてください', kr: '천천히 말해 주세요' },
          ]},
          { hiragana: 'かく', korean: '쓰다', romaji: 'kaku', examples: [
            { jp: 'なまえをかいてください', kr: '이름을 써주세요' },
            { jp: 'かんじがかけません', kr: '한자를 못 써요' },
          ]},
          { hiragana: 'よむ', korean: '읽다', romaji: 'yomu', examples: [
            { jp: 'このかんじはよめますか', kr: '이 한자를 읽을 수 있나요?' },
            { jp: 'まいにちほんをよみます', kr: '매일 책을 읽어요' },
          ]},
          { hiragana: 'かう', korean: '사다', romaji: 'kau', examples: [
            { jp: 'おみやげをかいたいです', kr: '기념품을 사고 싶어요' },
            { jp: 'どこでかえますか', kr: '어디서 살 수 있나요?' },
          ]},
          { hiragana: 'する', korean: '하다', romaji: 'suru', examples: [
            { jp: 'なにをしますか', kr: '무엇을 하나요?' },
            { jp: 'しゅくだいをしました', kr: '숙제를 했어요' },
          ]},
          { hiragana: 'ある', korean: '있다(사물)', romaji: 'aru', examples: [
            { jp: 'このちかくにコンビニはありますか', kr: '이 근처에 편의점 있나요?' },
            { jp: 'じかんがあります', kr: '시간이 있어요' },
          ]},
          { hiragana: 'いる', korean: '있다(사람)', romaji: 'iru', examples: [
            { jp: 'だれかいますか', kr: '누군가 있나요?' },
            { jp: 'ともだちがえきにいます', kr: '친구가 역에 있어요' },
          ]},
          { hiragana: 'ねる', korean: '자다', romaji: 'neru', examples: [
            { jp: 'なんじにねますか', kr: '몇 시에 자나요?' },
            { jp: 'はやくねてください', kr: '일찍 주무세요' },
          ]},
          { hiragana: 'おきる', korean: '일어나다', romaji: 'okiru', examples: [
            { jp: 'まいあさはやくおきます', kr: '매일 아침 일찍 일어나요' },
            { jp: 'なんじにおきますか', kr: '몇 시에 일어나나요?' },
          ]},
          { hiragana: 'あるく', korean: '걷다', romaji: 'aruku', examples: [
            { jp: 'えきまであるいていきます', kr: '역까지 걸어서 가요' },
            { jp: 'まいにちさんぽであるきます', kr: '매일 산책으로 걸어요' },
          ]},
        ]
      },
      {
        name: '기본 형용사·부사',
        words: [
          { hiragana: 'いい', korean: '좋다', romaji: 'ii', examples: [
            { jp: 'いいてんきですね', kr: '날씨 좋네요' },
            { jp: 'それはいいですね', kr: '그거 좋네요' },
          ]},
          { hiragana: 'わるい', korean: '나쁘다', romaji: 'warui', examples: [
            { jp: 'きょうはてんきがわるいですね', kr: '오늘은 날씨가 나쁘네요' },
            { jp: 'わるかったです、すみません', kr: '잘못했어요, 죄송합니다' },
          ]},
          { hiragana: 'あつい', korean: '덥다/뜨겁다', romaji: 'atsui', examples: [
            { jp: 'きょうはとてもあついですね', kr: '오늘은 정말 덥네요' },
            { jp: 'このスープはあついですよ', kr: '이 수프는 뜨거워요' },
          ]},
          { hiragana: 'さむい', korean: '춥다', romaji: 'samui', examples: [
            { jp: 'そとはさむいですね', kr: '밖은 춥네요' },
            { jp: 'さむいのでコートをきてください', kr: '추우니까 코트를 입어주세요' },
          ]},
          { hiragana: 'あたらしい', korean: '새롭다', romaji: 'atarashii', examples: [
            { jp: 'あたらしいくつをかいました', kr: '새 신발을 샀어요' },
            { jp: 'あたらしいレストランにいきたいです', kr: '새 레스토랑에 가고 싶어요' },
          ]},
          { hiragana: 'ふるい', korean: '오래되다', romaji: 'furui', examples: [
            { jp: 'このまちはふるいですね', kr: '이 마을은 오래됐네요' },
            { jp: 'ふるいきっさてんがすきです', kr: '오래된 카페를 좋아해요' },
          ]},
          { hiragana: 'はやい', korean: '빠르다/이르다', romaji: 'hayai', examples: [
            { jp: 'もうすこしはやくいってください', kr: '조금 더 빨리 말해 주세요' },
            { jp: 'まだはやいですよ', kr: '아직 일러요' },
          ]},
          { hiragana: 'おそい', korean: '느리다/늦다', romaji: 'osoi', examples: [
            { jp: 'すみません、おそくなりました', kr: '죄송합니다, 늦었어요' },
            { jp: 'もうすこしゆっくり、おそくはなしてください', kr: '조금 더 천천히 말해 주세요' },
          ]},
          { hiragana: 'おおい', korean: '많다', romaji: 'ooi', examples: [
            { jp: 'ひとがおおいですね', kr: '사람이 많네요' },
            { jp: 'しごとがおおくてたいへんです', kr: '일이 많아서 힘들어요' },
          ]},
          { hiragana: 'すくない', korean: '적다', romaji: 'sukunai', examples: [
            { jp: 'じかんがすくないです', kr: '시간이 적어요' },
            { jp: 'おかねがすくなくなりました', kr: '돈이 적어졌어요' },
          ]},
          { hiragana: 'たのしい', korean: '즐겁다', romaji: 'tanoshii', examples: [
            { jp: 'きょうはたのしかったです', kr: '오늘은 즐거웠어요' },
            { jp: 'たのしいりょこうでした', kr: '즐거운 여행이었어요' },
          ]},
          { hiragana: 'むずかしい', korean: '어렵다', romaji: 'muzukashii', examples: [
            { jp: 'にほんごはむずかしいですね', kr: '일본어는 어렵네요' },
            { jp: 'このもんだいはむずかしすぎます', kr: '이 문제는 너무 어려워요' },
          ]},
          { hiragana: 'かんたん', korean: '간단하다', romaji: 'kantan', examples: [
            { jp: 'このりょうりはかんたんにつくれます', kr: '이 요리는 간단하게 만들 수 있어요' },
            { jp: 'かんたんなにほんごではなしてください', kr: '간단한 일본어로 말해 주세요' },
          ]},
          { hiragana: 'とても', korean: '매우', romaji: 'totemo', examples: [
            { jp: 'とてもおいしいです', kr: '매우 맛있어요' },
            { jp: 'きょうはとてもたのしかったです', kr: '오늘은 매우 즐거웠어요' },
          ]},
          { hiragana: 'すこし', korean: '조금', romaji: 'sukoshi', examples: [
            { jp: 'すこしまってください', kr: '조금 기다려 주세요' },
            { jp: 'にほんごがすこしはなせます', kr: '일본어를 조금 할 수 있어요' },
          ]},
          { hiragana: 'もう', korean: '이미/더', romaji: 'mou', examples: [
            { jp: 'もうたべました', kr: '이미 먹었어요' },
            { jp: 'もうすこしください', kr: '조금 더 주세요' },
          ]},
        ]
      }
    ]
  },
  {
    id: 'intermediate',
    title: '중급 회화 100',
    description: '자연스러운 대화를 위한 중급 표현',
    level: '중급',
    themes: [
      {
        name: '감정·상태',
        words: [
          { hiragana: 'うれしい', korean: '기쁘다', romaji: 'ureshii', examples: [
            { jp: 'プレゼントをもらってうれしい', kr: '선물을 받아서 기쁘다' },
            { jp: 'あなたにあえてうれしいです', kr: '당신을 만나서 기뻐요' },
          ]},
          { hiragana: 'かなしい', korean: '슬프다', romaji: 'kanashii', examples: [
            { jp: 'わかれてかなしかった', kr: '헤어져서 슬펐다' },
            { jp: 'かなしいえいがをみた', kr: '슬픈 영화를 봤다' },
          ]},
          { hiragana: 'さびしい', korean: '외롭다', romaji: 'sabishii', examples: [
            { jp: 'ひとりでさびしい', kr: '혼자라서 외롭다' },
            { jp: 'ともだちがいなくてさびしい', kr: '친구가 없어서 외롭다' },
          ]},
          { hiragana: 'つかれた', korean: '피곤하다', romaji: 'tsukareta', examples: [
            { jp: 'きょうはすごくつかれた', kr: '오늘은 너무 피곤하다' },
            { jp: 'しごとでつかれた', kr: '일 때문에 피곤하다' },
          ]},
          { hiragana: 'こわい', korean: '무섭다', romaji: 'kowai', examples: [
            { jp: 'くらいところがこわい', kr: '어두운 곳이 무섭다' },
            { jp: 'そのはなしはこわかった', kr: '그 이야기는 무서웠다' },
          ]},
          { hiragana: 'はずかしい', korean: '부끄럽다', romaji: 'hazukashii', examples: [
            { jp: 'まちがえてはずかしかった', kr: '틀려서 부끄러웠다' },
            { jp: 'ひとまえではなすのがはずかしい', kr: '사람들 앞에서 말하는 게 부끄럽다' },
          ]},
          { hiragana: 'くやしい', korean: '분하다', romaji: 'kuyashii', examples: [
            { jp: 'まけてくやしい', kr: '져서 분하다' },
            { jp: 'もうすこしでできたのにくやしい', kr: '조금만 더 했으면 됐는데 분하다' },
          ]},
          { hiragana: 'なつかしい', korean: '그립다', romaji: 'natsukashii', examples: [
            { jp: 'こどものころがなつかしい', kr: '어린 시절이 그립다' },
            { jp: 'このきょくをきくとなつかしい', kr: '이 곡을 들으면 그립다' },
          ]},
          { hiragana: 'きもちいい', korean: '기분 좋다', romaji: 'kimochiii', examples: [
            { jp: 'かぜがきもちいい', kr: '바람이 기분 좋다' },
            { jp: 'おふろにはいってきもちいい', kr: '목욕하니 기분 좋다' },
          ]},
          { hiragana: 'しんぱい', korean: '걱정', romaji: 'shinpai', examples: [
            { jp: 'しんぱいしないでください', kr: '걱정하지 마세요' },
            { jp: 'けんこうがしんぱいだ', kr: '건강이 걱정된다' },
          ]},
          { hiragana: 'あんしん', korean: '안심', romaji: 'anshin', examples: [
            { jp: 'あんしんしました', kr: '안심했어요' },
            { jp: 'それをきいてあんしんした', kr: '그 말을 듣고 안심했다' },
          ]},
          { hiragana: 'きたい', korean: '기대', romaji: 'kitai', examples: [
            { jp: 'りょこうがきたいです', kr: '여행이 기대돼요' },
            { jp: 'たのしみにきたいしています', kr: '즐겁게 기대하고 있어요' },
          ]},
          { hiragana: 'びっくり', korean: '깜짝 놀람', romaji: 'bikkuri', examples: [
            { jp: 'びっくりした！', kr: '깜짝 놀랐어!' },
            { jp: 'そのニュースにびっくりした', kr: '그 뉴스에 깜짝 놀랐다' },
          ]},
          { hiragana: 'がまん', korean: '참음/인내', romaji: 'gaman', examples: [
            { jp: 'もうがまんできない', kr: '더 이상 못 참겠다' },
            { jp: 'いたいけどがまんした', kr: '아프지만 참았다' },
          ]},
        ]
      },
      {
        name: '직장·비즈니스',
        words: [
          { hiragana: 'しごと', korean: '일/직장', romaji: 'shigoto', examples: [
            { jp: 'しごとがおわった', kr: '일이 끝났다' },
            { jp: 'しごとはどうですか', kr: '일은 어때요?' },
          ]},
          { hiragana: 'かいぎ', korean: '회의', romaji: 'kaigi', examples: [
            { jp: 'かいぎにでる', kr: '회의에 참석하다' },
            { jp: 'かいぎはなんじですか', kr: '회의는 몇 시예요?' },
          ]},
          { hiragana: 'でんわ', korean: '전화', romaji: 'denwa', examples: [
            { jp: 'でんわしてください', kr: '전화해 주세요' },
            { jp: 'でんわにでられなかった', kr: '전화를 받지 못했다' },
          ]},
          { hiragana: 'メール', korean: '이메일', romaji: 'meeru', examples: [
            { jp: 'メールをおくった', kr: '이메일을 보냈다' },
            { jp: 'メールをかくにんしてください', kr: '이메일을 확인해 주세요' },
          ]},
          { hiragana: 'やくそく', korean: '약속', romaji: 'yakusoku', examples: [
            { jp: 'やくそくをまもる', kr: '약속을 지키다' },
            { jp: 'きょうやくそくがある', kr: '오늘 약속이 있다' },
          ]},
          { hiragana: 'じかん', korean: '시간', romaji: 'jikan', examples: [
            { jp: 'じかんがない', kr: '시간이 없다' },
            { jp: 'じかんをまもってください', kr: '시간을 지켜 주세요' },
          ]},
          { hiragana: 'よてい', korean: '예정/계획', romaji: 'yotei', examples: [
            { jp: 'こんしゅうのよていはなんですか', kr: '이번 주 예정이 뭐예요?' },
            { jp: 'よていがかわった', kr: '예정이 바뀌었다' },
          ]},
          { hiragana: 'しめきり', korean: '마감', romaji: 'shimekiri', examples: [
            { jp: 'しめきりはいつですか', kr: '마감은 언제예요?' },
            { jp: 'しめきりにまにあった', kr: '마감에 맞췄다' },
          ]},
          { hiragana: 'れんらく', korean: '연락', romaji: 'renraku', examples: [
            { jp: 'あとでれんらくします', kr: '나중에 연락할게요' },
            { jp: 'れんらくがなかった', kr: '연락이 없었다' },
          ]},
          { hiragana: 'そうだん', korean: '상담', romaji: 'soudan', examples: [
            { jp: 'そうだんがあります', kr: '상담할 게 있어요' },
            { jp: 'じょうしにそうだんした', kr: '상사에게 상담했다' },
          ]},
          { hiragana: 'せつめい', korean: '설명', romaji: 'setsumei', examples: [
            { jp: 'もういちどせつめいしてください', kr: '다시 한번 설명해 주세요' },
            { jp: 'せつめいがわかりやすかった', kr: '설명이 이해하기 쉬웠다' },
          ]},
          { hiragana: 'かくにん', korean: '확인', romaji: 'kakunin', examples: [
            { jp: 'かくにんしました', kr: '확인했습니다' },
            { jp: 'もういちどかくにんします', kr: '다시 한번 확인할게요' },
          ]},
          { hiragana: 'しゅっちょう', korean: '출장', romaji: 'shucchou', examples: [
            { jp: 'らいしゅうしゅっちょうです', kr: '다음 주 출장이에요' },
            { jp: 'とうきょうにしゅっちょうした', kr: '도쿄에 출장 갔다' },
          ]},
          { hiragana: 'きゅうけい', korean: '휴식', romaji: 'kyuukei', examples: [
            { jp: 'きゅうけいしましょう', kr: '쉬어요' },
            { jp: 'すこしきゅうけいがひつよう', kr: '잠깐 휴식이 필요하다' },
          ]},
          { hiragana: 'ざんぎょう', korean: '야근', romaji: 'zangyou', examples: [
            { jp: 'きょうもざんぎょうだ', kr: '오늘도 야근이다' },
            { jp: 'ざんぎょうがつづいている', kr: '야근이 계속되고 있다' },
          ]},
        ]
      },
      {
        name: '건강·병원',
        words: [
          { hiragana: 'びょういん', korean: '병원', romaji: 'byouin', examples: [
            { jp: 'びょういんにいった', kr: '병원에 갔다' },
            { jp: 'びょういんはどこですか', kr: '병원은 어디예요?' },
          ]},
          { hiragana: 'くすり', korean: '약', romaji: 'kusuri', examples: [
            { jp: 'くすりをのんだ', kr: '약을 먹었다' },
            { jp: 'このくすりはよくきく', kr: '이 약은 잘 듣는다' },
          ]},
          { hiragana: 'ねつ', korean: '열', romaji: 'netsu', examples: [
            { jp: 'ねつがある', kr: '열이 있다' },
            { jp: 'ねつがさがった', kr: '열이 내렸다' },
          ]},
          { hiragana: 'せき', korean: '기침', romaji: 'seki', examples: [
            { jp: 'せきがとまらない', kr: '기침이 멈추지 않는다' },
            { jp: 'せきがひどい', kr: '기침이 심하다' },
          ]},
          { hiragana: 'あたま', korean: '머리', romaji: 'atama', examples: [
            { jp: 'あたまがいたい', kr: '머리가 아프다' },
            { jp: 'あたまがいい', kr: '머리가 좋다' },
          ]},
          { hiragana: 'おなか', korean: '배', romaji: 'onaka', examples: [
            { jp: 'おなかがすいた', kr: '배가 고프다' },
            { jp: 'おなかがいたい', kr: '배가 아프다' },
          ]},
          { hiragana: 'いたい', korean: '아프다', romaji: 'itai', examples: [
            { jp: 'あしがいたい', kr: '발이 아프다' },
            { jp: 'いたいのでびょういんにいく', kr: '아파서 병원에 간다' },
          ]},
          { hiragana: 'かぜ', korean: '감기', romaji: 'kaze', examples: [
            { jp: 'かぜをひいた', kr: '감기에 걸렸다' },
            { jp: 'かぜがなおった', kr: '감기가 나았다' },
          ]},
          { hiragana: 'アレルギー', korean: '알레르기', romaji: 'arerugii', examples: [
            { jp: 'アレルギーがある', kr: '알레르기가 있다' },
            { jp: 'はなのアレルギーがひどい', kr: '꽃가루 알레르기가 심하다' },
          ]},
          { hiragana: 'けが', korean: '부상', romaji: 'kega', examples: [
            { jp: 'けがをした', kr: '부상을 당했다' },
            { jp: 'けがはおもくない', kr: '부상은 심하지 않다' },
          ]},
          { hiragana: 'きぶん', korean: '기분/컨디션', romaji: 'kibun', examples: [
            { jp: 'きぶんがわるい', kr: '기분이 안 좋다' },
            { jp: 'きょうはきぶんがいい', kr: '오늘은 기분이 좋다' },
          ]},
          { hiragana: 'げんき', korean: '건강한/원기', romaji: 'genki', examples: [
            { jp: 'げんきですか', kr: '건강하세요?' },
            { jp: 'げんきになった', kr: '건강해졌다' },
          ]},
        ]
      },
      {
        name: '여행·관광',
        words: [
          { hiragana: 'ホテル', korean: '호텔', romaji: 'hoteru', examples: [
            { jp: 'ホテルをよやくした', kr: '호텔을 예약했다' },
            { jp: 'このホテルはきれいだ', kr: '이 호텔은 깨끗하다' },
          ]},
          { hiragana: 'よやく', korean: '예약', romaji: 'yoyaku', examples: [
            { jp: 'よやくしてありますか', kr: '예약하셨나요?' },
            { jp: 'よやくをとった', kr: '예약을 잡았다' },
          ]},
          { hiragana: 'へや', korean: '방', romaji: 'heya', examples: [
            { jp: 'へやにはいる', kr: '방에 들어가다' },
            { jp: 'へやがひろい', kr: '방이 넓다' },
          ]},
          { hiragana: 'かんこう', korean: '관광', romaji: 'kankou', examples: [
            { jp: 'かんこうにきた', kr: '관광하러 왔다' },
            { jp: 'かんこうスポットをまわった', kr: '관광 명소를 돌아다녔다' },
          ]},
          { hiragana: 'おみやげ', korean: '기념품/선물', romaji: 'omiyage', examples: [
            { jp: 'おみやげをかった', kr: '기념품을 샀다' },
            { jp: 'おみやげをわたした', kr: '선물을 건넸다' },
          ]},
          { hiragana: 'しゃしん', korean: '사진', romaji: 'shashin', examples: [
            { jp: 'しゃしんをとってください', kr: '사진 찍어 주세요' },
            { jp: 'しゃしんをみせてください', kr: '사진 보여 주세요' },
          ]},
          { hiragana: 'にもつ', korean: '짐', romaji: 'nimotsu', examples: [
            { jp: 'にもつがおおい', kr: '짐이 많다' },
            { jp: 'にもつをあずける', kr: '짐을 맡기다' },
          ]},
          { hiragana: 'パスポート', korean: '여권', romaji: 'pasupooto', examples: [
            { jp: 'パスポートをみせてください', kr: '여권을 보여 주세요' },
            { jp: 'パスポートをなくした', kr: '여권을 잃어버렸다' },
          ]},
          { hiragana: 'あんない', korean: '안내', romaji: 'annai', examples: [
            { jp: 'あんないしてください', kr: '안내해 주세요' },
            { jp: 'あんないじょはどこですか', kr: '안내소는 어디예요?' },
          ]},
          { hiragana: 'おんせん', korean: '온천', romaji: 'onsen', examples: [
            { jp: 'おんせんにはいった', kr: '온천에 들어갔다' },
            { jp: 'おんせんがきもちよかった', kr: '온천이 기분 좋았다' },
          ]},
          { hiragana: 'じんじゃ', korean: '신사', romaji: 'jinja', examples: [
            { jp: 'じんじゃにおまいりした', kr: '신사에 참배했다' },
            { jp: 'ゆうめいなじんじゃをみた', kr: '유명한 신사를 봤다' },
          ]},
          { hiragana: 'おてら', korean: '절', romaji: 'otera', examples: [
            { jp: 'おてらにいった', kr: '절에 갔다' },
            { jp: 'おてらがしずかだった', kr: '절이 조용했다' },
          ]},
          { hiragana: 'けしき', korean: '경치', romaji: 'keshiki', examples: [
            { jp: 'けしきがきれいだ', kr: '경치가 아름답다' },
            { jp: 'やまのけしきがすばらしい', kr: '산의 경치가 멋지다' },
          ]},
          { hiragana: 'きねん', korean: '기념', romaji: 'kinen', examples: [
            { jp: 'きねんにしゃしんをとった', kr: '기념으로 사진을 찍었다' },
            { jp: 'きねんひんをかった', kr: '기념품을 샀다' },
          ]},
        ]
      },
      {
        name: '날씨·자연',
        words: [
          { hiragana: 'てんき', korean: '날씨', romaji: 'tenki', examples: [
            { jp: 'きょうはいいてんきですね', kr: '오늘은 날씨가 좋네요' },
            { jp: 'てんきがかわりやすい', kr: '날씨가 변하기 쉽다' },
          ]},
          { hiragana: 'あめ', korean: '비', romaji: 'ame', examples: [
            { jp: 'あめがふっている', kr: '비가 내리고 있다' },
            { jp: 'あめがやんだ', kr: '비가 그쳤다' },
          ]},
          { hiragana: 'ゆき', korean: '눈', romaji: 'yuki', examples: [
            { jp: 'ゆきがふった', kr: '눈이 내렸다' },
            { jp: 'ゆきあそびをした', kr: '눈놀이를 했다' },
          ]},
          { hiragana: 'かぜ', korean: '바람', romaji: 'kaze', examples: [
            { jp: 'かぜがつよい', kr: '바람이 강하다' },
            { jp: 'きもちいいかぜがふいている', kr: '기분 좋은 바람이 불고 있다' },
          ]},
          { hiragana: 'はれ', korean: '맑음', romaji: 'hare', examples: [
            { jp: 'あしたははれるといいな', kr: '내일은 맑으면 좋겠다' },
            { jp: 'はれたのでそとにでた', kr: '맑아서 밖에 나갔다' },
          ]},
          { hiragana: 'くもり', korean: '흐림', romaji: 'kumori', examples: [
            { jp: 'きょうはくもりだ', kr: '오늘은 흐리다' },
            { jp: 'くもりのひはすずしい', kr: '흐린 날은 시원하다' },
          ]},
          { hiragana: 'うみ', korean: '바다', romaji: 'umi', examples: [
            { jp: 'うみにいきたい', kr: '바다에 가고 싶다' },
            { jp: 'うみがきれいだった', kr: '바다가 아름다웠다' },
          ]},
          { hiragana: 'やま', korean: '산', romaji: 'yama', examples: [
            { jp: 'やまにのぼった', kr: '산에 올랐다' },
            { jp: 'やまのけしきがすばらしい', kr: '산의 경치가 멋지다' },
          ]},
          { hiragana: 'かわ', korean: '강', romaji: 'kawa', examples: [
            { jp: 'かわのそばをさんぽした', kr: '강가를 산책했다' },
            { jp: 'かわでさかなをつった', kr: '강에서 물고기를 낚았다' },
          ]},
          { hiragana: 'はな', korean: '꽃', romaji: 'hana', examples: [
            { jp: 'はながきれいにさいている', kr: '꽃이 예쁘게 피어 있다' },
            { jp: 'はなをかった', kr: '꽃을 샀다' },
          ]},
          { hiragana: 'さくら', korean: '벚꽃', romaji: 'sakura', examples: [
            { jp: 'さくらがさいた', kr: '벚꽃이 피었다' },
            { jp: 'さくらをみにいった', kr: '벚꽃 구경하러 갔다' },
          ]},
          { hiragana: 'そら', korean: '하늘', romaji: 'sora', examples: [
            { jp: 'そらがあおい', kr: '하늘이 파랗다' },
            { jp: 'そらをみあげた', kr: '하늘을 올려다봤다' },
          ]},
        ]
      },
      {
        name: '취미·여가',
        words: [
          { hiragana: 'しゅみ', korean: '취미', romaji: 'shumi', examples: [
            { jp: 'しゅみはなんですか', kr: '취미가 뭐예요?' },
            { jp: 'しゅみでりょうりをする', kr: '취미로 요리를 한다' },
          ]},
          { hiragana: 'えいが', korean: '영화', romaji: 'eiga', examples: [
            { jp: 'えいがをみにいこう', kr: '영화 보러 가자' },
            { jp: 'そのえいがはおもしろかった', kr: '그 영화는 재미있었다' },
          ]},
          { hiragana: 'おんがく', korean: '음악', romaji: 'ongaku', examples: [
            { jp: 'おんがくをきくのがすきだ', kr: '음악 듣는 걸 좋아한다' },
            { jp: 'どんなおんがくがすきですか', kr: '어떤 음악을 좋아해요?' },
          ]},
          { hiragana: 'りょこう', korean: '여행', romaji: 'ryokou', examples: [
            { jp: 'りょこうにいきたい', kr: '여행가고 싶다' },
            { jp: 'りょこうのけいかくをたてた', kr: '여행 계획을 세웠다' },
          ]},
          { hiragana: 'どくしょ', korean: '독서', romaji: 'dokusho', examples: [
            { jp: 'どくしょがすきです', kr: '독서를 좋아해요' },
            { jp: 'まいにちどくしょをする', kr: '매일 독서를 한다' },
          ]},
          { hiragana: 'りょうり', korean: '요리', romaji: 'ryouri', examples: [
            { jp: 'りょうりをつくった', kr: '요리를 만들었다' },
            { jp: 'りょうりがとくいです', kr: '요리를 잘해요' },
          ]},
          { hiragana: 'うんどう', korean: '운동', romaji: 'undou', examples: [
            { jp: 'まいにちうんどうしている', kr: '매일 운동하고 있다' },
            { jp: 'うんどうがたりない', kr: '운동이 부족하다' },
          ]},
          { hiragana: 'さんぽ', korean: '산책', romaji: 'sanpo', examples: [
            { jp: 'いぬとさんぽした', kr: '강아지와 산책했다' },
            { jp: 'こうえんをさんぽする', kr: '공원을 산책하다' },
          ]},
          { hiragana: 'カラオケ', korean: '노래방', romaji: 'karaoke', examples: [
            { jp: 'カラオケにいこう', kr: '노래방 가자' },
            { jp: 'カラオケでうたうのがすきだ', kr: '노래방에서 노래 부르는 걸 좋아한다' },
          ]},
          { hiragana: 'ゲーム', korean: '게임', romaji: 'geemu', examples: [
            { jp: 'ゲームをするのがたのしい', kr: '게임하는 게 즐겁다' },
            { jp: 'いっしょにゲームをしよう', kr: '같이 게임하자' },
          ]},
          { hiragana: 'スポーツ', korean: '스포츠', romaji: 'supootsu', examples: [
            { jp: 'スポーツがすきですか', kr: '스포츠를 좋아해요?' },
            { jp: 'スポーツをみるのがすきだ', kr: '스포츠 보는 걸 좋아한다' },
          ]},
          { hiragana: 'ドラマ', korean: '드라마', romaji: 'dorama', examples: [
            { jp: 'かんこくのドラマをみている', kr: '한국 드라마를 보고 있다' },
            { jp: 'そのドラマはおもしろい', kr: '그 드라마는 재미있다' },
          ]},
          { hiragana: 'まんが', korean: '만화', romaji: 'manga', examples: [
            { jp: 'まんがをよむのがすきだ', kr: '만화 읽는 걸 좋아한다' },
            { jp: 'このまんがはゆうめいだ', kr: '이 만화는 유명하다' },
          ]},
          { hiragana: 'つり', korean: '낚시', romaji: 'tsuri', examples: [
            { jp: 'つりにいった', kr: '낚시하러 갔다' },
            { jp: 'かわでつりをした', kr: '강에서 낚시를 했다' },
          ]},
        ]
      },
      {
        name: '의견·대화 표현',
        words: [
          { hiragana: 'おもう', korean: '생각하다', romaji: 'omou', examples: [
            { jp: 'そうおもいます', kr: '그렇게 생각해요' },
            { jp: 'どうおもいますか', kr: '어떻게 생각해요?' },
          ]},
          { hiragana: 'かんがえる', korean: '생각하다/고민하다', romaji: 'kangaeru', examples: [
            { jp: 'もうすこしかんがえます', kr: '좀 더 생각할게요' },
            { jp: 'よくかんがえてから、けっていした', kr: '잘 생각하고 나서 결정했다' },
          ]},
          { hiragana: 'さんせい', korean: '찬성', romaji: 'sansei', examples: [
            { jp: 'わたしもさんせいです', kr: '저도 찬성이에요' },
            { jp: 'そのいけんにさんせいする', kr: '그 의견에 찬성한다' },
          ]},
          { hiragana: 'はんたい', korean: '반대', romaji: 'hantai', examples: [
            { jp: 'ちょっとはんたいです', kr: '좀 반대예요' },
            { jp: 'はんたいのいけんもある', kr: '반대 의견도 있다' },
          ]},
          { hiragana: 'りゆう', korean: '이유', romaji: 'riyuu', examples: [
            { jp: 'りゆうをおしえてください', kr: '이유를 알려 주세요' },
            { jp: 'りゆうがわからない', kr: '이유를 모르겠다' },
          ]},
          { hiragana: 'いけん', korean: '의견', romaji: 'iken', examples: [
            { jp: 'いけんをきかせてください', kr: '의견을 들려 주세요' },
            { jp: 'いろんないけんがある', kr: '다양한 의견이 있다' },
          ]},
          { hiragana: 'たぶん', korean: '아마', romaji: 'tabun', examples: [
            { jp: 'たぶんだいじょうぶです', kr: '아마 괜찮을 거예요' },
            { jp: 'たぶんくるとおもう', kr: '아마 올 것 같아' },
          ]},
          { hiragana: 'ぜったい', korean: '절대', romaji: 'zettai', examples: [
            { jp: 'ぜったいにいく', kr: '절대 갈 거야' },
            { jp: 'ぜったいだいじょうぶ', kr: '절대 괜찮아' },
          ]},
          { hiragana: 'もちろん', korean: '물론', romaji: 'mochiron', examples: [
            { jp: 'もちろんいいですよ', kr: '물론 좋아요' },
            { jp: 'もちろんしっています', kr: '물론 알고 있어요' },
          ]},
          { hiragana: 'じつは', korean: '사실은', romaji: 'jitsuwa', examples: [
            { jp: 'じつはしらなかった', kr: '사실은 몰랐어' },
            { jp: 'じつはすきじゃない', kr: '사실은 별로 안 좋아해' },
          ]},
          { hiragana: 'たとえば', korean: '예를 들면', romaji: 'tatoeba', examples: [
            { jp: 'たとえばこんなかんじです', kr: '예를 들면 이런 느낌이에요' },
            { jp: 'たとえばどんなこと？', kr: '예를 들면 어떤 거?' },
          ]},
          { hiragana: 'つまり', korean: '즉', romaji: 'tsumari', examples: [
            { jp: 'つまりどういうこと？', kr: '즉 무슨 말이야?' },
            { jp: 'つまりむりということですか', kr: '즉 무리라는 말인가요?' },
          ]},
          { hiragana: 'やっぱり', korean: '역시', romaji: 'yappari', examples: [
            { jp: 'やっぱりそうだった', kr: '역시 그랬구나' },
            { jp: 'やっぱりこれがいちばんいい', kr: '역시 이게 제일 좋다' },
          ]},
          { hiragana: 'なるほど', korean: '그렇구나', romaji: 'naruhodo', examples: [
            { jp: 'なるほど、そういうことか', kr: '그렇구나, 그런 거구나' },
            { jp: 'なるほどとおもった', kr: '그렇구나 싶었다' },
          ]},
          { hiragana: 'ところで', korean: '그런데', romaji: 'tokorode', examples: [
            { jp: 'ところで、きょうのよていは？', kr: '그런데 오늘 예정은?' },
            { jp: 'ところでしごとはどう？', kr: '그런데 일은 어때?' },
          ]},
        ]
      }
    ]
  },
  {
    id: 'advanced',
    title: '고급 회화 100',
    description: '네이티브에 가까운 자연스러운 표현',
    level: '고급',
    themes: [
      {
        name: '비즈니스 경어',
        words: [
          { hiragana: 'おつかれさまです', korean: '수고하셨습니다', romaji: 'otsukaresama desu', examples: [
            { jp: 'きょうもおつかれさまです', kr: '오늘도 수고하셨습니다' },
          ]},
          { hiragana: 'おせわになっております', korean: '신세를 지고 있습니다', romaji: 'osewa ni natte orimasu', examples: [
            { jp: 'いつもおせわになっております', kr: '항상 신세를 지고 있습니다' },
          ]},
          { hiragana: 'しつれいいたします', korean: '실례하겠습니다', romaji: 'shitsurei itashimasu', examples: [
            { jp: 'おさきにしつれいいたします', kr: '먼저 실례하겠습니다' },
          ]},
          { hiragana: 'かしこまりました', korean: '알겠습니다(겸양)', romaji: 'kashikomarimashita', examples: [
            { jp: 'かしこまりました、すぐにたいおうします', kr: '알겠습니다, 바로 대응하겠습니다' },
          ]},
          { hiragana: 'おまたせいたしました', korean: '오래 기다리셨습니다', romaji: 'omatase itashimashita', examples: [
            { jp: 'おまたせいたしました、こちらがしりょうです', kr: '오래 기다리셨습니다, 이쪽이 자료입니다' },
          ]},
          { hiragana: 'ごけんとう', korean: '검토', romaji: 'gokentou', examples: [
            { jp: 'ごけんとうのほど、よろしくおねがいします', kr: '검토해 주시기 바랍니다' },
          ]},
          { hiragana: 'ごりかい', korean: '이해(존경)', romaji: 'gorikai', examples: [
            { jp: 'ごりかいいただきありがとうございます', kr: '이해해 주셔서 감사합니다' },
          ]},
          { hiragana: 'おてすう', korean: '수고/번거로움', romaji: 'otesuu', examples: [
            { jp: 'おてすうですが、かくにんをおねがいします', kr: '번거로우시겠지만 확인 부탁드립니다' },
          ]},
          { hiragana: 'もうしわけございません', korean: '대단히 죄송합니다', romaji: 'moushiwake gozaimasen', examples: [
            { jp: 'おくれてしまい、もうしわけございません', kr: '늦어서 대단히 죄송합니다' },
          ]},
          { hiragana: 'さしつかえなければ', korean: '괜찮으시다면', romaji: 'sashitsukaenakereba', examples: [
            { jp: 'さしつかえなければ、りゆうをおしえていただけますか', kr: '괜찮으시다면 이유를 알려주실 수 있을까요' },
          ]},
          { hiragana: 'ごていあん', korean: '제안(존경)', romaji: 'goteian', examples: [
            { jp: 'ごていあんをいただきありがとうございます', kr: '제안해 주셔서 감사합니다' },
          ]},
          { hiragana: 'うけたまわる', korean: '듣다/받다(겸양)', romaji: 'uketamawaru', examples: [
            { jp: 'ごよういけんをうけたまわります', kr: '소중한 의견을 듣겠습니다' },
          ]},
          { hiragana: 'おっしゃる', korean: '말씀하시다(존경)', romaji: 'ossharu', examples: [
            { jp: 'おっしゃるとおりです', kr: '말씀하신 대로입니다' },
          ]},
          { hiragana: 'いらっしゃる', korean: '계시다(존경)', romaji: 'irassharu', examples: [
            { jp: 'しゃちょうはいまいらっしゃいますか', kr: '사장님은 지금 계십니까' },
          ]},
        ]
      },
      {
        name: '감정·심리 표현',
        words: [
          { hiragana: 'せつない', korean: '애틋하다/가슴 아프다', romaji: 'setsunai', examples: [
            { jp: 'わかれのばめんがせつない', kr: '이별 장면이 가슴 아프다' },
            { jp: 'このうたをきくとせつないきもちになる', kr: '이 노래를 들으면 애틋한 기분이 든다' },
          ]},
          { hiragana: 'もどかしい', korean: '답답하다/안타깝다', romaji: 'modokashii', examples: [
            { jp: 'うまくつたわらなくてもどかしい', kr: '잘 전달이 안 돼서 답답하다' },
          ]},
          { hiragana: 'なさけない', korean: '한심하다', romaji: 'nasakenai', examples: [
            { jp: 'じぶんでもなさけないとおもう', kr: '나 자신도 한심하다고 생각한다' },
          ]},
          { hiragana: 'うんざり', korean: '질리다/넌더리', romaji: 'unzari', examples: [
            { jp: 'まいにちおなじことのくりかえしでうんざりする', kr: '매일 같은 일의 반복이라 넌더리가 난다' },
          ]},
          { hiragana: 'すっきり', korean: '개운하다/상쾌하다', romaji: 'sukkiri', examples: [
            { jp: 'はなしたらすっきりした', kr: '털어놓으니 속이 시원했다' },
            { jp: 'あさシャワーをあびてすっきりした', kr: '아침에 샤워를 하고 상쾌해졌다' },
          ]},
          { hiragana: 'どきどき', korean: '두근두근', romaji: 'dokidoki', examples: [
            { jp: 'はっぴょうのまえはどきどきする', kr: '발표 전에는 두근두근한다' },
          ]},
          { hiragana: 'わくわく', korean: '설레다/신나다', romaji: 'wakuwaku', examples: [
            { jp: 'りょこうのまえはわくわくする', kr: '여행 전에는 설렌다' },
          ]},
          { hiragana: 'いらいら', korean: '짜증나다/초조하다', romaji: 'iraira', examples: [
            { jp: 'まちすぎていらいらする', kr: '너무 기다려서 짜증난다' },
          ]},
          { hiragana: 'うっとうしい', korean: '짜증스럽다/귀찮다', romaji: 'uttoushii', examples: [
            { jp: 'あめのひはうっとうしいきぶんになる', kr: '비 오는 날은 짜증스러운 기분이 된다' },
          ]},
          { hiragana: 'ほっとする', korean: '안도하다', romaji: 'hotto suru', examples: [
            { jp: 'しけんがおわってほっとした', kr: '시험이 끝나서 안도했다' },
          ]},
          { hiragana: 'しみじみ', korean: '새삼/절실히', romaji: 'shimijimi', examples: [
            { jp: 'としをとってしみじみかんじることがふえた', kr: '나이가 들면서 절실히 느끼는 일이 늘었다' },
          ]},
          { hiragana: 'あきれる', korean: '어이없다/기가 막히다', romaji: 'akireru', examples: [
            { jp: 'またおなじまちがいをしてあきれた', kr: '또 같은 실수를 해서 어이가 없었다' },
          ]},
          { hiragana: 'てれくさい', korean: '쑥스럽다', romaji: 'terekusai', examples: [
            { jp: 'ほめられるとてれくさい', kr: '칭찬받으면 쑥스럽다' },
          ]},
          { hiragana: 'みじめ', korean: '비참하다/초라하다', romaji: 'mijime', examples: [
            { jp: 'ひとりでいるとみじめなきぶんになる', kr: '혼자 있으면 비참한 기분이 든다' },
          ]},
        ]
      },
      {
        name: '사회·시사',
        words: [
          { hiragana: 'けいざい', korean: '경제', romaji: 'keizai', examples: [
            { jp: 'にほんのけいざいはいまどうですか', kr: '일본 경제는 지금 어떻습니까' },
          ]},
          { hiragana: 'せいじ', korean: '정치', romaji: 'seiji', examples: [
            { jp: 'せいじのはなしはむずかしい', kr: '정치 이야기는 어렵다' },
          ]},
          { hiragana: 'かんきょう', korean: '환경', romaji: 'kankyou', examples: [
            { jp: 'かんきょうもんだいはせかいぜんたいのかだいだ', kr: '환경 문제는 전 세계의 과제다' },
          ]},
          { hiragana: 'ぎじゅつ', korean: '기술', romaji: 'gijutsu', examples: [
            { jp: 'にほんのものづくりぎじゅつはすばらしい', kr: '일본의 제조 기술은 훌륭하다' },
          ]},
          { hiragana: 'しゃかい', korean: '사회', romaji: 'shakai', examples: [
            { jp: 'しゃかいにでてからいろいろまなんだ', kr: '사회에 나온 후 여러 가지를 배웠다' },
          ]},
          { hiragana: 'きょういく', korean: '교육', romaji: 'kyouiku', examples: [
            { jp: 'きょういくのかたちがかわってきている', kr: '교육의 형태가 변해오고 있다' },
          ]},
          { hiragana: 'ぶんか', korean: '문화', romaji: 'bunka', examples: [
            { jp: 'にほんのぶんかにきょうみがある', kr: '일본 문화에 흥미가 있다' },
          ]},
          { hiragana: 'こくさい', korean: '국제', romaji: 'kokusai', examples: [
            { jp: 'こくさいてきなしごとをしたい', kr: '국제적인 일을 하고 싶다' },
          ]},
          { hiragana: 'じんこう', korean: '인구', romaji: 'jinkou', examples: [
            { jp: 'にほんのじんこうはへりつづけている', kr: '일본의 인구는 계속 줄고 있다' },
          ]},
          { hiragana: 'エネルギー', korean: '에너지', romaji: 'enerugii', examples: [
            { jp: 'さいせいかのうエネルギーがちゅうもくされている', kr: '재생 가능 에너지가 주목받고 있다' },
          ]},
          { hiragana: 'かちかん', korean: '가치관', romaji: 'kachikan', examples: [
            { jp: 'ひとによってかちかんはちがう', kr: '사람마다 가치관이 다르다' },
          ]},
          { hiragana: 'じゆう', korean: '자유', romaji: 'jiyuu', examples: [
            { jp: 'じぶんのじゆうをたいせつにしたい', kr: '자신의 자유를 소중히 하고 싶다' },
          ]},
          { hiragana: 'へいわ', korean: '평화', romaji: 'heiwa', examples: [
            { jp: 'せかいのへいわをねがっている', kr: '세계 평화를 바라고 있다' },
          ]},
          { hiragana: 'さべつ', korean: '차별', romaji: 'sabetsu', examples: [
            { jp: 'さべつはぜったいにあってはならない', kr: '차별은 절대 있어서는 안 된다' },
          ]},
        ]
      },
      {
        name: '관용구·숙어',
        words: [
          { hiragana: 'きがきく', korean: '눈치가 빠르다', romaji: 'ki ga kiku', examples: [
            { jp: 'あのひとはきがきくからたよりになる', kr: '저 사람은 눈치가 빨라서 믿음직하다' },
          ]},
          { hiragana: 'てをぬく', korean: '대충 하다/손을 빼다', romaji: 'te wo nuku', examples: [
            { jp: 'しごとでてをぬくのはよくない', kr: '일에서 대충 하는 것은 좋지 않다' },
          ]},
          { hiragana: 'くちがかるい', korean: '입이 가볍다', romaji: 'kuchi ga karui', examples: [
            { jp: 'かれはくちがかるいからひみつをはなせない', kr: '그는 입이 가벼워서 비밀을 말할 수 없다' },
          ]},
          { hiragana: 'はらがたつ', korean: '화가 나다', romaji: 'hara ga tatsu', examples: [
            { jp: 'うそをつかれてはらがたった', kr: '거짓말을 들어서 화가 났다' },
          ]},
          { hiragana: 'めをつぶる', korean: '눈감아 주다', romaji: 'me wo tsuburu', examples: [
            { jp: 'こんどだけめをつぶってやる', kr: '이번 한 번만 눈감아 주겠다' },
          ]},
          { hiragana: 'あしをひっぱる', korean: '발목을 잡다', romaji: 'ashi wo hipparu', examples: [
            { jp: 'チームのあしをひっぱりたくない', kr: '팀의 발목을 잡고 싶지 않다' },
          ]},
          { hiragana: 'かおがひろい', korean: '얼굴이 넓다/인맥이 넓다', romaji: 'kao ga hiroi', examples: [
            { jp: 'ぶちょうはかおがひろくていろんなひとをしっている', kr: '부장님은 인맥이 넓어서 여러 사람을 알고 있다' },
          ]},
          { hiragana: 'きがおもい', korean: '마음이 무겁다', romaji: 'ki ga omoi', examples: [
            { jp: 'たいせつなはなしをするまえはきがおもい', kr: '중요한 이야기를 하기 전에는 마음이 무겁다' },
          ]},
          { hiragana: 'みみにする', korean: '귀에 들리다/듣게 되다', romaji: 'mimi ni suru', examples: [
            { jp: 'さいきんそんなはなしをよくみみにする', kr: '요즘 그런 이야기를 자주 듣게 된다' },
          ]},
          { hiragana: 'むねをはる', korean: '가슴을 펴다/자랑하다', romaji: 'mune wo haru', examples: [
            { jp: 'むねをはっていえることをしたい', kr: '당당하게 말할 수 있는 일을 하고 싶다' },
          ]},
          { hiragana: 'こしがひくい', korean: '겸손하다', romaji: 'koshi ga hikui', examples: [
            { jp: 'あのかちょうはこしがひくくてしたわれている', kr: '저 과장님은 겸손해서 존경받는다' },
          ]},
          { hiragana: 'うでがいい', korean: '솜씨가 좋다', romaji: 'ude ga ii', examples: [
            { jp: 'このりょうりにんはほんとうにうでがいい', kr: '이 요리사는 정말 솜씨가 좋다' },
          ]},
          { hiragana: 'ねをあげる', korean: '항복하다/포기하다', romaji: 'ne wo ageru', examples: [
            { jp: 'さいごまであきらめずにねをあげなかった', kr: '끝까지 포기하지 않고 버텼다' },
          ]},
          { hiragana: 'はなしがはずむ', korean: '이야기가 잘 통하다', romaji: 'hanashi ga hazumu', examples: [
            { jp: 'きゅうゆうとあうといつもはなしがはずむ', kr: '오랜 친구와 만나면 항상 이야기가 잘 통한다' },
          ]},
        ]
      },
      {
        name: '접속사·논리 표현',
        words: [
          { hiragana: 'したがって', korean: '따라서', romaji: 'shitagatte', examples: [
            { jp: 'けっかがわるかった。したがって、もういちどやりなおす', kr: '결과가 나빴다. 따라서 다시 한번 해야겠다' },
          ]},
          { hiragana: 'すなわち', korean: '즉/다시 말하면', romaji: 'sunawachi', examples: [
            { jp: 'かれはわたしのあに、すなわちかぞくだ', kr: '그는 내 오빠, 즉 가족이다' },
          ]},
          { hiragana: 'いっぽう', korean: '한편', romaji: 'ippou', examples: [
            { jp: 'こっちはよくなった。いっぽう、むこうはまだだ', kr: '이쪽은 나아졌다. 한편, 저쪽은 아직이다' },
          ]},
          { hiragana: 'それにたいして', korean: '그에 반해', romaji: 'soreni taishite', examples: [
            { jp: 'あには外こうてきだ。それにたいして、わたしはひっこみじあんだ', kr: '형은 외향적이다. 그에 반해 나는 소심하다' },
          ]},
          { hiragana: 'むしろ', korean: '오히려', romaji: 'mushiro', examples: [
            { jp: 'つかれているどころか、むしろげんきだ', kr: '피곤하기는커녕 오히려 기운이 넘친다' },
          ]},
          { hiragana: 'かならずしも', korean: '반드시~는 아니다', romaji: 'kanarazushimo', examples: [
            { jp: 'たかいものがかならずしもいいとはかぎらない', kr: '비싼 것이 반드시 좋다고는 할 수 없다' },
          ]},
          { hiragana: 'いずれにしても', korean: '어쨌든', romaji: 'izureni shitemo', examples: [
            { jp: 'いずれにしても、はやくけっていしなければならない', kr: '어쨌든 빨리 결정해야 한다' },
          ]},
          { hiragana: 'そもそも', korean: '애초에/원래', romaji: 'somosomo', examples: [
            { jp: 'そもそもなぜそんなことをしたのか', kr: '애초에 왜 그런 일을 한 것인가' },
          ]},
          { hiragana: 'あるいは', korean: '또는/혹은', romaji: 'aruiwa', examples: [
            { jp: 'でんわ、あるいはメールでれんらくください', kr: '전화 또는 메일로 연락해 주세요' },
          ]},
          { hiragana: 'さらに', korean: '더욱/게다가', romaji: 'sarani', examples: [
            { jp: 'さらにくわしいじょうほうがほしい', kr: '더욱 자세한 정보가 필요하다' },
          ]},
          { hiragana: 'ただし', korean: '단', romaji: 'tadashi', examples: [
            { jp: 'さんかできます。ただし、じかんがあればです', kr: '참가할 수 있습니다. 단, 시간이 있으면요' },
          ]},
          { hiragana: 'なぜなら', korean: '왜냐하면', romaji: 'nazenara', examples: [
            { jp: 'いきたくない。なぜなら、つかれているからだ', kr: '가고 싶지 않다. 왜냐하면 피곤하기 때문이다' },
          ]},
          { hiragana: 'けっきょく', korean: '결국', romaji: 'kekkyoku', examples: [
            { jp: 'けっきょく、なにもかわらなかった', kr: '결국 아무것도 바뀌지 않았다' },
          ]},
          { hiragana: 'ようするに', korean: '요컨대', romaji: 'yousuruni', examples: [
            { jp: 'ようするに、もっとどりょくしろということだ', kr: '요컨대 더 노력하라는 것이다' },
          ]},
          { hiragana: 'とはいえ', korean: '그렇다고는 해도', romaji: 'towaie', examples: [
            { jp: 'むずかしい。とはいえ、やってみるしかない', kr: '어렵다. 그렇다고는 해도 해볼 수밖에 없다' },
          ]},
        ]
      },
      {
        name: '미묘한 뉘앙스 부사',
        words: [
          { hiragana: 'なんとなく', korean: '왠지/어쩐지', romaji: 'nantonaku', examples: [
            { jp: 'なんとなくきょうはいいことがありそうだ', kr: '왠지 오늘은 좋은 일이 있을 것 같다' },
          ]},
          { hiragana: 'いちおう', korean: '일단/우선', romaji: 'ichiou', examples: [
            { jp: 'いちおうれんらくしておいた', kr: '일단 연락해 두었다' },
          ]},
          { hiragana: 'せっかく', korean: '모처럼/일부러', romaji: 'sekkaku', examples: [
            { jp: 'せっかくきたのだからたのしもう', kr: '모처럼 왔으니 즐기자' },
          ]},
          { hiragana: 'まさか', korean: '설마', romaji: 'masaka', examples: [
            { jp: 'まさかかれがそんなことをするとはおもわなかった', kr: '설마 그가 그런 일을 할 줄은 몰랐다' },
          ]},
          { hiragana: 'さすが', korean: '역시/과연', romaji: 'sasuga', examples: [
            { jp: 'さすがプロ、ちがうね', kr: '역시 프로는 다르네' },
          ]},
          { hiragana: 'どうやら', korean: '아무래도/어쩐지', romaji: 'douyara', examples: [
            { jp: 'どうやらかぜをひいたようだ', kr: '아무래도 감기에 걸린 것 같다' },
          ]},
          { hiragana: 'いきなり', korean: '갑자기/느닷없이', romaji: 'ikinari', examples: [
            { jp: 'いきなりなにをいうんですか', kr: '갑자기 무슨 말을 하는 거예요' },
          ]},
          { hiragana: 'わざわざ', korean: '일부러/굳이', romaji: 'wazawaza', examples: [
            { jp: 'わざわざきてくれてありがとう', kr: '일부러 와줘서 고마워' },
          ]},
          { hiragana: 'もともと', korean: '원래/본래', romaji: 'motomoto', examples: [
            { jp: 'もともとそんなつもりはなかった', kr: '원래 그런 생각은 없었다' },
          ]},
          { hiragana: 'あくまで', korean: '어디까지나', romaji: 'akumade', examples: [
            { jp: 'これはあくまでもわたしのいけんです', kr: '이것은 어디까지나 제 의견입니다' },
          ]},
          { hiragana: 'たまたま', korean: '우연히', romaji: 'tamatama', examples: [
            { jp: 'たまたまえきでむかしのともだちにあった', kr: '우연히 역에서 옛 친구를 만났다' },
          ]},
          { hiragana: 'めったに', korean: '좀처럼~않다', romaji: 'mettani', examples: [
            { jp: 'かれはめったにおこらない', kr: '그는 좀처럼 화를 내지 않는다' },
          ]},
          { hiragana: 'つい', korean: '그만/무심코', romaji: 'tsui', examples: [
            { jp: 'ついよけいなことをいってしまった', kr: '그만 쓸데없는 말을 해버렸다' },
          ]},
          { hiragana: 'まさに', korean: '바로/정확히', romaji: 'masani', examples: [
            { jp: 'それはまさにわたしがかんがえていたことだ', kr: '그것은 바로 내가 생각하고 있던 것이다' },
          ]},
        ]
      },
      {
        name: '구어체·일상 고급 표현',
        words: [
          { hiragana: 'ぶっちゃけ', korean: '솔직히 말해서', romaji: 'bucchake', examples: [
            { jp: 'ぶっちゃけ、それはむりだとおもう', kr: '솔직히 말해서 그건 무리라고 생각해' },
          ]},
          { hiragana: 'めんどくさい', korean: '귀찮다', romaji: 'mendokusai', examples: [
            { jp: 'てつづきがめんどくさくてあきらめた', kr: '절차가 귀찮아서 포기했다' },
          ]},
          { hiragana: 'ちなみに', korean: '참고로/덧붙이면', romaji: 'chinamini', examples: [
            { jp: 'ちなみに、わたしもそこにいったことがある', kr: '참고로 나도 거기에 간 적이 있어' },
          ]},
          { hiragana: 'なるべく', korean: '되도록/가능한 한', romaji: 'narubeku', examples: [
            { jp: 'なるべくはやくかえします', kr: '되도록 빨리 돌려드리겠습니다' },
          ]},
          { hiragana: 'けっこうです', korean: '괜찮습니다/됐습니다', romaji: 'kekkou desu', examples: [
            { jp: 'おかわりはけっこうです', kr: '리필은 됐습니다' },
          ]},
          { hiragana: 'まあまあ', korean: '그럭저럭/그저 그래', romaji: 'maamaa', examples: [
            { jp: 'さいきんのちょうしはどう？まあまあかな', kr: '요즘 컨디션은 어때? 그럭저럭이야' },
          ]},
          { hiragana: 'しょうがない', korean: '어쩔 수 없다', romaji: 'shouganai', examples: [
            { jp: 'おくれてしまったけど、しょうがない', kr: '늦어버렸지만 어쩔 수 없다' },
          ]},
          { hiragana: 'とりあえず', korean: '우선/일단', romaji: 'toriaezu', examples: [
            { jp: 'とりあえずすわってはなそう', kr: '일단 앉아서 이야기하자' },
          ]},
          { hiragana: 'かえって', korean: '오히려/도리어', romaji: 'kaette', examples: [
            { jp: 'たすけようとしてかえってじゃまになった', kr: '도우려다 오히려 방해가 됐다' },
          ]},
          { hiragana: 'さっぱり', korean: '전혀/깔끔하게', romaji: 'sappari', examples: [
            { jp: 'さっぱりわからない', kr: '전혀 모르겠다' },
            { jp: 'シャワーをあびてさっぱりした', kr: '샤워하고 나서 깔끔해졌다' },
          ]},
          { hiragana: 'あいかわらず', korean: '여전히/변함없이', romaji: 'aikawarazu', examples: [
            { jp: 'あいかわらずげんきそうだね', kr: '여전히 건강해 보이네' },
          ]},
          { hiragana: 'おかげさまで', korean: '덕분에', romaji: 'okagesamade', examples: [
            { jp: 'おかげさまで、げんきにしております', kr: '덕분에 잘 지내고 있습니다' },
          ]},
          { hiragana: 'いっそ', korean: '차라리', romaji: 'isso', examples: [
            { jp: 'いっそのこと、やめてしまおうか', kr: '차라리 그냥 그만둘까' },
          ]},
        ]
      }
    ]
  }
];
