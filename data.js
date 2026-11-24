const LAB_DATA = [
  {
    "id": "wbc",
    "group": "血算",
    "abbr": "WBC",
    "name": "白血球数",
    "en": "White blood cell count",
    "range": "3,300–8,600 /μL（3.3–8.6 ×10³/μL）",
    "meaning": "感染防御を担う血球の数。炎症や骨髄の反応をみる手掛かりです。",
    "high": "感染・組織損傷・手術後のストレスなどで増加。ステロイドでも上昇します。",
    "low": "薬剤や骨髄機能低下、ウイルス感染、重症感染などで減少します。",
    "symptoms": "高値そのものが発熱を起こすわけではなく、背景の感染・炎症により倦怠感や悪寒が現れます。重症感染では息切れ、頻脈、混乱など全身の変化を伴うことがあります。低値でも症状が乏しい場合があります。",
    "related": [
      "neut",
      "lymph",
      "crp",
      "pct"
    ],
    "context": "肺炎・術後・感染症の経過では体温、白血球分画、CRPの推移と併読します。",
    "caution": "高値＝細菌感染ではなく、正常値でも感染は否定できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "combination": "WBCと好中球の絶対数・分画、CRPの推移を併読。炎症の程度が一致しない場合は採血時期やステロイドなどの影響を考えます。",
    "aliases": "白血球 白血球数 leukocyte",
    "diseasesHigh": [
      {
        "name": "肺炎・誤嚥性肺炎、尿路感染症",
        "why": "感染刺激への反応で白血球が増加することがあります。"
      },
      {
        "name": "手術・外傷後",
        "why": "組織損傷やストレスでも増加します。"
      },
      {
        "name": "ステロイド使用",
        "why": "白血球の分布変化などにより上昇することがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "薬剤性骨髄抑制",
        "why": "抗がん薬などで血球産生が低下します。"
      },
      {
        "name": "ウイルス感染・重症感染",
        "why": "感染によっては低下することもあります。"
      }
    ],
    "rehabExamples": [
      "昨日より会話への反応が悪く、身支度の手が止まる。",
      "短い移動で普段にない息切れや強い疲労を訴える。"
    ],
    "observations": [
      "体温・心拍・呼吸・血圧の前日からの変化。",
      "新たな悪寒、咳・痰、排尿時の訴えなど。",
      "覚醒・注意、食事摂取や活動参加の変化。",
      "白血球分画・CRPと薬剤、採血時期。"
    ],
    "pitfalls": "WBCが高いから感染、正常だから安全とは判断しません。新たな全身状態の悪化は数値の変化を待たず共有します。"
  },
  {
    "id": "rbc",
    "group": "血算",
    "abbr": "RBC",
    "name": "赤血球数",
    "en": "Red blood cell count",
    "range": "男性435–555、女性386–492 ×10⁴/μL",
    "meaning": "酸素を運ぶ赤血球の数。Hbと合わせて理解します。",
    "high": "血液濃縮や赤血球産生増加で高くなります。",
    "low": "出血、産生低下、溶血、輸液による希釈などで低下します。",
    "symptoms": "赤血球が少なくHbも低い場合は、動作時の息切れ、動悸、疲労、めまいなどにつながり得ます。RBCの数だけでは酸素運搬能力や症状の強さは決まりません。軽度または緩徐な変化では無症状のこともあります。",
    "related": [
      "hb",
      "ht",
      "mcv"
    ],
    "context": "出血・術後ではHbとHt、輸液・輸血の時期を照合します。",
    "caution": "赤血球の大きさやHb量で解釈が変わり、RBC単独で貧血の程度を判定しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms",
      "https://www.nhlbi.nih.gov/health/anemia"
    ],
    "combination": "Hbで貧血の程度を、MCVで赤血球の大きさを補足。RBCだけの増減では酸素運搬量を決めません。",
    "aliases": "赤血球 赤血球数 erythrocyte",
    "diseasesHigh": [
      {
        "name": "脱水・血液濃縮",
        "why": "血漿の水分が減り相対的に高くなります。"
      },
      {
        "name": "慢性低酸素に伴う赤血球増加",
        "why": "長期の低酸素への反応で赤血球産生が増える場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "鉄欠乏性貧血",
        "why": "Hbの材料となる鉄の不足で造血が制限されます。"
      },
      {
        "name": "出血・術後出血",
        "why": "赤血球の喪失が関わり、濃度変化には輸液や採血時期も影響します。"
      },
      {
        "name": "腎性貧血・慢性炎症に伴う貧血",
        "why": "造血刺激の不足や鉄利用の変化などが関わります。"
      }
    ],
    "rehabExamples": [
      "更衣の途中で休憩を求める。",
      "立位で「ふわっとする」と訴える。"
    ],
    "observations": [
      "Hb・Htと赤血球指数の組み合わせ。",
      "動作の前後の息切れ・脈拍・疲労。",
      "顔色と立位時の症状。",
      "出血・輸液・輸血のタイミング。"
    ],
    "pitfalls": "RBCが保たれていても小さい赤血球ではHbが少ないことがあります。数だけで活動耐容能を決めません。"
  },
  {
    "id": "hb",
    "group": "血算",
    "abbr": "Hb / Hgb",
    "name": "ヘモグロビン",
    "en": "Hemoglobin",
    "range": "男性13.7–16.8、女性11.6–14.8 g/dL",
    "meaning": "赤血球内で酸素を運ぶ蛋白の濃度。貧血の程度を理解する中心的項目です。",
    "high": "脱水などの血液濃縮、赤血球増加で高値になります。",
    "low": "出血・鉄欠乏・慢性炎症・腎機能低下・溶血など。輸液による希釈でも低下します。",
    "symptoms": "低値では易疲労感、息切れ、動悸、顔色不良、めまいが現れ得ます。安静時に目立たず、動作で症状が出ることもあります。低下速度や心肺の状態によって同じHbでも症状は異なります。",
    "related": [
      "rbc",
      "ht",
      "mcv",
      "rdw",
      "cr"
    ],
    "context": "術後や抗凝固療法中は出血と経時変化を確認。慢性腎臓病では造血に関わる機能低下も背景になります。",
    "caution": "SpO₂が保たれていてもHb低下による酸素運搬量低下はあり得ます。急性出血直後は低下が十分表れない場合があります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms",
      "https://www.nhlbi.nih.gov/health/anemia"
    ],
    "combination": "Hb低下をMCV・MCH・RDWで補足し、Htの推移や輸液・出血の経過と照合。原因は単一とは限りません。",
    "aliases": "Hgb ヘモグロビン 血色素",
    "diseasesHigh": [
      {
        "name": "脱水・血液濃縮",
        "why": "血漿の水分が減り相対的に高くなります。"
      },
      {
        "name": "慢性低酸素に伴う赤血球増加",
        "why": "長期の低酸素への反応で赤血球産生が増える場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "鉄欠乏性貧血",
        "why": "Hbの材料となる鉄の不足で造血が制限されます。"
      },
      {
        "name": "出血・術後出血",
        "why": "赤血球の喪失が関わり、濃度変化には輸液や採血時期も影響します。"
      },
      {
        "name": "腎性貧血・慢性炎症に伴う貧血",
        "why": "造血刺激の不足や鉄利用の変化などが関わります。"
      }
    ],
    "rehabExamples": [
      "トイレへの移動だけで息が上がる。",
      "洗面・更衣を続けると動悸や疲労が増える。"
    ],
    "observations": [
      "同じ動作に対する息切れ・心拍・自覚的疲労と回復時間。",
      "立位時のめまい、顔色、冷汗。",
      "前回からのHb低下と出血の情報。",
      "術後、輸液・輸血前後の値。"
    ],
    "pitfalls": "廃用だけで説明しないこと。SpO₂が保たれていてもHb低下による酸素運搬量低下はあり、Hb単独の一律な活動可否判定も避けます。"
  },
  {
    "id": "ht",
    "group": "血算",
    "abbr": "Ht / Hct",
    "name": "ヘマトクリット",
    "en": "Hematocrit",
    "range": "男性40.7–50.1、女性35.1–44.4 %",
    "meaning": "血液容積に占める赤血球の割合。Hbとともに血球量と体液の影響をみます。",
    "high": "脱水による血液濃縮や赤血球増加。",
    "low": "貧血、出血、輸液による希釈。",
    "symptoms": "Ht自体の異常に固有の症状はありません。貧血なら息切れや疲れ、体液変化があればめまいなど、背景に応じた症状を伴います。値の変化と症状の変化が一致しないこともあります。",
    "related": [
      "hb",
      "rbc",
      "bun",
      "na"
    ],
    "context": "利尿・輸液・出血の前後では、血球量が不変でも濃度が変化します。",
    "caution": "Htの改善だけでは貧血や脱水の改善を断定できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms"
    ],
    "combination": "Hb・RBCが同じ方向に変化しているか確認。利尿・輸液で濃縮・希釈が起きていないかも合わせます。",
    "aliases": "Hct ヘマトクリット",
    "diseasesHigh": [
      {
        "name": "脱水・血液濃縮",
        "why": "血漿の水分が減り相対的に高くなります。"
      },
      {
        "name": "慢性低酸素に伴う赤血球増加",
        "why": "長期の低酸素への反応で赤血球産生が増える場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "貧血・出血",
        "why": "赤血球量の低下が割合に反映されます。"
      },
      {
        "name": "輸液による希釈",
        "why": "赤血球量が変わらなくても血漿量の増加で低下します。"
      }
    ],
    "rehabExamples": [
      "輸液後にHtが下がったが動作時症状は変わらない。",
      "立ち上がりでめまいがあり、体液・循環の経過を確認する。"
    ],
    "observations": [
      "Hb・RBCと同じ方向に動いているか。",
      "輸液・利尿・出血の経過と体重変化。",
      "体位による症状や血圧変化。"
    ],
    "pitfalls": "Htの上昇を貧血改善、低下を出血と直結させません。濃縮・希釈の影響を合わせます。"
  },
  {
    "id": "mcv",
    "group": "血算",
    "abbr": "MCV",
    "name": "平均赤血球容積",
    "en": "Mean corpuscular volume",
    "range": "83.6–98.2 fL",
    "meaning": "赤血球1個の平均的な大きさ。貧血の性質を整理する補助です。",
    "high": "ビタミンB12・葉酸欠乏、肝疾患、飲酒、薬剤などで大きくなることがあります。",
    "low": "鉄欠乏などで小さくなることがあります。",
    "symptoms": "MCV自体が疲労や息切れを起こすのではなく、Hb低下や背景疾患が症状に関係します。平均的な大きさが正常でも貧血はあります。MCVから症状の強さは分かりません。",
    "related": [
      "hb",
      "mch",
      "mchc",
      "rdw"
    ],
    "context": "Hb低下時に小球性・正球性・大球性という整理に用います。",
    "caution": "基準範囲内でも貧血はあります。複数の原因の混在や輸血で平均値が分かりにくくなります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms"
    ],
    "combination": "まずHbで貧血の有無を確認し、MCVとRDWで平均サイズとばらつきを区別します。",
    "diseasesHigh": [
      {
        "name": "ビタミンB12・葉酸欠乏性貧血",
        "why": "赤血球が大きくなることがあります。"
      },
      {
        "name": "肝疾患・飲酒関連、薬剤の影響",
        "why": "赤血球の大きさが変化する場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "鉄欠乏性貧血",
        "why": "Hb合成の不足に伴い小球性になることがあります。"
      }
    ],
    "rehabExamples": [
      "息切れのある患者で、Hb低下の性質を把握する補助にする。",
      "同じHbでも動作時の訴えが異なるため症状を別に記録する。"
    ],
    "observations": [
      "Hbの程度と動作時の実際の症状。",
      "MCVだけでなくMCH・RDW、輸血歴。",
      "食事・胃腸疾患・飲酒・薬剤など既知の背景。"
    ],
    "pitfalls": "小球性・大球性という分類は原因理解の入口で、活動量を決める指標ではありません。複数原因の混在では平均値が正常に見えます。"
  },
  {
    "id": "mch",
    "group": "血算",
    "abbr": "MCH",
    "name": "平均赤血球血色素量",
    "en": "Mean corpuscular hemoglobin",
    "range": "27.5–33.2 pg",
    "meaning": "赤血球1個に含まれるHbの平均量。",
    "high": "大きい赤血球では高くなりやすく、MCVと併読します。",
    "low": "鉄欠乏などでHbの少ない赤血球が増えると低下します。",
    "symptoms": "MCH単独には特有の症状はありません。貧血の症状はHb濃度や変化速度などに左右されます。高いMCHは酸素運搬能力が良いという意味ではありません。",
    "related": [
      "hb",
      "mcv",
      "mchc"
    ],
    "context": "貧血の性質を補足する項目です。",
    "caution": "単独では貧血の原因や重症度を特定できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms"
    ],
    "combination": "Hb・MCV・MCHCと併読。MCH低値は赤血球1個あたりのHbが少ないことを示します。",
    "diseasesHigh": [
      {
        "name": "大球性貧血を伴う状態",
        "why": "赤血球が大きいと1個あたりHb量も増えやすくなります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "鉄欠乏性貧血",
        "why": "赤血球1個に含まれるHbが減少します。"
      }
    ],
    "rehabExamples": [
      "Hb低下も伴う患者の更衣中の疲れを、MCHだけで説明せず全身所見と照合する。",
      "MCVと併せて既知の貧血の特徴を把握する。"
    ],
    "observations": [
      "Hb・MCV・MCHCとの関係。",
      "息切れや動悸の実際の出現場面。",
      "輸血や造血治療前後の経過。"
    ],
    "pitfalls": "数値が高いほど機能が良いという尺度ではありません。MCHからリハ負荷や貧血の重症度を決めません。"
  },
  {
    "id": "mchc",
    "group": "血算",
    "abbr": "MCHC",
    "name": "平均赤血球血色素濃度",
    "en": "Mean corpuscular hemoglobin concentration",
    "range": "31.7–35.3 g/dL",
    "meaning": "赤血球容積あたりのHb濃度。",
    "high": "球状赤血球などで高くなる場合がありますが、測定への干渉も考慮します。",
    "low": "鉄欠乏などで赤血球のHb濃度が下がると低下します。",
    "symptoms": "MCHCの高低自体に特有の症状はありません。Hb低下を伴う場合は貧血症状、溶血などが背景ならその病態の所見を別にみます。値だけで症状の原因は決まりません。",
    "related": [
      "hb",
      "mcv",
      "mch",
      "rdw"
    ],
    "context": "Hb・Htから算出される指標で、他の赤血球指数と読みます。",
    "caution": "極端な高値は溶血・脂血など検体条件や測定の影響も確認します。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms"
    ],
    "combination": "Hb・Htから算出されるため両者の結果と整合性を確認し、MCV・MCHで赤血球の性質を補います。",
    "diseasesHigh": [
      {
        "name": "球状赤血球を伴う溶血性貧血など",
        "why": "赤血球容積に対するHb濃度が高くなる場合があります。"
      },
      {
        "name": "検体・測定への干渉",
        "why": "脂血や溶血などによる見かけの高値を含みます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "鉄欠乏性貧血",
        "why": "赤血球内Hb濃度が低くなることがあります。"
      }
    ],
    "rehabExamples": [
      "貧血や基礎疾患もある患者の動作時疲労を、Hbと循環・呼吸状態で確認する。",
      "極端な値でも患者の症状と不一致なら検体情報も確認する。"
    ],
    "observations": [
      "Hb・Ht・MCVとの整合性。",
      "検体溶血・脂血などのコメント。",
      "貧血症状と経時変化。"
    ],
    "pitfalls": "単独で稀な血液疾患を推定しません。極端な高値は検査の条件も含めて医療チームと確認します。"
  },
  {
    "id": "rdw",
    "group": "血算",
    "abbr": "RDW-CV / RDW-SD",
    "name": "赤血球分布幅",
    "en": "Red cell distribution width",
    "range": "施設・測定装置依存。RDW-CVの施設例12.3–17.0 %。RDW-SDはfL表記。",
    "meaning": "赤血球の大きさのばらつき。MCVは平均、RDWはばらつきを表します。",
    "high": "鉄欠乏、異なる大きさの赤血球の混在、造血回復・輸血後などで上昇します。",
    "low": "低値そのものの臨床的意義は通常大きくありません。",
    "symptoms": "RDW自体に特有の症状はありません。背景の貧血などにより疲れや息切れが生じ得ますが、RDW高値と症状の強さは直接対応しません。低値単独の意味は通常限定的です。",
    "related": [
      "hb",
      "mcv",
      "rbc"
    ],
    "context": "貧血の経過や輸血の有無と合わせると理解しやすい項目です。",
    "caution": "CVとSDは別指標で単位も異なります。施設例を他施設へそのまま当てはめません。",
    "refs": [
      "https://www.gh.opho.jp/pdf/kijunti0204.pdf",
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0203050.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/anemia/symptoms"
    ],
    "combination": "MCVが正常でもRDWが高いと大小の赤血球が混在する場合があります。Hbと輸血歴も合わせます。",
    "diseasesHigh": [
      {
        "name": "鉄欠乏性貧血・複数原因の貧血",
        "why": "赤血球の大きさのばらつきが増えることがあります。"
      },
      {
        "name": "輸血後・造血回復期",
        "why": "異なる大きさの赤血球が混在します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "輸血を受けた貧血患者の疲労変化は、RDWではなくHbや実動作で確認する。",
      "MCVが正常でも貧血の背景が複数ある可能性を理解する補助にする。"
    ],
    "observations": [
      "Hb・MCVの変化と輸血歴。",
      "同じ測定方式のRDW同士での推移。",
      "実際の活動時症状。"
    ],
    "pitfalls": "RDWは活動耐容能の指標ではありません。RDW-CVとRDW-SDを数値だけで比較しません。"
  },
  {
    "id": "plt",
    "group": "血算",
    "abbr": "PLT",
    "name": "血小板数",
    "en": "Platelet count",
    "range": "15.8–34.8 ×10⁴/μL（158–348 ×10³/μL）",
    "meaning": "血管損傷部で止血に関わる血小板の数。",
    "high": "炎症・術後・鉄欠乏などへの反応、血液疾患などで上昇します。",
    "low": "産生低下、消費増加、薬剤、脾臓への取り込みなど。DICなどでは推移が重要です。",
    "symptoms": "低下や機能異常では点状出血、紫斑、鼻・歯肉からの出血、血尿・黒色便などがみられ得ます。軽い低下では無症状の場合があります。高値でも出血・血栓の有無は別に確認が必要です。",
    "related": [
      "pt",
      "aptt",
      "fibrinogen",
      "ddimer"
    ],
    "context": "術後・感染症・ヘパリン投与中などは基準範囲だけでなく入院時からの減少率も確認します。",
    "caution": "数が正常でも抗血小板薬などで機能は低下し得ます。採血管内での凝集による偽低値もあります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/platelet-disorders/symptoms"
    ],
    "combination": "PT・APTT・フィブリノゲン・Dダイマーと推移を照合。血小板数と凝固因子の検査は別の側面をみています。",
    "aliases": "PLT 血小板数 platelet",
    "diseasesHigh": [
      {
        "name": "手術後・感染炎症、鉄欠乏",
        "why": "反応性に血小板産生が増える場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "DIC（播種性血管内凝固）・重症感染",
        "why": "凝固活性化などによる血小板消費が関わります。"
      },
      {
        "name": "薬剤性・骨髄抑制",
        "why": "産生低下や免疫機序などで減少します。"
      },
      {
        "name": "肝硬変",
        "why": "脾臓への取り込みなどが関わります。"
      }
    ],
    "rehabExamples": [
      "着替えで露出した皮膚に新しい紫斑がある。",
      "口腔ケアで出血が続く、排泄時に血尿・黒い便の情報が得られる。"
    ],
    "observations": [
      "皮下出血の新出・拡大、口腔内や鼻の出血。",
      "創部や穿刺部の出血の有無。",
      "血小板の推移と抗血小板薬・抗凝固薬。",
      "急な頭痛や神経症状など普段にない変化。"
    ],
    "pitfalls": "数が正常でも薬剤により機能は低下し得ます。出血を伴う新たな変化は血小板値だけで片付けず共有します。"
  },
  {
    "id": "neut",
    "group": "血算",
    "abbr": "Neut / Seg / Stab",
    "name": "好中球",
    "en": "Neutrophil",
    "range": "目視分画：分葉核球38–74 %、桿状核球0.5–6.5 %。自動分析のNeutとは区別。",
    "meaning": "白血球の一種で、細菌などを取り込み防御します。",
    "high": "細菌感染・炎症・ストレス・ステロイドなどで増加します。",
    "low": "薬剤・骨髄抑制などで低下し、感染防御低下につながり得ます。",
    "symptoms": "増加自体の症状はなく、感染・炎症が背景なら発熱や倦怠感などが現れます。減少時も自覚症状がないことがあります。感染がある場合は発熱に加え全身状態や覚醒の変化にも注意します。",
    "related": [
      "wbc",
      "crp",
      "pct",
      "lymph"
    ],
    "context": "割合だけでなく、WBC×好中球割合から得られる絶対数も重要です。",
    "caution": "分画の%は他の白血球の増減にも影響されます。目視・自動の基準を混用しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "combination": "WBC全体が低い場合、好中球の割合が正常でも絶対数は少なくなり得ます。CRPと臨床経過も併読します。",
    "aliases": "好中球 Neu Neutro Seg Stab",
    "diseasesHigh": [
      {
        "name": "細菌感染・手術外傷後",
        "why": "感染や侵襲への反応で増加します。"
      },
      {
        "name": "ステロイド使用",
        "why": "循環血中の好中球増加を伴う場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "抗がん薬などによる骨髄抑制",
        "why": "好中球産生が抑えられます。"
      },
      {
        "name": "薬剤性好中球減少",
        "why": "薬剤によって免疫・産生機序を介して低下します。"
      }
    ],
    "rehabExamples": [
      "普段できる整容で急に疲れが強い。",
      "感染症状が乏しい患者でも新たな悪寒や反応低下がある。"
    ],
    "observations": [
      "割合だけでなくWBCを含めた絶対数。",
      "体温と呼吸・循環・覚醒の変化。",
      "口腔・皮膚・排尿など新しい訴え。",
      "薬剤や感染対応の指示。"
    ],
    "pitfalls": "好中球割合が高くても絶対数が多いとは限りません。検査値だけで感染の有無や対面活動の可否は決めません。"
  },
  {
    "id": "lymph",
    "group": "血算",
    "abbr": "Lymph",
    "name": "リンパ球",
    "en": "Lymphocyte",
    "range": "目視分画16.5–49.5 %（施設・方法により異なる）",
    "meaning": "免疫反応に関わる白血球。",
    "high": "ウイルス感染などへの反応や一部の血液疾患で増加します。",
    "low": "急性ストレス、ステロイド、免疫抑制などで減少します。",
    "symptoms": "リンパ球の増減そのものに特有の症状はありません。症状は背景の感染、急性疾患、治療によって異なります。低値でも本人に明らかな訴えがない場合があります。",
    "related": [
      "wbc",
      "neut",
      "crp"
    ],
    "context": "急性期の低下を、直ちに低栄養だけで説明しないことが大切です。",
    "caution": "割合と絶対数を区別。低値のみで栄養状態や免疫能全体を評価できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120"
    ],
    "combination": "WBCと好中球を合わせ、相対的な割合の変化か絶対数の変化かを区別します。",
    "aliases": "Lym リンパ球",
    "diseasesHigh": [
      {
        "name": "ウイルス感染など",
        "why": "免疫反応により増加することがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "急性疾患・手術後のストレス",
        "why": "白血球分布や免疫反応の変化が関わります。"
      },
      {
        "name": "ステロイド・免疫抑制治療",
        "why": "リンパ球が減る場合があります。"
      }
    ],
    "rehabExamples": [
      "倦怠感が強い場合、リンパ球低値だけで理由を決めず全身経過を確認する。",
      "食事量低下があってもリンパ球だけで低栄養と判定しない。"
    ],
    "observations": [
      "WBC・他分画を含めた推移。",
      "感染症状や急性ストレスの経過。",
      "ステロイド等の使用。"
    ],
    "pitfalls": "リンパ球数を栄養状態・免疫能全体の単独指標として使いません。リハ場面の不調との因果を断定しません。"
  },
  {
    "id": "eos",
    "group": "血算",
    "abbr": "Eos / Eosino",
    "name": "好酸球",
    "en": "Eosinophil",
    "range": "目視分画0–8.5 %（施設・方法により異なる）",
    "meaning": "アレルギー反応や寄生虫への反応に関わる白血球。",
    "high": "アレルギー性疾患、薬剤反応、寄生虫感染などで増加します。",
    "low": "ストレスやステロイドで低下することがあります。",
    "symptoms": "背景に喘息があれば咳、喘鳴、息苦しさ、胸の締め付けなどが現れ得ます。薬剤反応では発疹やかゆみなどを伴う場合があります。好酸球高値だけなら無症状のこともあります。",
    "related": [
      "wbc",
      "neut"
    ],
    "context": "喘息・薬疹・新規薬剤導入などの既知の背景と照合します。",
    "caution": "高値＝アレルギーではありません。割合だけでなく絶対数と推移をみます。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120",
      "https://www.nhlbi.nih.gov/health/asthma/symptoms"
    ],
    "combination": "WBCから絶対数を確認し、好中球など他分画の増減で割合が変わっていないか見ます。",
    "aliases": "Eo 好酸球",
    "diseasesHigh": [
      {
        "name": "気管支喘息・アレルギー性疾患",
        "why": "好酸球性炎症を伴うことがあります。"
      },
      {
        "name": "薬剤アレルギー",
        "why": "薬剤反応の一部として増加することがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "ステロイド使用・急性ストレス",
        "why": "低下することがありますが、低値単独の意義は限定的です。"
      }
    ],
    "rehabExamples": [
      "動作に伴い喘鳴や咳が増える。",
      "着替え時に新しい発疹や強いかゆみが分かる。"
    ],
    "observations": [
      "咳・喘鳴・呼吸困難の出現と変化。",
      "発疹の新出、広がり、薬剤開始との時間関係。",
      "好酸球の絶対数・推移。"
    ],
    "pitfalls": "高値だけで喘息や薬剤アレルギーと確定しません。呼吸状態の変化を「アレルギーだから」と軽く扱わないことが重要です。"
  },
  {
    "id": "mono",
    "group": "血算",
    "abbr": "Mono",
    "name": "単球",
    "en": "Monocyte",
    "range": "目視分画2–10 %（施設・方法により異なる）",
    "meaning": "組織ではマクロファージなどとなり、異物処理や免疫反応に関わります。",
    "high": "感染・炎症や回復期などで増加する場合があります。",
    "low": "骨髄抑制・薬剤などの影響で低下する場合があります。",
    "symptoms": "単球の高低自体に特有の症状はありません。発熱・疲労などがあっても単球のみで説明できず、背景疾患の経過をみます。軽い割合の変化だけで状態悪化とはいえません。",
    "related": [
      "wbc",
      "neut",
      "lymph"
    ],
    "context": "白血球分画全体と臨床経過を合わせて理解する補助項目です。",
    "caution": "一回の割合の変化から原因を特定しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120"
    ],
    "combination": "WBCと白血球分画全体を併読し、単球のみの割合の変化を過大解釈しません。",
    "aliases": "Mon 単球",
    "diseasesHigh": [
      {
        "name": "感染・炎症、回復期",
        "why": "免疫応答や組織の処理に伴い増加する場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "骨髄抑制・薬剤の影響",
        "why": "単球が低下することがあります。"
      }
    ],
    "rehabExamples": [
      "感染回復期でも身支度への参加が戻らない理由を全身状態から確認する。",
      "発熱と単球の変化があっても他分画やCRPも確認する。"
    ],
    "observations": [
      "白血球全体と絶対数・推移。",
      "症状・体温と回復経過。",
      "薬剤や骨髄抑制の背景。"
    ],
    "pitfalls": "単球の変化を回復・悪化の単独サインにしません。観察の中心は患者本人の症状と機能の変化です。"
  },
  {
    "id": "baso",
    "group": "血算",
    "abbr": "Baso",
    "name": "好塩基球",
    "en": "Basophil",
    "range": "目視分画0–2.5 %（施設・方法により異なる）",
    "meaning": "ヒスタミンなどを放出し、アレルギー反応に関わる白血球。",
    "high": "アレルギー性疾患や一部の骨髄性疾患などで増加することがあります。",
    "low": "低値だけの意義は通常限定的です。",
    "symptoms": "好塩基球数の変化自体に特徴的な自覚症状はありません。背景にアレルギーなどがあれば、その症状を別に確認します。少数の血球なので小さい割合の変動が目立つ場合があります。",
    "related": [
      "wbc",
      "eos"
    ],
    "context": "通常は少数であり、持続する変化を他の血球所見と合わせます。",
    "caution": "割合の小さな変動を過大解釈しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://www.mayocliniclabs.com/test-catalog/Overview/42120"
    ],
    "combination": "WBCと絶対数、好酸球などの分画を併読し、持続する変化かどうかを確認します。",
    "aliases": "Ba 好塩基球",
    "diseasesHigh": [
      {
        "name": "アレルギー性疾患",
        "why": "増加することがあります。"
      },
      {
        "name": "持続する血球増加を伴う骨髄性疾患",
        "why": "他の血球所見とともに増加する場合があります。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "発疹やかゆみの訴えがあるとき、既知の疾患・薬剤と照合する。",
      "無症状の小さな分画変動を活動中の不調の原因にしない。"
    ],
    "observations": [
      "他の白血球分画と持続性。",
      "皮膚・呼吸症状の有無。",
      "既知の血液疾患や薬剤の背景。"
    ],
    "pitfalls": "好塩基球高値だけから血液疾患やアレルギーを推定しません。低値に特有のリハ観察項目はありません。"
  },
  {
    "id": "crp",
    "group": "炎症",
    "abbr": "CRP",
    "name": "C反応性蛋白",
    "en": "C-reactive protein",
    "range": "0.14 mg/dL以下",
    "meaning": "炎症に応じて主に肝臓で作られる蛋白。炎症の経過をみる指標です。",
    "high": "感染のほか、手術・外傷・組織障害・非感染性炎症でも上昇します。",
    "low": "通常、低値自体の問題はありません。",
    "symptoms": "CRP自体が発熱や痛みを起こすのではありません。背景の炎症により発熱、疼痛、倦怠感、食欲低下などがみられます。感染が重い場合は呼吸・循環や意識の変化を伴い得ます。",
    "related": [
      "wbc",
      "neut",
      "pct",
      "alb"
    ],
    "context": "肺炎・術後などでは発症や処置からの時間、症状と推移を照合します。",
    "caution": "感染部位や原因は分かりません。発症早期には低値のことがあり、数値変化には時間差があります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "combination": "WBC・好中球、必要に応じPCTを合わせ、採血時期の差を考慮。Alb低下も同時にある場合は炎症の影響を考えます。",
    "diseasesHigh": [
      {
        "name": "肺炎・尿路感染症など",
        "why": "感染に伴う炎症反応で増加します。"
      },
      {
        "name": "手術後・外傷・組織障害",
        "why": "感染がなくても炎症反応で上昇します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "手術後の痛み・疲労が日ごとにどう変化しているか確認する。",
      "肺炎患者の更衣や移動で息切れ・疲労が増えていないかみる。"
    ],
    "observations": [
      "体温・呼吸・循環と覚醒の変化。",
      "疼痛部位と咳・痰など既知疾患の症状。",
      "発症・手術日とCRPの推移。",
      "食事量・活動参加の前日からの変化。"
    ],
    "pitfalls": "CRP高値だけで感染悪化、下降だけで活動耐容能回復とは判断しません。検査と症状の変化には時間差があります。"
  },
  {
    "id": "bun",
    "group": "腎機能",
    "abbr": "BUN / UN",
    "name": "尿素窒素",
    "en": "Blood urea nitrogen",
    "range": "8–20 mg/dL",
    "meaning": "蛋白代謝で生じ、主に腎臓から排泄される尿素の窒素量。",
    "high": "腎機能低下、腎血流低下、蛋白異化亢進、消化管出血などで上昇します。",
    "low": "蛋白摂取低下、肝での尿素産生低下、希釈などで低下します。",
    "symptoms": "BUNだけに特有の症状はありません。進んだ腎不全では食欲不振、悪心、かゆみ、疲労、集中しにくさなどを伴うことがあります。脱水や出血など別の背景でも症状は変わります。",
    "related": [
      "cr",
      "egfr",
      "k",
      "ht"
    ],
    "context": "入院初期は脱水・出血・感染による異化、利尿・輸液の影響を合わせます。",
    "caution": "BUN高値やBUN/Cr比だけで脱水と断定しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://jsn.or.jp/general/kidneydisease/symptoms04.php",
      "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
    ],
    "combination": "Crと同時に上がるか、BUNの変化が大きいかを確認。尿量・体液所見・蛋白異化の背景を合わせます。",
    "aliases": "UN 尿素窒素",
    "diseasesHigh": [
      {
        "name": "急性腎障害・慢性腎臓病",
        "why": "尿素の排泄が低下します。"
      },
      {
        "name": "脱水・心不全による腎血流低下",
        "why": "腎への血流や尿素再吸収が変化します。"
      },
      {
        "name": "消化管出血・異化亢進",
        "why": "消化吸収される蛋白や体内蛋白分解が増えます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "蛋白摂取低下・肝合成機能低下",
        "why": "尿素の産生が減ることがあります。"
      },
      {
        "name": "輸液などによる希釈",
        "why": "血中濃度が相対的に低下します。"
      }
    ],
    "rehabExamples": [
      "食欲がなく、食事・整容を続けにくい。",
      "前日よりぼんやりして課題への集中が続かない。"
    ],
    "observations": [
      "尿量や輸液・利尿の経過、体重・浮腫。",
      "食欲・悪心・掻痒、覚醒の変化。",
      "Cr・電解質と前回値。",
      "出血に関する診療情報。"
    ],
    "pitfalls": "BUN/Cr比だけで脱水を決めません。ぼんやりを尿毒症と断定せず、薬剤や他の急性変化も確認します。"
  },
  {
    "id": "cr",
    "group": "腎機能",
    "abbr": "Cr / CRE",
    "name": "クレアチニン",
    "en": "Creatinine",
    "range": "男性0.65–1.07、女性0.46–0.79 mg/dL",
    "meaning": "筋肉由来の代謝産物。腎からの排泄を通じて腎機能を推定する手掛かりです。",
    "high": "腎機能低下や筋障害などで上昇。短期間の上昇は過去値との比較が重要です。",
    "low": "筋肉量低下などで低くなることがあります。",
    "symptoms": "Cr自体の高低に固有の症状はありません。腎機能障害が進むと浮腫、尿量変化、食欲低下、疲労などがみられます。Crが低くても、筋肉量の少ない患者では腎機能が保たれているとは限りません。",
    "related": [
      "bun",
      "egfr",
      "k",
      "ck"
    ],
    "context": "長期臥床や低筋肉量の患者では、Crが低くても腎機能良好とは限りません。",
    "caution": "急性変化ではCr上昇が腎機能変化に遅れることがあります。筋肉量・薬剤・輸液も影響します。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://jsn.or.jp/general/kidneydisease/symptoms04.php",
      "https://pubmed.ncbi.nlm.nih.gov/38490803/",
      "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
    ],
    "combination": "BUN・K・尿量・過去値と併読。筋損傷がある場合はCKも確認します。",
    "aliases": "CRE CREA クレアチニン",
    "diseasesHigh": [
      {
        "name": "急性腎障害・慢性腎臓病",
        "why": "腎からの排泄低下で上昇します。"
      },
      {
        "name": "筋障害",
        "why": "筋由来産物の増加が影響する場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "低筋肉量・長期臥床",
        "why": "産生量が少なくなるため低値となる場合があります。"
      }
    ],
    "rehabExamples": [
      "下肢のむくみが強く、靴や装具の適合が変わる。",
      "全身倦怠や悪心のため身支度が進まない。"
    ],
    "observations": [
      "普段のCrとの差と上昇速度。",
      "尿量・体液管理・体重の経過。",
      "Kなど電解質、覚醒や疲労の変化。",
      "筋肉量、CK、薬剤背景。"
    ],
    "pitfalls": "数値が低いことを健康の指標にしません。急性変化ではCrは遅れて変わるため、患者の新たな症状を優先します。"
  },
  {
    "id": "egfr",
    "group": "腎機能",
    "abbr": "eGFR",
    "name": "推算糸球体濾過量",
    "en": "Estimated glomerular filtration rate",
    "range": "mL/min/1.73 m²。G1：90以上、G2：60–89は分類値であり、単純な正常・異常の境界ではありません。",
    "meaning": "Crなどから推定する腎臓の濾過能力。",
    "high": "Crに基づく値は筋肉量が少ないと実際より高く推算され得ます。",
    "low": "濾過機能の低下が疑われますが、経過と尿所見などを併せます。",
    "symptoms": "eGFR値そのものが症状を生むのではありません。軽度の低下は無症状のことが多く、進行した腎機能障害では疲労、浮腫、食欲低下、筋けいれんなどを伴う場合があります。数値の分類だけではその日の動作能力は分かりません。",
    "related": [
      "cr",
      "bun",
      "k"
    ],
    "context": "廃用・サルコペニアでは過大評価に注意。過去の腎機能と今回の急性変化を分けます。",
    "caution": "急性腎障害などCrが定常でない状況では精度が低下。CKDの判断は持続期間や腎障害所見を含みます。",
    "refs": [
      "https://pubmed.ncbi.nlm.nih.gov/38490803/",
      "https://jsn.or.jp/general/kidneydisease/symptoms04.php",
      "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
    ],
    "combination": "Crの推移と尿量を確認。筋肉量低下が大きい場合はCrに基づく推算の限界を意識します。",
    "diseasesHigh": [
      {
        "name": "低筋肉量による推定の偏り",
        "why": "Cr由来の推算値が実際より高めになることがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "慢性腎臓病",
        "why": "濾過機能の低下が反映されます。"
      },
      {
        "name": "急性腎障害を伴う状態",
        "why": "低値となり得ますが非定常時の推定精度には限界があります。"
      }
    ],
    "rehabExamples": [
      "腎機能の分類が同じでも、むくみや倦怠感で移動のしやすさが異なる。",
      "長期臥床後の高いeGFRをみても筋肉量の影響を考慮する。"
    ],
    "observations": [
      "腎機能の慢性経過と今回の変化。",
      "浮腫・呼吸・食事・覚醒など実際の所見。",
      "Cr・電解質と筋肉量の背景。"
    ],
    "pitfalls": "急性期のeGFRは精密な実測値ではありません。eGFR区分を一律のリハ制限や症状の原因に置き換えません。"
  },
  {
    "id": "na",
    "group": "電解質",
    "abbr": "Na",
    "name": "ナトリウム",
    "en": "Sodium",
    "range": "138–145 mmol/L",
    "meaning": "血液中の水分とNaの濃度関係を示す主要な電解質。",
    "high": "水の不足がNaに比べ大きい場合など。",
    "low": "水がNaに比べ相対的に多い場合など。体内Na総量の不足とは限りません。",
    "symptoms": "Na異常では倦怠感、頭痛、悪心、混乱、眠気などがあり得ます。低Naが急に進む場合などは意識低下やけいれんを伴います。数値の低さと症状の重さは必ずしも一致せず、無症状の場合もあります。",
    "related": [
      "glu",
      "bun",
      "cr",
      "cl"
    ],
    "context": "心不全・腎疾患・利尿薬・輸液などの背景と、体液量の所見を合わせます。",
    "caution": "濃度から体内水分量全体を直接決められません。高血糖もNaの解釈に影響します。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/602353",
      "https://doi.org/10.1530/EC-16-0058"
    ],
    "combination": "血糖と体液所見を合わせて濃度変化を理解。Clや腎機能も確認します。",
    "diseasesHigh": [
      {
        "name": "脱水・水分摂取不足",
        "why": "Naに対し水が不足して濃度が上がる場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "心不全・腎機能障害",
        "why": "水の排泄などの変化により希釈性低Naとなる場合があります。"
      },
      {
        "name": "SIADH（抗利尿ホルモン不適合分泌症候群）",
        "why": "水の保持が進みNa濃度が低下します。"
      },
      {
        "name": "利尿薬・輸液に伴う変化",
        "why": "Naと水の釣り合いが変化します。"
      }
    ],
    "rehabExamples": [
      "前日より反応が遅く、着替えの手順を間違える。",
      "座位中に悪心や頭痛を訴え、課題を続けにくい。"
    ],
    "observations": [
      "覚醒・注意・見当識と普段との差。",
      "頭痛・悪心・嘔吐の有無。",
      "Naの変化速度、血糖、利尿・輸液の背景。",
      "体重・浮腫・摂取量など体液情報。"
    ],
    "pitfalls": "認知症や脳卒中の症状だけに帰属しない一方、低Naだけを原因とも断定しません。急な意識変化は速やかに共有します。"
  },
  {
    "id": "k",
    "group": "電解質",
    "abbr": "K",
    "name": "カリウム",
    "en": "Potassium",
    "range": "3.6–4.8 mmol/L",
    "meaning": "神経・筋、特に心筋の電気的活動に関わる電解質。",
    "high": "排泄低下、薬剤、細胞内からの移動など。採血時の溶血による偽高値もあります。",
    "low": "利尿薬、消化管からの喪失、細胞内への移動など。",
    "symptoms": "高K・低Kとも脱力や不整脈に関係し、無症状の場合もあります。低Kでは手足のだるさ、筋痛、起立・歩行困難、便秘などが生じ得ます。重い場合は呼吸に関わる筋の機能にも影響します。",
    "related": [
      "cr",
      "egfr",
      "mg",
      "ph"
    ],
    "context": "心不全・腎機能低下では薬剤や利尿の影響、血液ガスと合わせます。",
    "caution": "症状の有無だけでは重要度は判断できません。検体溶血と急な変化を確認します。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://jsn.or.jp/general/kidneydisease/symptoms04.php",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.mhlw.go.jp/topics/2006/11/dl/tp1122-1e50.pdf",
      "https://www.pmda.go.jp/files/000224778.pdf",
      "https://guidelines.ukkidney.org/hyperkalaemia/"
    ],
    "combination": "腎機能・Mg・血液ガスを併読。腎排泄低下、喪失、細胞内外への移動の背景を整理します。",
    "diseasesHigh": [
      {
        "name": "急性腎障害・慢性腎臓病",
        "why": "腎排泄の低下で上昇し得ます。"
      },
      {
        "name": "薬剤・細胞障害",
        "why": "K保持性薬剤や細胞外への移動が影響します。"
      },
      {
        "name": "検体溶血",
        "why": "採血検体内の血球破壊で偽高値となる場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "利尿薬使用",
        "why": "尿からの喪失が増える場合があります。"
      },
      {
        "name": "下痢・嘔吐、摂取不足",
        "why": "消化管喪失などが関わります。"
      },
      {
        "name": "インスリンなどによる細胞内移動",
        "why": "総量が変わらなくても血中濃度が下がります。"
      }
    ],
    "rehabExamples": [
      "急に立ち上がりにくく、全身の力が入りにくい。",
      "普段と異なる動悸や脱力で更衣が進まない。"
    ],
    "observations": [
      "新たな全身脱力や筋痛、急な動作能力変化。",
      "脈拍・リズム、動悸・めまい。",
      "腎機能・利尿薬・消化管喪失とKの推移。",
      "モニタや検体溶血の情報。"
    ],
    "pitfalls": "脱力を廃用だけと決めません。症状や脈が一見正常でも重要なK異常はあり得るため、値と医療チームの評価を合わせます。"
  },
  {
    "id": "cl",
    "group": "電解質",
    "abbr": "Cl",
    "name": "クロール（塩化物）",
    "en": "Chloride",
    "range": "101–108 mmol/L",
    "meaning": "体液・電気的中性・酸塩基平衡に関わる陰イオン。",
    "high": "生理食塩液などの負荷や一部の代謝性アシドーシスで高くなります。",
    "low": "胃液喪失や利尿薬、一部の代謝性アルカローシスで低くなります。",
    "symptoms": "Clの高低だけに特有の症状は通常ありません。背景の体液変化や酸塩基異常により悪心、倦怠感、呼吸の変化、筋症状などがみられる場合があります。Cl単独から症状を説明しません。",
    "related": [
      "na",
      "hco3",
      "ph"
    ],
    "context": "輸液・嘔吐・胃管排液・利尿の状況を血液ガスと照合します。",
    "caution": "NaとClの変化、HCO₃⁻を組み合わせて読みます。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.mayocliniclabs.com/test-catalog/overview/8460"
    ],
    "combination": "NaとClの動き、pH・HCO₃⁻を合わせて、体液変化と酸塩基変化を区別します。",
    "diseasesHigh": [
      {
        "name": "生理食塩液などの輸液後",
        "why": "Cl負荷や体液変化で上昇し得ます。"
      },
      {
        "name": "下痢などに伴う代謝性アシドーシス",
        "why": "重炭酸喪失などと相対的なCl増加が関わります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "嘔吐・胃管排液",
        "why": "胃液のClが失われます。"
      },
      {
        "name": "利尿薬使用・代謝性アルカローシス",
        "why": "Cl喪失などが背景になります。"
      }
    ],
    "rehabExamples": [
      "胃管排液のある患者がだるさや悪心を訴える。",
      "輸液後に呼吸の様子が変わり、血ガスや体液経過を確認する。"
    ],
    "observations": [
      "Na・K・HCO₃⁻とpHの関係。",
      "呼吸数・深さと全身倦怠。",
      "嘔吐・下痢・胃管排液・輸液の背景。"
    ],
    "pitfalls": "Cl高値だけでアシドーシス、低値だけでアルカローシスとは判断しません。原因疾患や代償が混在します。"
  },
  {
    "id": "ca",
    "group": "電解質",
    "abbr": "Ca",
    "name": "カルシウム（総Ca）",
    "en": "Calcium",
    "range": "8.8–10.1 mg/dL",
    "meaning": "骨代謝、神経・筋活動、血液凝固に関わる電解質。通常の生化学は総Caです。",
    "high": "副甲状腺機能、悪性疾患、薬剤などの背景で上昇します。",
    "low": "低Albに伴う総Ca低下、腎疾患、ビタミンD関連などで低下します。",
    "symptoms": "高Caでは脱力、便秘、食欲低下、意識の変化などを伴うことがあります。生理活性をもつイオン化Caが低いと、口周囲・手足のしびれや筋けいれん、テタニーなどが生じ得ます。総Ca低値でも無症状のことがあり、Albとの区別が重要です。",
    "related": [
      "alb",
      "p",
      "mg",
      "cr"
    ],
    "context": "腎疾患や低Alb時は総Caと生理活性のあるイオン化Caの違いが重要です。",
    "caution": "低Albでは総Ca低値でもイオン化Caは保たれ得ます。補正式は特に重症患者で不正確なことがあります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/601514",
      "https://www.mayocliniclabs.com/test-catalog/overview/8378",
      "https://www.endocrinology.org/media/4277/emergency-guidance_acute-hypercalcaemia-in-adults.pdf"
    ],
    "combination": "Albが低いと総Caも低く見えるため、Albと併読。重症例などではイオン化Caと総Caが一致しないことがあります。",
    "diseasesHigh": [
      {
        "name": "副甲状腺機能亢進症",
        "why": "Ca調節ホルモンの作用で血中Caが上がる場合があります。"
      },
      {
        "name": "悪性疾患・薬剤関連",
        "why": "骨代謝や腸管吸収などの変化が関わります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "低アルブミン血症",
        "why": "蛋白結合Caが減り総Caだけが低く見える場合があります。"
      },
      {
        "name": "慢性腎臓病・ビタミンD関連、副甲状腺機能低下",
        "why": "Ca調節に異常を来す場合があります。"
      }
    ],
    "rehabExamples": [
      "手指のしびれやこわばりでボタン操作が難しい。",
      "普段にないぼんやり感や脱力で移乗が不安定になる。"
    ],
    "observations": [
      "しびれの部位と筋けいれん・こわばり。",
      "覚醒・脱力・便通や摂取の変化。",
      "Alb、イオン化Ca、Mg・P、腎機能。"
    ],
    "pitfalls": "総Caだけで神経筋症状の原因としません。低Albや血液pHの影響を含めて解釈します。"
  },
  {
    "id": "mg",
    "group": "電解質",
    "abbr": "Mg",
    "name": "マグネシウム",
    "en": "Magnesium",
    "range": "施設例1.9–2.5 mg/dL（測定法・施設差あり）",
    "meaning": "酵素反応、神経・筋機能、心臓の電気的安定性に関わります。",
    "high": "腎からの排泄低下とMg含有薬剤などが背景になります。",
    "low": "摂取不足、消化管喪失、利尿薬などで低下します。",
    "symptoms": "高Mgでは悪心、筋力低下、反射の減弱、眠気、徐脈・血圧低下などがあり、重い場合は呼吸抑制や意識障害に至ります。低Mgでは筋けいれんや不整脈などを伴う場合があります。薬剤・腎機能と症状を合わせます。",
    "related": [
      "k",
      "ca",
      "cr"
    ],
    "context": "腎機能低下と酸化Mgなどの薬剤、利尿薬使用の有無を照合します。",
    "caution": "血清値は体内Mgの一部です。K・Ca異常と併存することがあります。",
    "refs": [
      "https://data.medience.co.jp/guide/guide-01090004.html",
      "https://www.crc-group.co.jp/crc/q_and_a/105.html",
      "https://www.pmda.go.jp/files/000214495.pdf",
      "https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?os=f"
    ],
    "combination": "K・Caの異常と併存し得るため一緒に確認し、Crから排泄低下の背景もみます。",
    "diseasesHigh": [
      {
        "name": "腎機能低下とMg含有薬",
        "why": "酸化Mgなどの使用中に排泄低下や吸収増加が重なる場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "摂取不足・消化管喪失",
        "why": "下痢などで不足する場合があります。"
      },
      {
        "name": "利尿薬使用",
        "why": "腎からの喪失が増える場合があります。"
      }
    ],
    "rehabExamples": [
      "便秘治療中に、以前より眠気が強く立ち上がりに力が入らない。",
      "手足がつるため整容や歩行が中断する。"
    ],
    "observations": [
      "覚醒と全身筋力の前日からの変化。",
      "脈拍・血圧・呼吸の変化。",
      "酸化Mgなどの処方、腎機能・便秘の経過。",
      "K・CaとMgの推移。"
    ],
    "pitfalls": "高齢や長期臥床による眠気・脱力と決め付けません。高Mgは腎機能が正常でも生じ得るため薬剤情報も確認します。"
  },
  {
    "id": "p",
    "group": "電解質",
    "abbr": "P / IP / Pi",
    "name": "無機リン",
    "en": "Inorganic phosphorus / phosphate",
    "range": "2.7–4.6 mg/dL",
    "meaning": "ATPなどのエネルギー代謝、骨、筋機能に関わります。",
    "high": "腎排泄低下などで高くなります。",
    "low": "摂取不足、再栄養時の細胞内移動、呼吸性アルカローシスなどで低下します。",
    "symptoms": "軽い低下では症状がないことがあります。高度の低Pでは筋力低下や意識の変化を伴い、呼吸筋の働きにも影響する場合があります。高Pの症状は腎疾患やCa低下など背景に左右されます。",
    "related": [
      "mg",
      "k",
      "ca",
      "cr"
    ],
    "context": "低栄養が疑われる患者の栄養再開や、腎機能低下時の推移を確認します。",
    "caution": "採血時点の値だけで栄養状態を断定できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.mayocliniclabs.com/test-catalog/Overview/8408"
    ],
    "combination": "Mg・Kと栄養再開時の経過、Crと腎機能低下の背景を合わせて理解します。",
    "aliases": "IP Pi 無機リン",
    "diseasesHigh": [
      {
        "name": "慢性腎臓病",
        "why": "腎からの排泄低下により上昇し得ます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "再栄養症候群・栄養再開後",
        "why": "細胞内への移動や利用増加で血中Pが低下する場合があります。"
      },
      {
        "name": "摂取不足・呼吸性アルカローシス",
        "why": "不足や細胞内移動が関わります。"
      }
    ],
    "rehabExamples": [
      "食事・栄養投与の再開後に、立ち上がりや身支度で全身脱力が目立つ。",
      "以前より呼吸が浅く、疲れやすさが増す。"
    ],
    "observations": [
      "栄養再開の時期とP・K・Mgの推移。",
      "全身筋力・覚醒と動作能力の変化。",
      "呼吸数・深さ・呼吸努力。",
      "腎機能とCaの変化。"
    ],
    "pitfalls": "栄養開始後の脱力を廃用だけで説明しません。P単独で再栄養症候群と診断せず、電解質と全身経過を共有します。"
  },
  {
    "id": "ast",
    "group": "肝・胆道",
    "abbr": "AST / GOT",
    "name": "アスパラギン酸アミノトランスフェラーゼ",
    "en": "Aspartate aminotransferase",
    "range": "13–30 U/L",
    "meaning": "肝臓に加えて筋肉・赤血球などにも含まれる酵素。細胞障害で血中へ出ます。",
    "high": "肝細胞障害、筋障害、溶血などで上昇します。",
    "low": "低値単独の意義は一般に限定的です。",
    "symptoms": "ASTそのものが症状を起こすわけではありません。肝疾患では無症状から倦怠感・食欲低下・黄疸まで様々で、筋障害なら筋痛・脱力などを伴い得ます。数値の高さだけで肝不全や動作能力は決まりません。",
    "related": [
      "alt",
      "ck",
      "ld",
      "tbil"
    ],
    "context": "肝疾患だけでなく手術・筋損傷の影響も考え、ALT・CKと併読します。",
    "caution": "AST高値を直ちに肝機能低下と読み替えません。臓器の働きと細胞障害は別の概念です。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes",
      "https://www.cdc.gov/niosh/rhabdo/signs-symptoms/"
    ],
    "combination": "ALTも上昇しているか、CK・LDが目立っていないかを照合。肝臓以外の由来を考慮します。",
    "aliases": "GOT",
    "diseasesHigh": [
      {
        "name": "肝炎・薬剤性肝障害・虚血性肝障害",
        "why": "肝細胞の障害で酵素が血中へ出ます。"
      },
      {
        "name": "筋損傷・横紋筋融解症",
        "why": "骨格筋由来のASTが増えます。"
      },
      {
        "name": "溶血",
        "why": "血球由来の影響で増加します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "筋痛とともに起き上がりにくさが増している。",
      "食欲低下・疲労があり、活動への参加が落ちている。"
    ],
    "observations": [
      "筋痛・脱力の有無とCK。",
      "黄疸・食欲・腹部症状とALT・ビリルビン。",
      "手術・循環不全・薬剤導入の時間関係。"
    ],
    "pitfalls": "AST高値をすべて肝障害として扱わず、筋・血球由来も確認します。低値単独に特有の注意点はありません。"
  },
  {
    "id": "alt",
    "group": "肝・胆道",
    "abbr": "ALT / GPT",
    "name": "アラニンアミノトランスフェラーゼ",
    "en": "Alanine aminotransferase",
    "range": "男性10–42、女性7–23 U/L",
    "meaning": "主に肝細胞障害を反映する酵素。",
    "high": "肝炎、脂肪肝、薬剤関連などの肝細胞障害で上昇します。",
    "low": "低値単独の意義は通常限定的です。",
    "symptoms": "ALT上昇だけで自覚症状がないことも多くあります。肝疾患が背景なら倦怠感、食欲低下、悪心、黄疸などを伴う場合があります。意識変化や浮腫などは肝機能全体と他の原因も含めて理解します。",
    "related": [
      "ast",
      "tbil",
      "alp",
      "ggt"
    ],
    "context": "循環不全や薬剤導入などの経過と合わせ、肝胆道系の他項目を確認します。",
    "caution": "ALTの高さだけで肝臓の合成能や重症度は決まりません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
    ],
    "combination": "ASTとともに肝細胞障害の傾向を、ALP・γ-GT・ビリルビンで胆道系の影響を補います。",
    "aliases": "GPT",
    "diseasesHigh": [
      {
        "name": "脂肪肝・ウイルス性肝炎",
        "why": "肝細胞障害により上昇する場合があります。"
      },
      {
        "name": "薬剤性肝障害",
        "why": "投薬後の肝細胞障害が関わります。"
      },
      {
        "name": "循環不全に伴う肝障害",
        "why": "肝への酸素供給低下などで上昇し得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "採血値が高くても身支度時の症状は乏しい。",
      "食欲・体調が落ち、訓練中に悪心を訴える。"
    ],
    "observations": [
      "倦怠感・摂取量・悪心の変化。",
      "黄疸・腹部症状・浮腫。",
      "AST・ビリルビン・Alb・PTなど他項目。"
    ],
    "pitfalls": "ALTの高さは肝の合成能やその日の活動耐容能と同じではありません。低値を機能良好とも解釈しません。"
  },
  {
    "id": "ld",
    "group": "肝・胆道",
    "abbr": "LD / LDH",
    "name": "乳酸脱水素酵素",
    "en": "Lactate dehydrogenase",
    "range": "124–222 U/L（IFCC法）",
    "meaning": "肝臓・筋肉・血球など広い組織に含まれる酵素。",
    "high": "様々な組織障害・溶血などで上昇します。",
    "low": "低値単独の意義は通常限定的です。",
    "symptoms": "LDそのものに固有の症状はありません。筋痛・脱力、黄疸、疲労など、由来する組織や背景疾患に応じて症状が異なります。LD単独で臓器や症状の原因は分かりません。",
    "related": [
      "ast",
      "alt",
      "ck",
      "hb"
    ],
    "context": "筋障害・肝障害・血液疾患など、既知の病態に応じて他項目を合わせます。",
    "caution": "臓器特異性が低く、採血時の溶血でも上昇します。IFCC法と旧測定法を区別します。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes",
      "https://www.cdc.gov/niosh/rhabdo/signs-symptoms/"
    ],
    "combination": "AST・ALT・CKやHbと照合して背景組織を考えます。LD単独で障害臓器は特定できません。",
    "aliases": "LDH 乳酸脱水素酵素",
    "diseasesHigh": [
      {
        "name": "肝障害・筋障害",
        "why": "障害組織からLDが血中へ出ます。"
      },
      {
        "name": "溶血",
        "why": "赤血球破壊や採血検体の溶血で増えます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "筋痛で移動が難しい患者ではCKと合わせて経過をみる。",
      "黄疸や疲労がある場合に肝・血球の所見を照合する。"
    ],
    "observations": [
      "新たな筋痛・脱力・黄疸。",
      "AST・ALT・CK・Hbなど由来を補う項目。",
      "検体溶血のコメント。"
    ],
    "pitfalls": "非特異的な組織障害マーカーです。LDの高低だけを活動可否の判断に使いません。"
  },
  {
    "id": "alp",
    "group": "肝・胆道",
    "abbr": "ALP",
    "name": "アルカリホスファターゼ",
    "en": "Alkaline phosphatase",
    "range": "38–113 U/L（IFCC法）",
    "meaning": "胆道系・骨などに由来する酵素。",
    "high": "胆汁うっ滞や骨代謝亢進など。骨折後の経過でも影響され得ます。",
    "low": "低値は栄養関連など様々な背景があり、単独での解釈は困難です。",
    "symptoms": "ALP自体が痛みを起こすわけではありません。胆道系の病態なら黄疸・かゆみなど、骨の病態なら部位に応じた疼痛などがみられる場合があります。骨折後の上昇は機能回復の程度を直接示しません。",
    "related": [
      "ggt",
      "tbil",
      "ca",
      "p"
    ],
    "context": "運動器患者では骨由来、心不全などでは肝胆道系の影響も他項目から確認します。",
    "caution": "旧JSCC法の基準範囲と大きく異なります。γ-GTなどと合わせ由来を考えます。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
    ],
    "combination": "γ-GT・ビリルビンの上昇を伴うか確認し、骨折など骨代謝の背景も合わせます。",
    "diseasesHigh": [
      {
        "name": "胆石・胆管炎などの胆汁うっ滞",
        "why": "胆道系由来ALPが上昇する場合があります。"
      },
      {
        "name": "骨折後の修復・骨代謝亢進",
        "why": "骨由来ALPが増えることがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "栄養関連・微量元素不足など",
        "why": "低下する場合がありますが単独の原因特定はできません。"
      }
    ],
    "rehabExamples": [
      "骨折後のALP上昇と疼痛・荷重条件を別に確認する。",
      "着替え中に強いかゆみや皮膚の黄染に気付く。"
    ],
    "observations": [
      "骨折部位・疼痛と術後経過。",
      "黄疸・掻痒とγ-GT・ビリルビン。",
      "測定法がIFCCか旧JSCCか。"
    ],
    "pitfalls": "骨由来か肝胆道由来かをALP単独で決めません。骨癒合や荷重許可の判定には使いません。"
  },
  {
    "id": "ggt",
    "group": "肝・胆道",
    "abbr": "γ-GT / γ-GTP / GGT",
    "name": "γグルタミルトランスフェラーゼ",
    "en": "Gamma-glutamyl transferase",
    "range": "男性13–64、女性9–32 U/L",
    "meaning": "肝胆道系の障害や酵素誘導を反映する酵素。",
    "high": "胆道系の障害、飲酒、薬剤などで上昇します。",
    "low": "低値単独の意義は通常限定的です。",
    "symptoms": "γ-GT高値そのものには特有の症状はありません。背景が胆汁うっ滞ならかゆみや黄疸、肝疾患なら倦怠感などを伴う場合があります。高値でも無症状のことがあります。",
    "related": [
      "alp",
      "ast",
      "alt",
      "tbil"
    ],
    "context": "ALP高値時の肝胆道由来の理解や、飲酒・薬剤の背景を確認する補助です。",
    "caution": "高値だけで飲酒の影響と決めつけません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
    ],
    "combination": "ALP・ビリルビンと併読し、AST・ALTで肝細胞障害の傾向も補います。",
    "aliases": "γ-GTP gamma GTP ガンマ",
    "diseasesHigh": [
      {
        "name": "胆道疾患・胆汁うっ滞",
        "why": "胆道系への影響で上昇します。"
      },
      {
        "name": "飲酒・薬剤による酵素誘導",
        "why": "明らかな症状がなくても増加することがあります。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "身支度時に皮膚のかゆみや黄染を確認する。",
      "疲労の訴えがあってもγ-GTのみを原因としない。"
    ],
    "observations": [
      "黄疸・掻痒・食欲の変化。",
      "ALP・ビリルビン・AST・ALT。",
      "薬剤や飲酒歴など既知の背景。"
    ],
    "pitfalls": "高値＝飲酒の影響と決め付けません。γ-GTだけで肝疾患の重症度や活動耐容能は分かりません。"
  },
  {
    "id": "tbil",
    "group": "肝・胆道",
    "abbr": "T-Bil / TB",
    "name": "総ビリルビン",
    "en": "Total bilirubin",
    "range": "0.4–1.5 mg/dL",
    "meaning": "赤血球の分解で生じ、肝臓で処理され胆汁へ排泄される色素。",
    "high": "溶血、肝での処理障害、胆汁排泄障害などで上昇します。",
    "low": "低値単独の意義は通常限定的です。",
    "symptoms": "上昇すると眼球結膜や皮膚の黄染がみられ得ます。背景の肝胆道病態によってはかゆみや尿色の変化を伴います。疲労や意識変化などの原因はビリルビン値だけでは決まりません。",
    "related": [
      "dbil",
      "ast",
      "alt",
      "alp",
      "hb",
      "ld"
    ],
    "context": "肝疾患・胆道閉塞・心不全のうっ血など、診断・経過と直接型の内訳を照合します。",
    "caution": "総値だけでは上昇の機序を区別できません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
    ],
    "combination": "直接型の内訳とAST・ALT・ALPを確認。溶血が背景の場合はHbやLDの変化も合わせます。",
    "aliases": "T-Bil TBIL 総ビリルビン",
    "diseasesHigh": [
      {
        "name": "肝炎・肝硬変、うっ血肝",
        "why": "肝での処理や排泄が障害される場合があります。"
      },
      {
        "name": "胆石・胆道閉塞",
        "why": "胆汁の流れが妨げられます。"
      },
      {
        "name": "溶血性貧血",
        "why": "赤血球分解により産生が増えます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "洗面・更衣で眼や皮膚の黄染に気付く。",
      "かゆみや疲労のため夜間睡眠や日中活動に影響が出る。"
    ],
    "observations": [
      "皮膚・眼の黄染、掻痒、尿色などの情報。",
      "直接型の内訳とAST・ALT・ALP。",
      "Hb低下・溶血、循環うっ血の背景。"
    ],
    "pitfalls": "黄疸の機序は一つではありません。成人の意識変化を総ビリルビン高値だけで説明しません。"
  },
  {
    "id": "dbil",
    "group": "肝・胆道",
    "abbr": "D-Bil / DB",
    "name": "直接ビリルビン",
    "en": "Direct bilirubin",
    "range": "0.0–0.4 mg/dL",
    "meaning": "肝臓で処理された抱合型ビリルビンを主に反映します。",
    "high": "肝細胞障害や胆汁排泄障害などで増加します。",
    "low": "低値そのものの問題は通常ありません。",
    "symptoms": "高値が続く背景により黄疸や濃い尿、掻痒などを伴う場合があります。直接ビリルビン自体に固有の動作症状はありません。肝胆道疾患があっても症状が目立たない場合があります。",
    "related": [
      "tbil",
      "alp",
      "ggt",
      "ast"
    ],
    "context": "総ビリルビンとの内訳から、既知の肝胆道病態を理解する補助です。",
    "caution": "直接型は測定法上の区分であり、他の肝胆道所見と合わせます。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
    ],
    "combination": "総ビリルビンに占める内訳とALP・γ-GTを照合し、既知の肝胆道系の病態と合わせます。",
    "aliases": "D-Bil DBIL 直接ビリルビン",
    "diseasesHigh": [
      {
        "name": "肝細胞障害",
        "why": "抱合後ビリルビンの排泄などが影響されます。"
      },
      {
        "name": "胆管炎・胆道閉塞など",
        "why": "胆汁の流れが障害されます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "排泄や更衣の場面で尿色・皮膚の変化の情報が得られる。",
      "かゆみや体調不良で活動に集中しにくい。"
    ],
    "observations": [
      "黄疸・掻痒と腹部症状の有無。",
      "総ビリルビン・ALP・γ-GTとの関係。",
      "既知の胆道処置や感染の経過。"
    ],
    "pitfalls": "尿が濃い理由は脱水などでもあり、見た目だけで胆道病態と決めません。低値単独は通常問題になりません。"
  },
  {
    "id": "tp",
    "group": "蛋白・栄養関連",
    "abbr": "TP",
    "name": "総蛋白",
    "en": "Total protein",
    "range": "6.6–8.1 g/dL",
    "meaning": "血清中のAlbや免疫グロブリンなど、蛋白の合計濃度。",
    "high": "血液濃縮、免疫グロブリン増加などで上昇します。",
    "low": "肝での合成低下、尿などへの喪失、希釈などで低下します。",
    "symptoms": "TP自体の高低に固有の症状はありません。Alb低下を伴う背景では浮腫などがみられる場合があります。疲れ・食欲低下などは肝・腎疾患や炎症など複数の要因から考えます。",
    "related": [
      "alb",
      "crp",
      "ht"
    ],
    "context": "炎症・肝疾患・腎からの蛋白喪失や輸液の背景を確認します。",
    "caution": "TPが正常でもAlb低下を他の蛋白増加が補っている場合があります。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes",
      "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
    ],
    "combination": "Albと併読。TPが保たれていてもAlbが低い場合は、他の蛋白成分の増加などが考えられます。",
    "diseasesHigh": [
      {
        "name": "脱水・血液濃縮",
        "why": "血漿水分の減少で相対的に高くなります。"
      },
      {
        "name": "慢性炎症などによる免疫グロブリン増加",
        "why": "蛋白成分の内訳が変化する場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "肝硬変・蛋白喪失性の状態",
        "why": "合成低下や腎・消化管への喪失が関わります。"
      },
      {
        "name": "輸液による希釈",
        "why": "血中濃度が相対的に低下します。"
      }
    ],
    "rehabExamples": [
      "下肢浮腫で靴やズボンがきつくなる。",
      "食事摂取が少なくてもTPが正常のことがある。"
    ],
    "observations": [
      "Albとの内訳、体重・浮腫の経過。",
      "摂取状況と肝・腎・炎症の情報。",
      "輸液・利尿の変化。"
    ],
    "pitfalls": "TP正常は栄養状態良好を保証しません。TPの低下だけから筋力低下や活動耐容能を説明しません。"
  },
  {
    "id": "alb",
    "group": "蛋白・栄養関連",
    "abbr": "Alb / ALB",
    "name": "アルブミン",
    "en": "Albumin",
    "range": "4.1–5.1 g/dL",
    "meaning": "肝臓で作られ、血管内の膠質浸透圧や物質運搬に関わる蛋白。",
    "high": "主に脱水などの血液濃縮で相対的に高くなります。",
    "low": "炎症・毛細血管透過性変化・肝合成低下・腎や消化管への喪失・希釈などで低下します。",
    "symptoms": "低Albは浮腫に関係し得ますが、浮腫は心・腎機能や体液量にも左右されます。筋力低下・疲労があっても、それをAlb低値そのものの症状とは扱いません。炎症など背景疾患の症状と分けて理解します。",
    "related": [
      "crp",
      "tp",
      "ca",
      "cr"
    ],
    "context": "感染・手術後には炎症の影響が大きく、食事摂取・体重・筋肉量などとは分けて理解します。",
    "caution": "Alb単独を低栄養や筋肉量の指標として使いません。栄養改善の効果を短期のAlb変化だけで判断しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1002/ncp.10588"
    ],
    "combination": "CRP・TPと併読し、炎症・希釈・蛋白喪失などの影響を整理。Caは総値がAlbに影響されます。",
    "aliases": "ALB アルブミン",
    "diseasesHigh": [
      {
        "name": "脱水・血液濃縮",
        "why": "蛋白の絶対量増加ではなく相対濃縮が主な背景です。"
      }
    ],
    "diseasesLow": [
      {
        "name": "感染・手術後などの炎症",
        "why": "合成の優先順位や分布・毛細血管透過性の変化が関わります。"
      },
      {
        "name": "肝硬変・ネフローゼ症候群",
        "why": "合成低下や尿への喪失が関わります。"
      },
      {
        "name": "輸液による希釈・低栄養を伴う状態",
        "why": "複数の要因が共存し得ますが低栄養の単独指標ではありません。"
      }
    ],
    "rehabExamples": [
      "手のむくみで指輪や衣服の着脱が難しい。",
      "下肢浮腫で靴・装具の適合が変わる。"
    ],
    "observations": [
      "浮腫の分布・皮膚状態と動作への影響。",
      "体重・輸液・利尿の経過。",
      "CRP、肝・腎の所見。",
      "実際の摂取量・体重変化・筋肉量を別に把握。"
    ],
    "pitfalls": "Alb単独を栄養や筋肉量の尺度にしません。浮腫があってもAlbだけで原因を決めず、局在や急な変化を確認します。"
  },
  {
    "id": "glu",
    "group": "糖代謝",
    "abbr": "Glu / GLU / BS",
    "name": "血糖",
    "en": "Blood glucose",
    "range": "空腹時の共用基準範囲73–109 mg/dL。食後・随時値には同じ範囲を当てはめません。",
    "meaning": "採血時点の血液中のブドウ糖濃度。",
    "high": "糖尿病のほか、急性ストレス、ステロイド、糖を含む輸液などで上昇します。",
    "low": "血糖降下薬、摂取不足などが背景となります。",
    "symptoms": "高血糖では口渇、多尿、疲労など、低血糖では冷汗、ふるえ、動悸、空腹、めまい、混乱などが現れ得ます。重い低血糖は意識障害やけいれんを伴います。低血糖に気付きにくい人もいます。",
    "related": [
      "hba1c",
      "na",
      "k"
    ],
    "context": "急性疾患・術後では一時的な高値もあり、HbA1cや治療内容と照合します。",
    "caution": "採血時点の食事・輸液・薬剤を確認。糖尿病の診断値と基準範囲は別です。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia",
      "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes"
    ],
    "combination": "HbA1cと併読して、以前からの血糖傾向と入院時点の変化を区別。NaやKの解釈にも影響します。",
    "aliases": "GLU BS FBS 血糖 グルコース",
    "diseasesHigh": [
      {
        "name": "糖尿病",
        "why": "インスリン作用不足などで血糖が上がります。"
      },
      {
        "name": "術後・感染・急性ストレス、ステロイド使用",
        "why": "糖尿病以外でも一時的な高血糖を来す場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "血糖降下薬使用と摂取不足",
        "why": "薬の作用に対し糖の供給が少なくなります。"
      },
      {
        "name": "腎機能低下などを伴う治療中",
        "why": "薬剤作用や糖代謝に影響することがあります。"
      }
    ],
    "rehabExamples": [
      "活動中に急に冷汗が出て返答がかみ合わなくなる。",
      "口渇や頻回の排尿があり、身支度を続けにくい。"
    ],
    "observations": [
      "食事量・時刻、インスリン等の投薬時刻。",
      "冷汗・ふるえ・動悸と覚醒・会話の急な変化。",
      "実際の血糖測定時刻と活動時点との差。",
      "尿量・口渇・全身状態。"
    ],
    "pitfalls": "入院時の血糖が正常でも活動時点の低血糖は否定できません。意識変化を疲労や認知症だけと扱わず、施設の対応手順に沿って共有します。"
  },
  {
    "id": "hba1c",
    "group": "糖代謝",
    "abbr": "HbA1c",
    "name": "ヘモグロビンA1c",
    "en": "Hemoglobin A1c",
    "range": "NGSP %。糖尿病型の臨床判断値は6.5 %以上（診断には所定の確認が必要）。施設の参考範囲は検査票を優先。",
    "meaning": "赤血球Hbへの糖の結合を利用し、過去約1–2か月の血糖状態を主に反映します。",
    "high": "持続する高血糖を示唆します。",
    "low": "血糖が低い場合のほか、赤血球寿命短縮などでも低くなります。",
    "symptoms": "HbA1cそのものに症状はありません。高低から、その場の低血糖症状や活動耐容能は分かりません。長期血糖管理が良好に見えても急な血糖変動や低血糖は起こり得ます。",
    "related": [
      "glu",
      "hb",
      "rbc"
    ],
    "context": "入院時高血糖が以前からの傾向か、急性期の変化かを考える補助です。",
    "caution": "出血・輸血・溶血・腎性貧血などでは血糖と乖離します。短期間の血糖変化は十分反映しません。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.ncvc.go.jp/hospital/section/ld/endocrinology/hba1c/",
      "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia"
    ],
    "combination": "現在の血糖と整合するか確認し、Hb・出血・輸血・透析など乖離を招く条件を合わせます。",
    "diseasesHigh": [
      {
        "name": "糖尿病・持続する高血糖",
        "why": "一定期間の糖化が増えます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "血糖が低めに推移する状態",
        "why": "平均的な糖化が少なくなる場合があります。"
      },
      {
        "name": "出血・溶血・輸血・腎性貧血など",
        "why": "赤血球寿命や構成変化により血糖と乖離します。"
      }
    ],
    "rehabExamples": [
      "HbA1cが低くても活動中の冷汗・ふるえは別に確認する。",
      "高値でもその場の疲労やしびれの原因を一つに決めない。"
    ],
    "observations": [
      "同時の血糖と測定時刻。",
      "食事・投薬・低血糖歴。",
      "Hb、出血・輸血・溶血の背景。"
    ],
    "pitfalls": "HbA1cはリアルタイムの血糖でも運動許可指標でもありません。急な症状は現在の状態から評価します。"
  },
  {
    "id": "ck",
    "group": "筋・心臓関連",
    "abbr": "CK / CPK",
    "name": "クレアチンキナーゼ",
    "en": "Creatine kinase",
    "range": "男性59–248、女性41–153 U/L",
    "meaning": "主に骨格筋などにある酵素。筋細胞障害で血中に増加します。",
    "high": "筋損傷、手術、転倒後の長時間圧迫、薬剤、運動などで上昇します。",
    "low": "筋肉量の少なさなどで低値になることがあります。",
    "symptoms": "筋障害では筋痛、筋の張り・腫れ、脱力、疲れやすさなどがみられ得ます。横紋筋融解症では茶色・コーラ色の尿を伴う場合がありますが、症状が揃うとは限りません。CK値だけで痛みや動作能力の強さは決まりません。",
    "related": [
      "ast",
      "ld",
      "cr",
      "k"
    ],
    "context": "運動器疾患・手術後・長時間臥床の経緯や、脂質低下薬などの薬剤と照合します。",
    "caution": "CK高値だけで心筋障害とは判断しません。心臓の評価にはトロポニンなど別項目が重要です。",
    "refs": [
      "https://www.jslm.org/committees/standard/20251101.pdf",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html",
      "https://www.cdc.gov/niosh/rhabdo/signs-symptoms/"
    ],
    "combination": "AST・LDと筋障害の経過を照合し、Cr・Kから腎機能や電解質への影響も確認します。",
    "aliases": "CPK",
    "diseasesHigh": [
      {
        "name": "横紋筋融解症・筋損傷",
        "why": "筋細胞から酵素が流出します。"
      },
      {
        "name": "外傷・手術・転倒後の長時間圧迫",
        "why": "筋への侵襲が影響します。"
      },
      {
        "name": "薬剤性筋障害・筋炎",
        "why": "筋細胞障害を伴うことがあります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "低筋肉量など",
        "why": "産生源となる筋の量が影響する場合があります。"
      }
    ],
    "rehabExamples": [
      "普段より強い筋痛や全身脱力で起き上がれない。",
      "転倒後に長く床上にいた患者で筋の痛みや尿色の情報を確認する。"
    ],
    "observations": [
      "筋痛・腫れ・脱力の部位と変化。",
      "発症・転倒・圧迫・手術の経過。",
      "尿色・尿量、Cr・Kの変化。",
      "薬剤開始や変更との時間関係。"
    ],
    "pitfalls": "通常の運動後の筋痛や廃用と決め付けません。CK高値は心筋傷害の確定ではなく、背景と関連項目を確認します。"
  },
  {
    "id": "pt",
    "group": "凝固・線溶",
    "abbr": "PT",
    "name": "プロトロンビン時間",
    "en": "Prothrombin time",
    "range": "施設例：10.0～12.0 秒。活性値（%）は測定法依存。施設の検査票を優先。",
    "meaning": "血漿が凝固するまでの時間。外因系・共通系の凝固因子の働きをまとめてみる。",
    "high": "秒数の延長はワルファリン、ビタミンK欠乏、肝での凝固因子産生低下、凝固因子の消費などでみられる。PT活性（%）では逆に低値になる。",
    "low": "秒数の短縮や活性値（%）の高値だけから、血栓ができているとは判断できない。",
    "symptoms": "PT延長自体に特有の自覚症状はありません。背景に止血異常があれば、皮下出血、創部・穿刺部からの出血、血尿などを伴い得ますが、数値と出血量は一致しません。",
    "related": [
      "inr",
      "aptt",
      "fibrinogen",
      "plt",
      "alb"
    ],
    "context": "肝障害、栄養摂取不良、抗菌薬使用、ワルファリン内服、手術・大量出血の経過と照合する。",
    "caution": "秒・%・INRは表示方向が違う。PTが正常でも血小板機能や第XIII因子などの異常は否定できない。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://jsth.medical-words.jp/words/word-547/",
      "https://www.jscva.org/files/guideline/%E5%BF%83%E8%87%93%E8%A1%80%E7%AE%A1%E9%BA%BB%E9%85%94%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A1%80%E6%B6%B2%E7%B2%98%E5%BC%BE%E6%80%A7%E6%A4%9C%E6%9F%BB%E3%81%AE%E4%BD%BF%E7%94%A8%E6%8C%87%E9%87%9D2025.pdf"
    ],
    "combination": "PTだけの延長か、APTTも延長しているかを確認する。血小板低下・フィブリノゲン低下・FDP上昇が重なる場合は、凝固因子の消費を含め既知の病態と照合する。",
    "diseasesHigh": [
      {
        "name": "ワルファリン使用",
        "why": "ビタミンK依存性凝固因子の働きを抑えるため延長します。"
      },
      {
        "name": "肝硬変・重い肝障害",
        "why": "凝固因子の産生が低下すると延長します。"
      },
      {
        "name": "ビタミンK欠乏",
        "why": "凝固因子を働かせるためのビタミンが不足します。"
      },
      {
        "name": "DIC（播種性血管内凝固）・大量出血",
        "why": "凝固因子の消費や希釈で延長し得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "更衣で皮膚を露出した際に、新しい皮下出血に気付く。",
      "移乗後に創部や穿刺部のにじみが増えていないか確認する。"
    ],
    "observations": [
      "新規の出血・皮下出血と、以前からあるものを区別する。",
      "Hb・血小板とPTの推移、ワルファリンなどの投薬を照合する。",
      "疼痛や腫脹の急な変化、めまいなど出血以外の全身変化も共有する。"
    ],
    "pitfalls": "PT秒数の延長は活性値（%）の低下に対応します。PT正常でも、血小板機能など別の止血異常は否定できません。"
  },
  {
    "id": "inr",
    "group": "凝固・線溶",
    "abbr": "PT-INR",
    "name": "プロトロンビン時間・国際標準比",
    "en": "Prothrombin time–international normalized ratio",
    "range": "未治療の施設例：0.90～1.10（単位なし）。ワルファリン治療目標とは異なる。",
    "meaning": "試薬の感度差を補正してPTを比で表す。主にワルファリンの効果を把握する指標。",
    "high": "高値は凝固時間の延長を示す。ワルファリンの作用、ビタミンK不足、肝障害、凝固因子消費などで上昇する。",
    "low": "低値だけで血栓症や凝固亢進とはいえない。ワルファリン中なら、処方された目標域と照らして読む。",
    "symptoms": "高値自体を本人が感じるわけではありません。出血を伴う場合に紫斑、鼻・歯肉などからの出血、血尿などが現れ得ます。一方、治療目標内で無症状のこともあります。",
    "related": [
      "pt",
      "aptt",
      "fibrinogen",
      "plt"
    ],
    "context": "内服薬と目標域、前回値、肝機能、出血の経過が重要。",
    "caution": "DOAC（直接作用型経口抗凝固薬）の効果量をINRから定量評価することはできない。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://jsth.medical-words.jp/words/word-547/"
    ],
    "combination": "PT秒数・活性値と同じ検査の別表現として読む。ワルファリン内服中は一般基準範囲でなく個別目標域を確認し、Hb低下や出血所見がないかも併せる。",
    "aliases": "INR PT-INR",
    "diseasesHigh": [
      {
        "name": "ワルファリン使用",
        "why": "抗凝固作用により上昇します。処方された目標域と比較します。"
      },
      {
        "name": "肝障害・ビタミンK欠乏",
        "why": "凝固因子の低下により上昇し得ます。"
      },
      {
        "name": "DIC（播種性血管内凝固）",
        "why": "凝固因子消費を伴う場合に上昇し得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "口腔ケアや更衣時に、普段と異なる出血・紫斑を見つける。",
      "歩行時に新しく出現しためまいを、INRだけでなくHbや血圧変化と照合する。"
    ],
    "observations": [
      "服薬内容と指示された目標域を確認する。",
      "前回値からの変化と出血所見を合わせる。",
      "転倒や打撲の発生、急な頭痛・反応の変化などを共有する。"
    ],
    "pitfalls": "一般基準範囲からの高値を、そのまま「過剰投与」と判断しません。DOACの作用をINRで定量評価できません。"
  },
  {
    "id": "aptt",
    "group": "凝固・線溶",
    "abbr": "APTT",
    "name": "活性化部分トロンボプラスチン時間",
    "en": "Activated partial thromboplastin time",
    "range": "おおむね25～40 秒。施設例：24.0～36.0 秒。試薬・機器で異なる。",
    "meaning": "内因系・共通系の凝固因子の働きをみる時間検査。未分画ヘパリンの影響も受ける。",
    "high": "延長はヘパリン、凝固因子不足・インヒビター、肝障害、DICなどでみられる。ループスアンチコアグラントでも延長する。",
    "low": "短縮だけから血栓症は判断できず、採血条件や凝固因子増加などの影響も受ける。",
    "symptoms": "APTT延長そのものの症状はありません。凝固因子不足では出血や血腫を伴い得ますが、ループスアンチコアグラントなどでは延長が出血傾向を意味しません。",
    "related": [
      "pt",
      "inr",
      "fibrinogen",
      "plt"
    ],
    "context": "ヘパリン投与・採血ライン、抗凝固薬、術後・出血経過と組み合わせる。",
    "caution": "施設の基準範囲と投薬時の目標域を区別する。正常値でもすべての止血異常を除外できない。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://jsth.medical-words.jp/words/word-596/"
    ],
    "combination": "PTとの延長の組み合わせに加え、ヘパリンの有無を確認する。血小板数やフィブリノゲンも併せるが、APTT延長のみで出血しやすさを断定しない。",
    "diseasesHigh": [
      {
        "name": "未分画ヘパリン使用",
        "why": "内因系・共通系の凝固反応が抑えられ、延長します。"
      },
      {
        "name": "DIC（播種性血管内凝固）・肝硬変",
        "why": "凝固因子の消費・産生低下で延長し得ます。"
      },
      {
        "name": "後天性凝固因子インヒビター",
        "why": "凝固因子を妨げる抗体により延長します。"
      },
      {
        "name": "ループスアンチコアグラント",
        "why": "試験管内の反応を妨げ、出血がなくても延長します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "更衣や移乗時に、皮下出血の拡大・局所の腫脹に気付く。",
      "ヘパリン使用中の患者で穿刺部の出血と採血結果の推移を確認する。"
    ],
    "observations": [
      "抗凝固薬と採血時刻・投与状況を確認する。",
      "皮膚・創部・穿刺部の出血変化をみる。",
      "腫脹・疼痛の新規出現とHb・血小板の経過を合わせる。"
    ],
    "pitfalls": "「延長＝必ず出血する」「短縮＝血栓がある」とは読めません。ヘパリン混入など採血条件の影響もあります。"
  },
  {
    "id": "fibrinogen",
    "group": "凝固・線溶",
    "abbr": "Fib / Fbg",
    "name": "フィブリノゲン",
    "en": "Fibrinogen",
    "range": "施設例：200～400 mg/dL",
    "meaning": "血栓の骨組みとなるフィブリンの材料。肝臓で作られ、炎症でも増える。",
    "high": "炎症、感染、組織損傷などの急性期反応で上昇する。高値だけで血栓症とはいえない。",
    "low": "DICなどでの消費、大量出血・希釈、重い肝障害などで低下する。",
    "symptoms": "高値そのものによる特有の症状は通常ありません。低値の背景に止血異常がある場合は、創部からの出血や血腫などを伴い得ます。炎症では上昇するため、消費があっても範囲内に見える場合があります。",
    "related": [
      "pt",
      "aptt",
      "plt",
      "ddimer",
      "fdp",
      "crp"
    ],
    "context": "術後・外傷、感染症、輸液・輸血、肝障害の経過に沿って読む。",
    "caution": "急性期反応で上がるため、正常値でも消費がないとはいえない。単回値より推移を確認する。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://www.jscva.org/files/guideline/%E5%BF%83%E8%87%93%E8%A1%80%E7%AE%A1%E9%BA%BB%E9%85%94%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A1%80%E6%B6%B2%E7%B2%98%E5%BC%BE%E6%80%A7%E6%A4%9C%E6%9F%BB%E3%81%AE%E4%BD%BF%E7%94%A8%E6%8C%87%E9%87%9D2025.pdf",
      "https://jsth.medical-words.jp/words/word-547/",
      "https://jsth.medical-words.jp/words/word-596/"
    ],
    "combination": "CRP上昇を伴う高値なら急性期反応が関わり得る。血小板低下・PT延長・FDP/Dダイマー上昇を伴う低下なら、消費の要素を既知の病態と照合する。",
    "aliases": "Fib Fbg フィブリノゲン",
    "diseasesHigh": [
      {
        "name": "肺炎などの感染・炎症",
        "why": "急性期反応として産生が増えます。"
      },
      {
        "name": "手術・外傷後",
        "why": "組織侵襲に対する反応で上昇し得ます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "DIC（播種性血管内凝固）",
        "why": "凝固・線溶の活性化により消費されます。"
      },
      {
        "name": "大量出血・大量輸液",
        "why": "喪失・希釈により低下し得ます。"
      },
      {
        "name": "重い肝障害",
        "why": "肝での産生低下が関わります。"
      }
    ],
    "rehabExamples": [
      "術後の更衣時に創部のにじみや皮下出血の変化を確認する。",
      "局所の腫れ・疼痛増加を、単なる術後痛だけで説明せず経過を共有する。"
    ],
    "observations": [
      "単回値より低下・上昇の方向を見る。",
      "血小板・PT・Dダイマー・FDPと組み合わせる。",
      "出血所見、感染・手術からの時間、輸液・輸血の背景を確認する。"
    ],
    "pitfalls": "高値は血栓の証明ではなく、正常値でも消費性の変化を除外できません。"
  },
  {
    "id": "ddimer",
    "group": "凝固・線溶",
    "abbr": "D-dimer / DD",
    "name": "Dダイマー",
    "en": "D-dimer",
    "range": "施設例：1.0 μg/mL未満。試薬・単位（FEU/DDU）ごとに異なり、共通の基準値はない。",
    "meaning": "いったんできた架橋フィブリンが分解された跡をみる検査。凝固と線溶の両方が関わる。",
    "high": "血栓症のほか、術後、外傷、血腫、感染・炎症、悪性腫瘍などでも上昇する。",
    "low": "低値は分解産物が少ないことを示すが、数値だけで血栓を否定できるわけではない。",
    "symptoms": "Dダイマー自体が症状を起こすわけではありません。DVTでは下肢の腫脹・疼痛・熱感、肺塞栓では急な息切れや呼吸時の胸痛などがあり得ますが、無症状の場合もあります。",
    "related": [
      "fdp",
      "plt",
      "pt",
      "fibrinogen"
    ],
    "context": "入院前からの値、手術日、血腫・出血、感染、既知の血栓症・画像結果と照合する。",
    "caution": "高値＝深部静脈血栓症ではない。FEUとDDU、異なる試薬の数値を単純比較しない。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://jsth.medical-words.jp/words/word-177/",
      "https://www.nhlbi.nih.gov/health/venous-thromboembolism/symptoms"
    ],
    "combination": "FDP、血小板、PT、フィブリノゲンと合わせて凝固・線溶の動きを整理する。単独高値では血栓の部位・大きさは分からず、既存の画像所見や術後経過が必要。",
    "aliases": "Dダイマー D-dimer Ddimer DD",
    "diseasesHigh": [
      {
        "name": "深部静脈血栓症・肺血栓塞栓症",
        "why": "できた架橋フィブリンの分解が増えます。"
      },
      {
        "name": "DIC（播種性血管内凝固）",
        "why": "全身の凝固・線溶活性化により上昇します。"
      },
      {
        "name": "手術・外傷後、血腫",
        "why": "血管内血栓症がなくても上昇し得ます。"
      },
      {
        "name": "感染・悪性腫瘍",
        "why": "凝固・線溶への影響で上昇し得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "靴下・装具の着脱時に、新しい左右差のある下肢腫脹に気付く。",
      "移動中に急な呼吸苦や胸痛が出現し、普段の疲れ方と異なる。"
    ],
    "observations": [
      "新しい片側性腫脹・疼痛と、以前からの浮腫を区別する。",
      "呼吸苦・胸痛・失神など急な全身変化を見逃さない。",
      "手術日・血腫・既知の血栓と画像結果、治療の経過を照合する。"
    ],
    "pitfalls": "高値だけでDVTを決めず、数値が高いだけで一律にリハ可否を判断しません。症状がなくても血栓症を否定できません。"
  },
  {
    "id": "fdp",
    "group": "凝固・線溶",
    "abbr": "FDP",
    "name": "フィブリン・フィブリノゲン分解産物",
    "en": "Fibrin/fibrinogen degradation products",
    "range": "施設例：5 μg/mL未満。試薬により異なる。",
    "meaning": "フィブリンだけでなく、フィブリノゲンが分解された産物も含めて測定する。",
    "high": "凝固・線溶の活性化、血栓症、DIC、大きな血腫などで上昇し得る。",
    "low": "低値そのものに病的意味は通常乏しい。",
    "symptoms": "FDP上昇そのものの症状はありません。背景に凝固因子消費や強い線溶があれば出血を、血栓症があれば部位に応じた症状を伴うことがあります。",
    "related": [
      "ddimer",
      "fibrinogen",
      "plt",
      "pt"
    ],
    "context": "外傷・手術、血栓溶解治療、感染などの背景を確認する。",
    "caution": "FDPとDダイマーは同じ項目ではない。試薬間で結果は単純比較できず、両者の乖離も起こる。",
    "refs": [
      "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf",
      "https://jsth.medical-words.jp/words/word-176/",
      "https://www.nhlbi.nih.gov/health/venous-thromboembolism/symptoms"
    ],
    "combination": "Dダイマーとともに高ければフィブリン分解の関与を考える。FDPだけが目立つ場合もあり、フィブリノゲン・血小板・PTと合わせて線溶や消費の経過を読む。",
    "diseasesHigh": [
      {
        "name": "DIC（播種性血管内凝固）",
        "why": "フィブリン・フィブリノゲンの分解が増えます。"
      },
      {
        "name": "血栓症",
        "why": "形成されたフィブリンの分解が増えます。"
      },
      {
        "name": "大きな血腫・手術・外傷後",
        "why": "血管外の凝血や侵襲の影響もあります。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "術後の皮下出血や創部の出血が、前回より広がっている。",
      "新しい局所の疼痛・腫脹と、全身の疲労・反応低下を合わせて確認する。"
    ],
    "observations": [
      "出血の部位・量・変化を記録する。",
      "Dダイマー・フィブリノゲン・血小板と推移を合わせる。",
      "既知の感染・外傷・血栓溶解治療などの背景を確認する。"
    ],
    "pitfalls": "FDPとDダイマーは同じ物質を測っていません。FDPの高低だけで病態や活動可否を決めません。"
  },
  {
    "id": "ph",
    "group": "血液ガス",
    "abbr": "pH",
    "name": "水素イオン指数",
    "en": "pH (hydrogen ion activity index)",
    "range": "動脈血：7.350～7.450（単位なし）",
    "meaning": "血液の酸性・アルカリ性の程度。CO₂による呼吸性要素とHCO₃⁻による代謝性要素の結果を表す。",
    "high": "7.45を超えるとアルカレミア。呼吸性・代謝性の原因をPaCO₂とHCO₃⁻で分けて考える。",
    "low": "7.35未満はアシデミア。呼吸性・代謝性の原因、または両者の合併がある。",
    "symptoms": "酸塩基の大きな異常では、呼吸の深さ・速さ、覚醒、筋の働きなどが変化し得ます。ただし症状は原疾患や変化速度にも左右されます。ケトアシドーシスでは深く速い呼吸、強い疲労、悪心などが現れ得ます。",
    "related": [
      "paco2",
      "hco3",
      "be",
      "lactate",
      "k"
    ],
    "context": "呼吸不全、腎障害、循環不全、嘔吐などの既知の経過を組み合わせる。",
    "caution": "pH正常でも代償や混合性障害があり得る。「アシデミア」は血液の状態、「アシドーシス」は酸性化させる過程を指す。静脈血と区別する。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html"
    ],
    "combination": "pH低下にPaCO₂上昇が重なれば呼吸性、HCO₃⁻低下が重なれば代謝性の酸性化要素がある。両方の異常や代償により、pHが正常域でも問題が隠れる場合がある。",
    "diseasesHigh": [
      {
        "name": "過換気を伴う呼吸性アルカローシス",
        "why": "CO₂が減りpHが上がります。"
      },
      {
        "name": "嘔吐・利尿薬に伴う代謝性アルカローシス",
        "why": "酸の喪失や体液変化が関わります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "低換気による呼吸性アシドーシス",
        "why": "CO₂貯留でpHが下がります。"
      },
      {
        "name": "腎不全・糖尿病性ケトアシドーシス",
        "why": "酸の排泄低下や酸の増加が関わります。"
      },
      {
        "name": "循環不全・敗血症に伴う代謝性アシドーシス",
        "why": "乳酸増加など複数の要因が関わります。"
      }
    ],
    "rehabExamples": [
      "会話や更衣中に、普段と違う深い呼吸・反応の鈍さがみられる。",
      "軽い動作でも呼吸の様子が大きく変わり、訴えと動作がかみ合わない。"
    ],
    "observations": [
      "呼吸数だけでなく深さ・リズム・努力をみる。",
      "覚醒・応答・筋力の新しい変化を確認する。",
      "PaCO₂・HCO₃⁻・BE・乳酸と採血時の条件を合わせる。"
    ],
    "pitfalls": "pH正常でも代償や混合性障害があり得ます。pHだけで原因を決めず、観察所見も単独原因に帰属しません。"
  },
  {
    "id": "paco2",
    "group": "血液ガス",
    "abbr": "PaCO₂",
    "name": "動脈血二酸化炭素分圧",
    "en": "Arterial partial pressure of carbon dioxide",
    "range": "動脈血：35～45 mmHg",
    "meaning": "肺胞換気とCO₂産生の釣り合いを反映する。酸素化をみるPaO₂とは別の指標。",
    "high": "CO₂排出に対し換気が不足した状態で上昇する。pH低下を伴えば呼吸性アシドーシスの要素。",
    "low": "過換気や、代謝性アシドーシスに対する呼吸性代償などで低下する。",
    "symptoms": "CO₂貯留では頭痛、混乱、反応の変化などがあり、重い場合は強い眠気や意識低下を伴い得ます。低値が過換気による場合はしびれやめまいなどがみられることもあります。慢性高値では自覚症状が乏しいことがあります。",
    "related": [
      "ph",
      "hco3",
      "pao2",
      "be"
    ],
    "context": "COPD、呼吸筋力低下、鎮静薬、呼吸補助の条件などと照合する。慢性高値ではHCO₃⁻増加による代償があり得る。",
    "caution": "Paのaは動脈血。静脈血PCO₂をそのまま置き換えない。SpO₂が保たれていてもCO₂貯留は分からない。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.nhlbi.nih.gov/health/respiratory-failure/symptoms"
    ],
    "combination": "PaCO₂上昇とpH低下の組み合わせは呼吸性酸性化を示す。HCO₃⁻も高ければ代償または代謝性要素を考え、単回値だけで急性・慢性を決めない。",
    "aliases": "PaCO2 PCO2 二酸化炭素",
    "diseasesHigh": [
      {
        "name": "COPD増悪",
        "why": "換気がCO₂産生に対して不足し、貯留し得ます。"
      },
      {
        "name": "神経筋疾患・脊髄損傷などの低換気",
        "why": "呼吸筋機能の低下が関わります。"
      },
      {
        "name": "鎮静薬・オピオイドの影響",
        "why": "呼吸の駆動が抑えられる場合があります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "疼痛・不安などに伴う過換気",
        "why": "CO₂排出が増えます。"
      },
      {
        "name": "代謝性アシドーシスへの代償",
        "why": "酸性化を補う呼吸により低下します。"
      }
    ],
    "rehabExamples": [
      "会話中に眠り込む、返答が遅くなるなど、前回と異なる覚醒がみられる。",
      "更衣・整容中に呼吸が浅くなり、活動への集中を保てない。"
    ],
    "observations": [
      "覚醒・会話の反応と普段との差を確認する。",
      "呼吸の深さ・リズム・努力、呼吸補助の条件をみる。",
      "pH・HCO₃⁻と過去のPaCO₂、鎮静薬の状況を合わせる。"
    ],
    "pitfalls": "SpO₂が保たれていてもCO₂貯留は分かりません。慢性高値と急性悪化はpH・経時変化も含めて読みます。"
  },
  {
    "id": "pao2",
    "group": "血液ガス",
    "abbr": "PaO₂",
    "name": "動脈血酸素分圧",
    "en": "Arterial partial pressure of oxygen",
    "range": "動脈血・室内気の目安：80～100 mmHg。年齢・酸素条件で解釈する。",
    "meaning": "血液中に溶けた酸素の分圧。肺での酸素化を理解する指標。",
    "high": "酸素投与で上がるため、高値だけで肺機能が良いとはいえない。",
    "low": "肺炎、肺うっ血などによるガス交換障害、低換気、低い吸入酸素濃度などで低下する。",
    "symptoms": "低酸素血症では息切れ、強い疲労、眠気などがみられ、重い場合は意識変化を伴います。自覚的な息苦しさが目立たないこともあり、呼吸・覚醒・動作の変化を合わせてみます。",
    "related": [
      "sao2",
      "paco2",
      "hb"
    ],
    "context": "採血時の酸素デバイス、流量・FiO₂（吸入酸素濃度）、呼吸補助条件と必ず一緒に読む。",
    "caution": "静脈血PO₂は動脈血の酸素化評価に使えない。PaO₂は酸素含量そのものではなく、Hbが低ければPaO₂正常でも酸素運搬量は低下し得る。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.nhlbi.nih.gov/health/respiratory-failure/symptoms"
    ],
    "combination": "PaO₂とSaO₂で酸素化、PaCO₂で換気を分けて読む。Hbも合わせ、同じPaO₂でも貧血では運べる酸素量が異なることを意識する。",
    "aliases": "PaO2 PO2 酸素",
    "diseasesHigh": [
      {
        "name": "酸素投与中",
        "why": "吸入酸素の増加で上昇します。"
      }
    ],
    "diseasesLow": [
      {
        "name": "肺炎・誤嚥性肺炎",
        "why": "肺のガス交換障害により低下し得ます。"
      },
      {
        "name": "心不全・肺水腫",
        "why": "肺うっ血によるガス交換障害が関わります。"
      },
      {
        "name": "間質性肺疾患・COPD（慢性閉塞性肺疾患）",
        "why": "ガス交換障害などが関わります。"
      },
      {
        "name": "低換気・肺血栓塞栓症",
        "why": "換気不足や肺血流の障害により低下し得ます。"
      }
    ],
    "rehabExamples": [
      "更衣や短い移動で、普段より休止が増え会話を続けにくい。",
      "動作の遅れと眠気が増え、本人の訴えが少なくても状態が変化している。"
    ],
    "observations": [
      "採血時と活動時の酸素デバイス・流量・呼吸補助条件を確認する。",
      "SpO₂の推移に加え、呼吸数・努力・会話・覚醒をみる。",
      "症状が出た動作・姿勢と回復の経過を記録する。"
    ],
    "pitfalls": "静脈血PO₂を動脈血の酸素化の代わりに使いません。酸素投与条件が異なるPaO₂同士を単純比較しません。"
  },
  {
    "id": "hco3",
    "group": "血液ガス",
    "abbr": "HCO₃⁻",
    "name": "重炭酸イオン",
    "en": "Bicarbonate",
    "range": "動脈血：22～26 mmol/L",
    "meaning": "酸を緩衝する重炭酸の量。酸塩基平衡の代謝性要素をみる。",
    "high": "代謝性アルカローシスのほか、慢性CO₂貯留に対する腎性代償でも増える。",
    "low": "代謝性アシドーシスのほか、呼吸性アルカローシスへの代償でも減る。",
    "symptoms": "HCO₃⁻の高低そのものに固有の症状はなく、pHと背景病態に左右されます。酸性化への代償で呼吸が深く速くなったり、併存する電解質異常で脱力などがみられる場合があります。",
    "related": [
      "ph",
      "paco2",
      "be",
      "na",
      "cl",
      "lactate"
    ],
    "context": "腎障害、下痢、嘔吐、利尿薬、慢性呼吸不全などの経過と合わせる。",
    "caution": "血液ガスのHCO₃⁻は通常pHとPCO₂からの計算値。高低だけで代謝性障害と決めず、呼吸性障害への代償を確認する。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html"
    ],
    "combination": "HCO₃⁻低下とpH低下なら代謝性酸性化の要素がある。Na・Clとの差や乳酸、腎機能を合わせて背景を整理し、PaCO₂で呼吸性代償の関与を見る。",
    "aliases": "HCO3 重炭酸",
    "diseasesHigh": [
      {
        "name": "嘔吐・胃液喪失、利尿薬使用",
        "why": "代謝性アルカローシスで増えることがあります。"
      },
      {
        "name": "慢性CO₂貯留",
        "why": "腎の代償により増加します。"
      }
    ],
    "diseasesLow": [
      {
        "name": "腎不全・糖尿病性ケトアシドーシス",
        "why": "酸の増加・排泄低下などで減少します。"
      },
      {
        "name": "下痢",
        "why": "消化管からの重炭酸喪失で低下し得ます。"
      },
      {
        "name": "呼吸性アルカローシスへの代償",
        "why": "呼吸性変化への代償でも低下します。"
      }
    ],
    "rehabExamples": [
      "下痢が続く患者で、新しい脱力や呼吸の深さの変化に気付く。",
      "慢性呼吸不全の患者で眠気が増えた際、HCO₃⁻だけでなくpH・PaCO₂の経過を確認する。"
    ],
    "observations": [
      "嘔吐・下痢・胃管排液・利尿の経過を確認する。",
      "呼吸パターン・覚醒・筋機能の変化をみる。",
      "pH・PaCO₂・Na・Cl・Kと組み合わせる。"
    ],
    "pitfalls": "HCO₃⁻高値をすべて代謝性アルカローシスとしません。慢性呼吸性障害への代償でも変化します。"
  },
  {
    "id": "be",
    "group": "血液ガス",
    "abbr": "BE",
    "name": "ベースエクセス（塩基過剰）",
    "en": "Base excess",
    "range": "動脈血：−2～＋2 mmol/L",
    "meaning": "一定の条件に補正したときの塩基の過不足。代謝性要素を整理する補助指標。",
    "high": "正方向の増加は塩基過剰で、代謝性アルカローシスや慢性呼吸性アシドーシスへの代償でみられる。",
    "low": "負方向の増加は塩基不足で、代謝性アシドーシスなどでみられる。",
    "symptoms": "BEそのものに特有の症状はありません。背景に酸塩基異常があれば呼吸・意識・筋機能などの変化を伴い、循環不全など原疾患の症状が重なる場合があります。",
    "related": [
      "ph",
      "paco2",
      "hco3",
      "lactate"
    ],
    "context": "循環不全、腎障害、輸液、呼吸不全の経過をpH・HCO₃⁻と合わせて整理する。",
    "caution": "原因や重症度を単独で決められない。BEと細胞外液BE（BEecf）は計算上の定義が異なるため表示を確認する。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html"
    ],
    "combination": "BEが負方向でHCO₃⁻も低ければ、塩基不足の方向で整合する。pH・PaCO₂を合わせて呼吸性要素を区別し、乳酸や腎機能で背景を整理する。",
    "diseasesHigh": [
      {
        "name": "代謝性アルカローシス",
        "why": "嘔吐や利尿薬などに伴う塩基過剰を反映し得ます。"
      },
      {
        "name": "慢性呼吸性アシドーシスへの代償",
        "why": "腎性代償で正方向に変化し得ます。"
      }
    ],
    "diseasesLow": [
      {
        "name": "腎不全・ケトアシドーシス",
        "why": "代謝性の酸性化で負方向に変化し得ます。"
      },
      {
        "name": "循環不全・敗血症",
        "why": "乳酸増加などに伴う塩基不足を反映し得ます。"
      }
    ],
    "rehabExamples": [
      "動作中に新たな深い呼吸・強い倦怠感がみられ、血ガスの推移と照合する。",
      "術後患者の反応低下がある際、BEだけでなく循環・呼吸の経過も確認する。"
    ],
    "observations": [
      "呼吸の深さ・速さ、覚醒の変化をみる。",
      "pH・HCO₃⁻・PaCO₂・乳酸と推移を確認する。",
      "輸液・腎機能・既知の循環不全の背景を照合する。"
    ],
    "pitfalls": "BEの低下だけを「ショック」と同一視しません。値の変化には輸液や腎機能なども関わります。"
  },
  {
    "id": "sao2",
    "group": "血液ガス",
    "abbr": "SaO₂ / sO₂",
    "name": "動脈血酸素飽和度",
    "en": "Arterial oxygen saturation",
    "range": "動脈血の目安：95～99 %（大分大学病院のsO₂基準例）。施設・測定法の範囲を優先。",
    "meaning": "Hbが酸素と結合している割合。PaO₂とは異なる量で、パルスオキシメータのSpO₂とも測定方法が違う。",
    "high": "酸素投与などで高くなる。上限付近では値の差だけから酸素分圧の差を読み取れない。",
    "low": "酸素化不良などで低下する。採血条件・測定方法も確認する。",
    "symptoms": "低値の背景に低酸素血症があれば、息切れ、疲労、眠気などが現れ得ます。ただし飽和度だけで症状は決まらず、Hb量や循環状態も酸素供給に関係します。",
    "related": [
      "pao2",
      "hb",
      "paco2"
    ],
    "context": "酸素条件、Hb、呼吸状態と組み合わせる。検査票のsO₂が実測か計算かを確認する。",
    "caution": "COオキシメータによる実測sO₂、計算sO₂、酸素化Hb分画（FO₂Hb）は区別する。COHb・MetHbなどがあると解釈に注意。静脈血の飽和度とは別。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf",
      "https://www.med.oita-u.ac.jp/kensab/kijun20260801.pdf",
      "https://www.nhlbi.nih.gov/health/respiratory-failure/symptoms"
    ],
    "combination": "PaO₂と併せて酸素化を、Hbと併せて酸素運搬の背景を読む。SaO₂が保たれていてもPaCO₂高値や貧血が併存することがある。",
    "aliases": "SaO2 sO2 SO2 O2SAT",
    "diseasesHigh": [
      {
        "name": "酸素投与中",
        "why": "酸素と結合しているHbの割合が上がります。"
      }
    ],
    "diseasesLow": [
      {
        "name": "肺炎・肺水腫・間質性肺疾患",
        "why": "酸素化障害で低下し得ます。"
      },
      {
        "name": "低換気・肺血栓塞栓症",
        "why": "換気や肺血流の問題で低下し得ます。"
      }
    ],
    "rehabExamples": [
      "整容や更衣の途中で休止が増え、呼吸の様子が前回と異なる。",
      "数値上の飽和度が保たれていても、貧血を伴う患者では疲労が強い。"
    ],
    "observations": [
      "血ガスのSaO₂とパルスオキシメータのSpO₂を区別する。",
      "酸素条件・Hb・呼吸努力・覚醒を合わせてみる。",
      "活動前後の変化と測定の信頼性を確認する。"
    ],
    "pitfalls": "飽和度が高くても換気良好や酸素運搬量十分とは限りません。計算値・実測値・酸素化Hb分画も区別します。"
  },
  {
    "id": "lactate",
    "group": "血液ガス",
    "abbr": "Lac / Lactate",
    "name": "乳酸",
    "en": "Lactate",
    "range": "動脈血の施設例：0.5～2.0 mmol/L（4.5～18.0 mg/dL）",
    "meaning": "産生と肝・腎などでの処理の釣り合いを反映する代謝産物。循環・代謝状態を把握する補助になる。",
    "high": "循環不全・組織低酸素のほか、交感神経刺激、肝での処理低下、痙攣などでも上がる。",
    "low": "低値自体に通常大きな病的意義はない。",
    "symptoms": "乳酸高値自体が症状を決めるわけではありません。背景が循環不全や代謝性アシドーシスであれば、頻呼吸、強い倦怠感、意識・反応の変化などを伴うことがあります。",
    "related": [
      "ph",
      "hco3",
      "be",
      "cr",
      "ast"
    ],
    "context": "採血時刻、血圧・循環の経過、感染、肝機能、薬剤・痙攣などを確認する。",
    "caution": "乳酸高値＝嫌気性代謝・敗血症とは限らない。mmol/Lとmg/dLを混同せず、同じ採血条件で推移を読む。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://doi.org/10.1007/s00134-021-06506-y",
      "https://www.kchnet.or.jp/for_medicalstaff/LI/item/LI_DETAIL_025200.html"
    ],
    "combination": "乳酸上昇とpH・HCO₃⁻低下が重なれば、乳酸が酸塩基異常に関与している可能性がある。肝・腎機能、循環経過も併せ、乳酸単独で原因を断定しない。",
    "diseasesHigh": [
      {
        "name": "ショック・循環不全",
        "why": "組織への酸素供給不足などで増加し得ます。"
      },
      {
        "name": "敗血症",
        "why": "循環障害以外の代謝変化も含めて増加し得ます。"
      },
      {
        "name": "けいれん・強い交感神経刺激",
        "why": "乳酸産生が増えます。"
      },
      {
        "name": "肝障害",
        "why": "乳酸処理の低下が関わります。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "短い移乗でも呼吸・反応・顔色が普段と大きく違う。",
      "感染症患者で急な活動耐容能の低下があり、血圧・覚醒・採血推移を合わせて確認する。"
    ],
    "observations": [
      "採血時刻と治療・循環変化の前後関係を見る。",
      "呼吸・血圧・意識・末梢の状態と症状を総合する。",
      "pH・HCO₃⁻・BE、肝腎機能と推移を照合する。"
    ],
    "pitfalls": "乳酸高値＝嫌気性代謝・敗血症と断定しません。低下した値だけで臨床状態の回復を決めません。"
  },
  {
    "id": "bnp",
    "group": "筋・心臓関連",
    "abbr": "BNP",
    "name": "B型ナトリウム利尿ペプチド",
    "en": "B-type natriuretic peptide",
    "range": "基準値：18.4 pg/mL以下。35 pg/mLは心不全の可能性を考慮する臨床判断値で、基準値とは別。",
    "meaning": "心臓への壁応力に応じて分泌されるホルモン。心負荷の程度と経過を把握する補助指標。",
    "high": "心不全などの心負荷に加え、腎機能低下・心房細動などの影響でも上がる。",
    "low": "低値は一般に大きな心負荷の可能性を下げるが、肥満や一部のHFpEFでは低めとなり得る。",
    "symptoms": "背景にうっ血がある場合は、労作時息切れ、横になると苦しい、浮腫、体重増加などがみられ得ます。疲労や集中のしにくさが目立つこともあります。値自体が症状を起こすわけではなく、症状が乏しい高値もあります。",
    "related": [
      "ntprobnp",
      "cr",
      "egfr",
      "na"
    ],
    "context": "既知の心不全では症状、体重、腎機能、治療前後の推移と併せて読む。",
    "caution": "BNP値は心拍出量やうっ血を直接測るものではない。ARNIはBNPの代謝に影響し、NT-proBNPとは動きが異なる場合がある。",
    "refs": [
      "https://www.jhfs.or.jp/statement-guideline/statement20231017.html",
      "https://www.jhfs.or.jp/statement-guideline/files/statement20260205.pdf",
      "https://www.nhlbi.nih.gov/health/heart-failure/symptoms"
    ],
    "combination": "Cr/eGFRの変化、Na、体重・症状と合わせる。同じ人の治療前後の推移が参考になるが、腎機能の変化やARNIの影響も分けて考える。",
    "diseasesHigh": [
      {
        "name": "心不全",
        "why": "心臓への壁応力増大が分泌を促します。"
      },
      {
        "name": "心房細動",
        "why": "心房の負荷などでも上昇し得ます。"
      },
      {
        "name": "腎機能低下",
        "why": "排泄・代謝などの影響で上昇します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "臥位での更衣が苦しく、上体を起こした姿勢で楽になる。",
      "短いトイレ移動でも以前より息切れし、休止・回復時間が増える。"
    ],
    "observations": [
      "姿勢・活動と息切れの関係、同じ動作での前回との差を見る。",
      "浮腫・体重・酸素条件・腎機能の推移と照合する。",
      "疲労・集中・食欲の変化や休息後の回復を確認する。"
    ],
    "pitfalls": "値だけでその日の活動耐容能や心不全悪化を決めません。ARNI使用、腎機能、心房細動、肥満などの影響も確認します。"
  },
  {
    "id": "ntprobnp",
    "group": "筋・心臓関連",
    "abbr": "NT-proBNP",
    "name": "N末端プロB型ナトリウム利尿ペプチド",
    "en": "N-terminal pro-B-type natriuretic peptide",
    "range": "学会記載の基準値：55 pg/mL以下。125 pg/mLは心不全の可能性を考慮する臨床判断値。",
    "meaning": "BNPの前駆体が分かれる際に生じる断片。心臓への負荷とその経過を把握する指標。",
    "high": "心負荷のほか、高齢、腎機能低下、心房細動などでも上昇する。",
    "low": "低値は一般に心不全の可能性を下げるが、肥満などの影響がある。",
    "symptoms": "背景にうっ血がある場合は、労作時息切れ、横になると苦しい、浮腫、体重増加などがみられ得ます。疲労や集中のしにくさが目立つこともあります。値自体が症状を起こすわけではなく、症状が乏しい高値もあります。",
    "related": [
      "bnp",
      "cr",
      "egfr",
      "na"
    ],
    "context": "腎機能の変化、年齢、症状、治療経過と照合する。ARNI使用中はBNPとの違いを意識する。",
    "caution": "BNPと数値を相互換算しない。急性期の診断カットオフ、慢性期の判断値、施設基準範囲は区別する。",
    "refs": [
      "https://www.jhfs.or.jp/statement-guideline/statement20231017.html",
      "https://www.jhfs.or.jp/statement-guideline/files/statement20260205.pdf",
      "https://www.nhlbi.nih.gov/health/heart-failure/symptoms"
    ],
    "combination": "Cr/eGFRと併せ、腎機能低下による値への影響を確認する。BNPとどちらかの絶対値を比較するのでなく、同じ項目の経時変化と症状を読む。",
    "diseasesHigh": [
      {
        "name": "心不全",
        "why": "心臓への壁応力増大が分泌を促します。"
      },
      {
        "name": "心房細動",
        "why": "心房の負荷などでも上昇し得ます。"
      },
      {
        "name": "腎機能低下",
        "why": "排泄・代謝などの影響で上昇します。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "臥位での更衣が苦しく、上体を起こした姿勢で楽になる。",
      "短いトイレ移動でも以前より息切れし、休止・回復時間が増える。"
    ],
    "observations": [
      "姿勢・活動と息切れの関係、同じ動作での前回との差を見る。",
      "浮腫・体重・酸素条件・腎機能の推移と照合する。",
      "疲労・集中・食欲の変化や休息後の回復を確認する。"
    ],
    "pitfalls": "値だけでその日の活動耐容能や心不全悪化を決めません。ARNI使用、腎機能、心房細動、肥満などの影響も確認します。"
  },
  {
    "id": "troponin",
    "group": "筋・心臓関連",
    "abbr": "cTnI / cTnT / hs-cTn",
    "name": "心筋トロポニン",
    "en": "Cardiac troponin I / T; high-sensitivity cardiac troponin",
    "range": "測定法ごとの99パーセンタイル上限値を使用。TとI、試薬、性別、単位で異なるため、一律の値は掲載しない。",
    "meaning": "心筋細胞の傷害を捉える蛋白。高感度法はhs-cTnと表記される。",
    "high": "心筋梗塞だけでなく、心不全、心筋炎、肺塞栓、重症感染症、腎障害などでも上昇し得る。",
    "low": "低値・陰性は採血時点での値であり、発症からの時間や測定法に左右される。",
    "symptoms": "値そのものではなく背景の心筋傷害・虚血などが症状に関わります。胸部不快感、息切れ、冷汗、悪心などを伴う場合がある一方、典型的な胸痛が乏しいこともあります。",
    "related": [
      "ck",
      "bnp",
      "cr"
    ],
    "context": "診断名、心電図・画像、発症・手術からの時間、連続測定での上昇・下降を確認する。",
    "caution": "上限超過は心筋傷害を示すが、心筋梗塞の確定とは異なる。ng/Lとng/mLを混同しない（1 ng/mL＝1000 ng/L）。",
    "refs": [
      "https://www.jacc.org/doi/10.1016/j.jacc.2018.08.1038",
      "https://www.nhlbi.nih.gov/health/heart-attack/symptoms"
    ],
    "combination": "連続測定で上昇・下降があるか、CK・腎機能や既存の心電図・画像所見と整合するかを確認する。トロポニン高値だけでは心筋梗塞とはいえない。",
    "aliases": "TnT TnI hs-TnT hs-TnI hs-cTn",
    "diseasesHigh": [
      {
        "name": "心筋梗塞",
        "why": "虚血に伴う心筋傷害で上昇します。"
      },
      {
        "name": "心筋炎・心不全",
        "why": "虚血以外の心筋傷害でも上昇し得ます。"
      },
      {
        "name": "心臓手術後",
        "why": "手術に伴う心筋傷害などが関わります。"
      },
      {
        "name": "肺塞栓・重症感染症・腎障害",
        "why": "心負荷や複数の機序で高値となり得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "更衣・移動中に、これまでなかった胸部圧迫感や冷汗を訴える。",
      "本人は疲れと表現するが、急な息切れや反応低下が重なっている。"
    ],
    "observations": [
      "新しい胸部症状、呼吸苦、冷汗・悪心などを確認する。",
      "症状の出現時刻と発症・術後・採血時刻を照合する。",
      "心電図・診断・治療経過と連続測定の上昇下降を確認する。"
    ],
    "pitfalls": "上昇＝心筋梗塞ではありません。陰性・低値も採血時点の情報であり、新たな症状を否定する材料にしません。"
  },
  {
    "id": "pct",
    "group": "炎症",
    "abbr": "PCT",
    "name": "プロカルシトニン",
    "en": "Procalcitonin",
    "range": "参考基準値：0.05 ng/mL未満。0.5 ng/mLなどの臨床判断値とは区別する。",
    "meaning": "全身性の細菌感染などで上昇する炎症関連マーカー。CRPなどと併せて読む。",
    "high": "細菌感染・敗血症などで上昇し得るが、大手術・重症外傷など感染以外の侵襲でも上がる。",
    "low": "低値でも発症早期や局所感染などは否定できない。",
    "symptoms": "PCT自体が症状を起こすわけではありません。背景の感染・侵襲により発熱、倦怠感、呼吸や循環、覚醒の変化などを伴い得ます。低値でも早期・局所感染は除外できません。",
    "related": [
      "crp",
      "wbc",
      "lactate",
      "cr"
    ],
    "context": "採血時期、手術・外傷からの時間、抗菌薬の経過、培養結果などと照合する。",
    "caution": "単独で感染の有無や重症度を断定しない。経時変化と臨床経過を重視する。血算のplateletcrit（同じ略語PCT）とは別の項目。",
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/6439.html",
      "https://www.jstage.jst.go.jp/article/jjrm/62/1/62_9/_pdf",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "combination": "CRP・WBCと採血時刻を合わせ、同じ方向に変化しているか確認する。乳酸などの全身状態や培養結果、術後・外傷の経過も照合する。",
    "diseasesHigh": [
      {
        "name": "細菌感染・敗血症",
        "why": "全身性炎症に伴い産生が増えます。"
      },
      {
        "name": "大手術・重症外傷・ショック",
        "why": "感染以外の強い侵襲でも上昇し得ます。"
      }
    ],
    "diseasesLow": [],
    "rehabExamples": [
      "昨日できた整容・食事動作を今日は保てず、発熱や反応低下が重なる。",
      "肺炎患者の移乗で、普段より息切れと休止が増える。"
    ],
    "observations": [
      "体温だけでなく、呼吸・覚醒・活動耐容能の前回との差を見る。",
      "採血時期・術後日数・抗菌薬・培養などの経過を照合する。",
      "WBC・CRP・乳酸と症状の時間差を確認する。"
    ],
    "pitfalls": "PCT高値だけで感染確定や重症度を判断しません。数値の改善と患者の回復は必ずしも同時ではありません。"
  }
];
const LAB_SOURCES = [
  {
    "title": "日本臨床検査医学会：医療系学生用基準範囲（2025年11月改訂）",
    "url": "https://www.jslm.org/committees/standard/20251101.pdf"
  },
  {
    "title": "日本赤十字社愛知医療センター名古屋第一病院：生化学検査",
    "url": "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/"
  },
  {
    "title": "国立病院機構東京病院：臨床検査科 各検査について",
    "url": "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html"
  },
  {
    "title": "国立病院機構名古屋医療センター：血液検査室",
    "url": "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/"
  },
  {
    "title": "久留米大学病院：血液・尿検査 項目説明",
    "url": "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html"
  },
  {
    "title": "大阪急性期・総合医療センター：院内検査 施設基準値",
    "url": "https://www.gh.opho.jp/pdf/kijunti0204.pdf"
  },
  {
    "title": "京都大学医学部附属病院：RDW-CV 検査項目情報",
    "url": "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0203050.html"
  },
  {
    "title": "京都大学医学部附属病院検査部：プロカルシトニン（PCT）",
    "url": "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/6439.html"
  },
  {
    "title": "Evans DC, et al. The Use of Visceral Proteins as Nutrition Markers: An ASPEN Position Paper. Nutr Clin Pract. 2021;36:22–28. doi:10.1002/ncp.10588",
    "url": "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1002/ncp.10588"
  },
  {
    "title": "日本腎臓学会：急性腎障害と慢性腎臓病",
    "url": "https://jsn.or.jp/general/kidneydisease/symptoms04.php"
  },
  {
    "title": "KDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117–S314. doi:10.1016/j.kint.2023.10.018",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38490803/"
  },
  {
    "title": "LSIメディエンス：マグネシウム 検査案内",
    "url": "https://data.medience.co.jp/guide/guide-01090004.html"
  },
  {
    "title": "シー・アール・シー：マグネシウム検査の意義と異常値",
    "url": "https://www.crc-group.co.jp/crc/q_and_a/105.html"
  },
  {
    "title": "Mayo Clinic Laboratories：Complete Blood Cell Count with Differential",
    "url": "https://www.mayocliniclabs.com/test-catalog/Overview/42120"
  },
  {
    "title": "Mayo Clinic Laboratories：Sodium, Serum",
    "url": "https://www.mayocliniclabs.com/test-catalog/Overview/602353"
  },
  {
    "title": "Mayo Clinic Laboratories：Chloride, Serum",
    "url": "https://www.mayocliniclabs.com/test-catalog/overview/8460"
  },
  {
    "title": "Mayo Clinic Laboratories：Calcium, Total, Serum",
    "url": "https://www.mayocliniclabs.com/test-catalog/Overview/601514"
  },
  {
    "title": "Mayo Clinic Laboratories：Calcium, Ionized, Serum",
    "url": "https://www.mayocliniclabs.com/test-catalog/overview/8378"
  },
  {
    "title": "Mayo Clinic Laboratories：Phosphorus (Inorganic), Serum",
    "url": "https://www.mayocliniclabs.com/test-catalog/Overview/8408"
  },
  {
    "title": "厚生労働省：重篤副作用疾患別対応マニュアル 低カリウム血症",
    "url": "https://www.mhlw.go.jp/topics/2006/11/dl/tp1122-1e50.pdf"
  },
  {
    "title": "国立循環器病研究センター：HbA1cってなに？",
    "url": "https://www.ncvc.go.jp/hospital/section/ld/endocrinology/hba1c/"
  },
  {
    "title": "国立病院機構 名古屋医療センター：臨床検査基準値一覧表（2021/12/01、凝固検査の施設例）",
    "url": "https://nagoya.hosp.go.jp/crc/wp-content/uploads/10_kensanmc_20211201.pdf"
  },
  {
    "title": "日本血栓止血学会 用語集：プロトロンビン時間（PT）",
    "url": "https://jsth.medical-words.jp/words/word-547/"
  },
  {
    "title": "日本血栓止血学会 用語集：活性化部分トロンボプラスチン時間（APTT、2025更新）",
    "url": "https://jsth.medical-words.jp/words/word-596/"
  },
  {
    "title": "日本血栓止血学会 用語集：D-ダイマー",
    "url": "https://jsth.medical-words.jp/words/word-177/"
  },
  {
    "title": "日本血栓止血学会 用語集：フィブリン・フィブリノゲン分解産物（FDP）",
    "url": "https://jsth.medical-words.jp/words/word-176/"
  },
  {
    "title": "日本心臓血管麻酔学会：心臓血管麻酔における血液粘弾性検査の使用指針2025",
    "url": "https://www.jscva.org/files/guideline/%E5%BF%83%E8%87%93%E8%A1%80%E7%AE%A1%E9%BA%BB%E9%85%94%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A1%80%E6%B6%B2%E7%B2%98%E5%BC%BE%E6%80%A7%E6%A4%9C%E6%9F%BB%E3%81%AE%E4%BD%BF%E7%94%A8%E6%8C%87%E9%87%9D2025.pdf"
  },
  {
    "title": "京都大学医学部附属病院検査部：血液ガス［動脈血］",
    "url": "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html"
  },
  {
    "title": "厚生労働省公開教材：血液ガス（結果の解釈と酸塩基調節の評価）",
    "url": "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf"
  },
  {
    "title": "日本心不全学会：血中BNPやNT-proBNPを用いた心不全診療に関するステートメント2023年改訂版",
    "url": "https://www.jhfs.or.jp/statement-guideline/statement20231017.html"
  },
  {
    "title": "日本心不全学会：心不全予防に関するステートメント（2026掲載）",
    "url": "https://www.jhfs.or.jp/statement-guideline/files/statement20260205.pdf"
  },
  {
    "title": "Thygesen K, et al. Fourth Universal Definition of Myocardial Infarction (2018). J Am Coll Cardiol. 2018;72:2231–2264. doi:10.1016/j.jacc.2018.08.1038",
    "url": "https://www.jacc.org/doi/10.1016/j.jacc.2018.08.1038"
  },
  {
    "title": "倉敷中央病院：検査情報システム・乳酸",
    "url": "https://www.kchnet.or.jp/for_medicalstaff/LI/item/LI_DETAIL_025200.html"
  },
  {
    "title": "原著：敗血症検査におけるプロカルシトニンの有用性. 日本農村医学会雑誌. 2013;62:9–14.",
    "url": "https://www.jstage.jst.go.jp/article/jjrm/62/1/62_9/_pdf"
  },
  {
    "title": "Evans L, et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y",
    "url": "https://doi.org/10.1007/s00134-021-06506-y"
  },
  {
    "title": "大分大学医学部附属病院検査部・輸血部：院内検査項目及び生物学的基準範囲・臨床判断値一覧（2026/08/01）",
    "url": "https://www.med.oita-u.ac.jp/kensab/kijun20260801.pdf"
  },
  {
    "title": "NHLBI：Anemia — Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/anemia/symptoms"
  },
  {
    "title": "NHLBI：Anemia — What Is Anemia?",
    "url": "https://www.nhlbi.nih.gov/health/anemia"
  },
  {
    "title": "NHLBI：Platelet Disorders — Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/platelet-disorders/symptoms"
  },
  {
    "title": "NIDDK：What Is Kidney Failure? — Symptoms",
    "url": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
  },
  {
    "title": "NIDDK：Low Blood Glucose (Hypoglycemia)",
    "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia"
  },
  {
    "title": "NIDDK：Symptoms & Causes of Cirrhosis",
    "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/symptoms-causes"
  },
  {
    "url": "https://www.cdc.gov/sepsis/about/index.html",
    "title": "CDC：About Sepsis"
  },
  {
    "title": "CDC/NIOSH：Signs and Symptoms of Rhabdomyolysis",
    "url": "https://www.cdc.gov/niosh/rhabdo/signs-symptoms/"
  },
  {
    "title": "PMDA：重篤副作用疾患別対応マニュアル 低カリウム血症",
    "url": "https://www.pmda.go.jp/files/000224778.pdf"
  },
  {
    "title": "PMDA：酸化マグネシウム製剤の高マグネシウム血症に関する適正使用情報",
    "url": "https://www.pmda.go.jp/files/000214495.pdf"
  },
  {
    "title": "Ball S, et al. Society for Endocrinology emergency guidance: severe symptomatic hyponatraemia. Endocr Connect. 2016;5:G4–G6. doi:10.1530/EC-16-0058",
    "url": "https://doi.org/10.1530/EC-16-0058"
  },
  {
    "title": "NHLBI：Asthma — Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/asthma/symptoms"
  },
  {
    "title": "UK Kidney Association：Hyperkalaemia Clinical Practice Guideline（2026年7月更新）",
    "url": "https://guidelines.ukkidney.org/hyperkalaemia/"
  },
  {
    "title": "Walsh J, et al. Society for Endocrinology emergency guidance: acute hypercalcaemia. Endocr Connect. 2016;5:G9–G11. doi:10.1530/EC-16-0055",
    "url": "https://www.endocrinology.org/media/4277/emergency-guidance_acute-hypercalcaemia-in-adults.pdf"
  },
  {
    "title": "NIH Office of Dietary Supplements：Magnesium — Health Professional Fact Sheet（2026年更新）",
    "url": "https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?os=f"
  },
  {
    "title": "NIDDK：Symptoms & Causes of Diabetes",
    "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes"
  },
  {
    "url": "https://www.nhlbi.nih.gov/health/respiratory-failure/symptoms",
    "title": "NHLBI：Respiratory Failure — Symptoms"
  },
  {
    "url": "https://www.nhlbi.nih.gov/health/heart-failure/symptoms",
    "title": "NHLBI：Heart Failure — Symptoms"
  },
  {
    "url": "https://www.nhlbi.nih.gov/health/venous-thromboembolism/symptoms",
    "title": "NHLBI：Venous Thromboembolism — Symptoms"
  },
  {
    "url": "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html",
    "title": "CDC：Diabetic Ketoacidosis"
  },
  {
    "url": "https://www.nhlbi.nih.gov/health/heart-attack/symptoms",
    "title": "NHLBI：Heart Attack — Symptoms"
  },
  {
    "title": "日本集中治療医学会：重症患者リハビリテーション診療ガイドライン2023（J-ReCIP 2023）、Table 8・CQ8",
    "url": "https://www.jsicm.org/pdf/JSICM_J-ReCIP2023_Vol30-Supplement2.pdf"
  }
];
const LAB_PATTERNS = [
  {
    "title": "貧血と酸素運搬：Hb・Ht・MCV",
    "text": "Hbで貧血の程度、MCV・MCH・MCHCで赤血球の性質を整理します。HtやHbは輸液・利尿による濃度変化の影響も受けるため、出血・輸血の時期と推移を合わせます。SpO₂やPaO₂が保たれていても、Hbが少なければ酸素運搬量は低下し得ます。",
    "ids": [
      "hb",
      "ht",
      "mcv",
      "mch",
      "mchc",
      "sao2"
    ],
    "refs": [
      "https://tokyo-hp.hosp.go.jp/bumon/kensa/kensa.html",
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html"
    ]
  },
  {
    "title": "炎症の経過：WBC・分画・CRP・PCT",
    "text": "WBCは細胞の反応、CRP・PCTは炎症関連の変化を見る補助です。反応する時期は同じではありません。術後の侵襲や薬剤の影響もあるため、値の上昇だけを感染悪化と結び付けず、採血時期と既知の経過を照合します。",
    "ids": [
      "wbc",
      "neut",
      "crp",
      "pct"
    ],
    "refs": [
      "https://nagoya.hosp.go.jp/clinic/test/specimen/blood/",
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/6439.html"
    ]
  },
  {
    "title": "腎機能・体液：BUN・Cr・eGFR・電解質",
    "text": "BUNとCrの推移、Na・Kなどを合わせ、尿量・輸液・利尿の経過と照合します。低筋肉量ではCrが低く、eGFRが高めに推定され得ます。急性の変化ではeGFRを精密な腎機能値として扱えません。Naは濃度であり、単独で体内の水分量を決める値ではありません。",
    "ids": [
      "bun",
      "cr",
      "egfr",
      "na",
      "k"
    ],
    "refs": [
      "https://pubmed.ncbi.nlm.nih.gov/38490803/",
      "https://jsn.or.jp/general/kidneydisease/symptoms04.php"
    ]
  },
  {
    "title": "肝・胆道と筋：AST・ALT・ALP・CK",
    "text": "AST・ALTは主に細胞障害、ALP・γ-GT・ビリルビンは肝胆道の状態を読む手掛かりです。ASTは筋肉にも由来するためCKなどと合わせます。酵素の高値と、肝臓の合成機能低下は同じ意味ではありません。ALPは骨由来でも上昇し得ます。",
    "ids": [
      "ast",
      "alt",
      "alp",
      "ggt",
      "tbil",
      "ck",
      "alb",
      "pt"
    ],
    "refs": [
      "https://nagoya-1st.jrc.or.jp/outpatient/inspection/biochemical/",
      "https://www.hosp.kurume-u.ac.jp/medical/section/kensabu/patient/explanation_inspection.html"
    ]
  },
  {
    "title": "低アルブミン：栄養だけで説明しない",
    "text": "Alb低下には炎症、体液による希釈、肝での合成低下、蛋白の喪失などが関わります。CRPや肝・腎の所見と経過を確認します。食事摂取、体重、筋肉量の評価は別に必要であり、Albだけで低栄養や筋肉量を判定しません。",
    "ids": [
      "alb",
      "tp",
      "crp",
      "cr"
    ],
    "refs": [
      "https://aspenjournals.onlinelibrary.wiley.com/doi/10.1002/ncp.10588"
    ]
  },
  {
    "title": "凝固・線溶：血小板・PT・APTT・Dダイマー",
    "text": "血小板は数、PT・APTTは凝固時間、Dダイマー・FDPは分解産物を見ています。別の側面を測るため、薬剤・術後経過と合わせて読みます。Dダイマー高値だけで血栓の場所や有無は確定できず、APTT延長も必ずしも出血傾向を意味しません。",
    "ids": [
      "plt",
      "pt",
      "inr",
      "aptt",
      "fibrinogen",
      "ddimer",
      "fdp"
    ],
    "refs": [
      "https://jsth.medical-words.jp/words/word-177/",
      "https://jsth.medical-words.jp/words/word-596/"
    ]
  },
  {
    "title": "血液ガス：酸塩基・換気・酸素化を分ける",
    "text": "pHは酸性・アルカリ性の結果、PaCO₂は換気、HCO₃⁻・BEは代謝性要素を理解する手掛かりです。PaO₂・SaO₂は酸素化を示し、酸素投与条件と一緒に読みます。pH正常でも代償や複数の異常が共存する場合があり、SpO₂だけではCO₂貯留は分かりません。",
    "ids": [
      "ph",
      "paco2",
      "hco3",
      "be",
      "pao2",
      "sao2",
      "lactate"
    ],
    "refs": [
      "https://clinical-lab.kuhp.kyoto-u.ac.jp/reference/item/0961.html",
      "https://www.mhlw.go.jp/shingi/2010/04/dl/s0420-6l.pdf"
    ]
  }
];
