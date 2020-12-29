//** Switch Language */
const dictionary = {
	vietnamese: {
		_newcontract: "Hợp đồng mới",
		_downloadAndInstall: "Tải xuống và cài đặt",
		_downloadTemplate: "Vui lòng tải xuống gói template bên dưới.",
		_installInstructions:
			"Sau đó cài đặt vào kintone theo hướng dẫn dưới đây",
		_clickDownload: "Nhấn vào đây để tải xuống",
		_step1of1of1: "1. Vào trang kintone Administration -> App Templates.",
		_step1of1of2: "Import gói Kinkan mà bạn vừa tải xuống",
		_step1of2of1: "2. Vào trang tạo App.",
		_step1of2of2: "Chọn template Kinkan vừa mới import",
		_step1of3of1: "3. Vào trang kintone Administration -> App Management.",
		_step1of3of2:
			"Nhấn vào nút cài đặt của từng App, chyển qua tab App Settings -> API Token",
		_step1of3of3:
			"Nhấn Generate,ghi chú lại API Token vừa tạo ra, sau đó nhấn Save, Update App",
		_previous: "Quay lại",
		_next: "Tiếp tục",
		_note: "Lưu ý:",
		_noteContent:
			"Nếu cần hỗ trợ, vui lòng liên hệ bộ phận chăm sóc khách hàng của công ty",
		_clickhere: "Nhấn vào",
	},
	english: {
		_newcontract: "New Contract",
		_downloadAndInstall: "Download and install",
		_downloadTemplate: "Please download the template package below.",
		_installInstructions:
			"Then install into kintone according to the instructions below.",
		_clickDownload: "Click here to download.",
		_step1of1of1:
			"Enter to the kintone Administration page -> App Templates.",
		_step1of1of2: "Import the Kinkan package that you just downloaded",
		_step1of2of1: "2. Enter to the App creation page.",
		_step1of2of2: "Select the imported Kinkan template",
		_step1of3of1:
			"3. Enter to kintone Administration page -> App Management.",
		_step1of3of2:
			"Click on the settings button of each App, move to the App Settings tab -> API Token",
		_step1of3of3:
			"Click Generate, note the API Token just created, then click Save, Update App",
		_previous: "Previous",
		_next: "Next",
		_note: "Note:",
		_noteContent:
			"If you need assistance, please contact the company's customer service",
		_clickhere: "Click",
	},
	japanese: {
		_newcontract: "新規契約",
		_downloadAndInstall: "ダウンロードおよびインストール",
		_downloadTemplate:
			"以下のテンプレートパッケージをダウンロードしてください。",
		_installInstructions:
			"次に、以下の手順に従ってkintoneにインストールします。",
		_clickDownload: "ここをクリックしてダウンロードします。",
		_step1of1of1:
			"1. kintone Administrationページ->App Templatesに入ります。",
		_step1of1of2: "ダウンロードしたKinkanパッケージをインポートします",
		_step1of2of1: "2. アプリ作成ページに入ります。",
		_step1of2of2: "インポートしたKinkanテンプレートを選択します",
		_step1of3of1:
			"3. kintone Administrationページ -> App Managementに入ります。",
		_step1of3of2:
			"各アプリの設定ボタンをクリックし、App Settingsタブ->API Token に移動します",
		_step1of3of3:
			"Generateをクリックし、作成したAPI Tokenをメモしてから、 Save、Update Appをクリックします",
		_previous: "前へ",
		_next: "次へ",
		_note: "注：",
		_noteContent:
			"サポートが必要な場合は、会社のカスタマーサービスにお問い合わせください",
		_clickhere: "をクリック",
	},
};

// Function for swapping dictionaries
const set_lang = (dictionary) => {
	$("[data-translate]").text(function () {
		var key = $(this).data("translate");
		if (dictionary.hasOwnProperty(key)) {
			return dictionary[key];
		}
	});
};

// Swap languages when menu changes
document.querySelector("#switchLang").addEventListener("change", function () {
	let language = this.value;
	language = language.toLowerCase();
	if (dictionary.hasOwnProperty(language)) {
		set_lang(dictionary[language]);
	}
});

// Set initial language to English
set_lang(dictionary.vietnamese);
