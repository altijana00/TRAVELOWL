function showSection(param)
{
  document.getElementById("turisticka-zajG").style.display = "none";
  document.getElementById("historijaG").style.display = "none";
  document.getElementById("kh-obiljezjaG").style.display = "none";
  document.getElementById("prirodne-ljG").style.display = "none";
  document.getElementById("uocG").style.display = "none";

  document.getElementById(param).style.display = "block";

}

function showSectionKladanj(param)
{
  document.getElementById("jp-karaula-kladanj").style.display = "none";
  document.getElementById("historija-kladanj").style.display = "none";
  document.getElementById("kh-obiljezja-kladanj").style.display = "none";
  document.getElementById("prirodne-kladanj").style.display = "none";
  document.getElementById("izletista-kladanj").style.display = "none";

  document.getElementById(param).style.display = "block";
}

function showSectionZivinice(param)
{
  document.getElementById("turizam-zivinice").style.display = "none";
  document.getElementById("kh-obiljezja-zivinice").style.display = "none";
  document.getElementById("prirodne-zivinice").style.display = "none";
  document.getElementById("atrakcije-zivinice").style.display = "none";

  document.getElementById(param).style.display = "block";
}

function showSectionSrebrenica(param1)
{
  document.getElementById("tur-org-srebrenica").style.display = "none";
  document.getElementById("kh-obiljezja-srebrenica").style.display = "none";
  document.getElementById("atrakcije-srebrenica").style.display = "none";
  document.getElementById("kuca-dobrih-tonova").style.display = "none";
  document.getElementById("memorijalni").style.display = "none";

  document.getElementById(param1).style.display = "block";
}

function showBusiness(param)
{
  document.getElementById("sehara").style.display = "none";
  document.getElementById("jazuk").style.display = "none";
  document.getElementById("shai").style.display = "none";
  document.getElementById("darovi-prirode").style.display = "none";

  document.getElementById(param).style.display = "block";
}
