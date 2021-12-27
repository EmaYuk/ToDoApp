import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    // deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素(li)
    // const addTarget = completeButton.parentNode.parentNode;
    const addTarget = completeButton.parentNode.parentNode;

    // TODO内容テキストを取得
    console.log(addTarget.);

    // div以下を初期化
    // addTarget.textContent = null;

    // 完了リストへ移動
    // document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // button(戻す)タグ作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグ(li)を完了リストから削除
    // const backTarget = backButton.parentNode.parentNode;
    // document.getElementById("incomplete-list").appendChild(backTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素にdivを設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
