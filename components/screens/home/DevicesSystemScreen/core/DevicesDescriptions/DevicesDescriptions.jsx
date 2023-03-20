import styles from "./DevicesDescriptions.module.less";

function DevicesDescriptions() {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        [En] Our headphones for guides are designed to provide an exceptional
        audio experience for your tour guests. They are lightweight, comfortable
        to wear, and have noise-cancelling capabilities to eliminate any
        background noise. With clear audio quality, your guests will be able to
        hear every word of your tour without any distortion or interference. Our
        headphones are also durable and built to last, making them ideal for
        frequent use in various environments. They are the perfect tool to
        enhance your guests' experience while on your tour.
      </p>
      <p className={styles.text}>
        [Sr] Наше слушалице за водиче су дизајниране да пруже изузетно аудио
        искуство за ваше госте на турнеји. Лагани су, удобни за ношење и имају
        способност поништавања буке како би елиминисали било какву позадину. Са
        јасним квалитетом звука, ваши гости ће моћи да чују сваку реч вашег
        обиласка без икаквих изобличења или сметњи. Наше слушалице су такође
        издржљиве и направљене да трају, што их чини идеалним за честу употребу
        у различитим окружењима. Они су савршено средство да побољшате искуство
        ваших гостију током вашег обиласка.
      </p>
    </div>
  );
}

export default DevicesDescriptions;
