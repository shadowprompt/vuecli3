<template>
  <div class="ReactModalPortal">
    <div
      class="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-popover--z_above_fs c-popover--fade"
      style="animation-duration: 200ms;"
    >
      <div
        class="ReactModal__Content ReactModal__Content--after-open popover"
        tabindex="-1"
        role="presentation"
        style="position: absolute;outline: none; transition-duration: 200ms;"
        :style="location"
      >
        <div role="presentation">
          <div class="c-date_picker__dropdown" data-qa="date_picker_dropdown">
            <div class="c-date_picker_calendar" data-qa="date_picker_calendar">
              <div class="c-mini_calendar">
                <div class="c-mini_calendar__month_view">
                  <div class="c-calendar_view_header">
                    <button
                      class="c-button-unstyled c-calendar_view_header__stepper_btn c-calendar_view_header__left_stepper_btn"
                      type="button"
                      aria-label="Previous month"
                      data-qa="cal_header_prev_btn"
                    >
                      <i
                        class="c-icon c-icon--chevron-large-left"
                        type="chevron-large-left"
                        aria-hidden="true"
                      ></i></button
                    ><span class="c-calendar_view_header__title"
                      ><button
                        class="c-button-unstyled c-button-unstyled c-calendar_view_header__title_btn"
                        type="button"
                        data-qa="cal_header_title"
                        aria-label="Jump to another month"
                      >
                        April 1990
                      </button></span
                    ><button
                      class="c-button-unstyled c-calendar_view_header__stepper_btn c-calendar_view_header__right_stepper_btn"
                      type="button"
                      aria-label="Next month"
                      data-qa="cal_header_next_btn"
                    >
                      <i
                        class="c-icon c-icon--chevron-large-right"
                        type="chevron-large-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <table class="c-calendar_month">
                    <thead>
                      <tr class="c-calendar_month__days_of_week">
                        <th class="c-calendar_month__day_of_week_heading">
                          Su
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          Mo
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          Tu
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          We
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          Th
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          Fr
                        </th>
                        <th class="c-calendar_month__day_of_week_heading">
                          Sa
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="c-calendar_month__week">
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled c-date_picker_calendar__date--month_start c-date_picker_calendar__date--first_week_start"
                            type="button"
                            data-value="1990-04-01"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="1, April 1990, Sunday"
                            data-qa="false"
                            data-qa-date="1990-04-01"
                          >
                            1
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-02"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="2, April 1990, Monday"
                            data-qa="false"
                            data-qa-date="1990-04-02"
                          >
                            2
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-03"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="3, April 1990, Tuesday"
                            data-qa="false"
                            data-qa-date="1990-04-03"
                          >
                            3
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-04"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="4, April 1990, Wednesday"
                            data-qa="false"
                            data-qa-date="1990-04-04"
                          >
                            4
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-05"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="5, April 1990, Thursday"
                            data-qa="false"
                            data-qa-date="1990-04-05"
                          >
                            5
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-06"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="6, April 1990, Friday"
                            data-qa="false"
                            data-qa-date="1990-04-06"
                          >
                            6
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled c-date_picker_calendar__date--first_week_end"
                            type="button"
                            data-value="1990-04-07"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="7, April 1990, Saturday"
                            data-qa="false"
                            data-qa-date="1990-04-07"
                          >
                            7
                          </button>
                        </td>
                      </tr>
                      <tr class="c-calendar_month__week">
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-08"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="8, April 1990, Sunday"
                            data-qa="false"
                            data-qa-date="1990-04-08"
                          >
                            8
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-09"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="9, April 1990, Monday"
                            data-qa="false"
                            data-qa-date="1990-04-09"
                          >
                            9
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-10"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="10, April 1990, Tuesday"
                            data-qa="false"
                            data-qa-date="1990-04-10"
                          >
                            10
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-11"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="11, April 1990, Wednesday"
                            data-qa="false"
                            data-qa-date="1990-04-11"
                          >
                            11
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-12"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="12, April 1990, Thursday"
                            data-qa="false"
                            data-qa-date="1990-04-12"
                          >
                            12
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-13"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="13, April 1990, Friday"
                            data-qa="false"
                            data-qa-date="1990-04-13"
                          >
                            13
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-14"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="14, April 1990, Saturday"
                            data-qa="false"
                            data-qa-date="1990-04-14"
                          >
                            14
                          </button>
                        </td>
                      </tr>
                      <tr class="c-calendar_month__week">
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-15"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="15, April 1990, Sunday"
                            data-qa="false"
                            data-qa-date="1990-04-15"
                          >
                            15
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-16"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="16, April 1990, Monday"
                            data-qa="false"
                            data-qa-date="1990-04-16"
                          >
                            16
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-17"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="17, April 1990, Tuesday"
                            data-qa="false"
                            data-qa-date="1990-04-17"
                          >
                            17
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-18"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="18, April 1990, Wednesday"
                            data-qa="false"
                            data-qa-date="1990-04-18"
                          >
                            18
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-19"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="19, April 1990, Thursday"
                            data-qa="false"
                            data-qa-date="1990-04-19"
                          >
                            19
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-20"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="20, April 1990, Friday"
                            data-qa="false"
                            data-qa-date="1990-04-20"
                          >
                            20
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-21"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="21, April 1990, Saturday"
                            data-qa="false"
                            data-qa-date="1990-04-21"
                          >
                            21
                          </button>
                        </td>
                      </tr>
                      <tr class="c-calendar_month__week">
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-22"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="22, April 1990, Sunday"
                            data-qa="false"
                            data-qa-date="1990-04-22"
                          >
                            22
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-23"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="23, April 1990, Monday"
                            data-qa="false"
                            data-qa-date="1990-04-23"
                          >
                            23
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-24"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="24, April 1990, Tuesday"
                            data-qa="false"
                            data-qa-date="1990-04-24"
                          >
                            24
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-25"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="25, April 1990, Wednesday"
                            data-qa="false"
                            data-qa-date="1990-04-25"
                          >
                            25
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-26"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="26, April 1990, Thursday"
                            data-qa="false"
                            data-qa-date="1990-04-26"
                          >
                            26
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled"
                            type="button"
                            data-value="1990-04-27"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="27, April 1990, Friday"
                            data-qa="false"
                            data-qa-date="1990-04-27"
                          >
                            27
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled c-date_picker_calendar__date--is_selected c-date_picker_calendar__date--is_active c-date_picker_calendar__date--last_week_end"
                            type="button"
                            data-value="1990-04-28"
                            tabindex="0"
                            aria-current="date"
                            aria-label="Date picker: April 28, 1990 selected. Use arrow keys to change date."
                            data-qa="active_date"
                            data-qa-date="1990-04-28"
                          >
                            28
                          </button>
                        </td>
                      </tr>
                      <tr class="c-calendar_month__week">
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled c-date_picker_calendar__date--last_week_start"
                            type="button"
                            data-value="1990-04-29"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="29, April 1990, Sunday"
                            data-qa="false"
                            data-qa-date="1990-04-29"
                          >
                            29
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        >
                          <button
                            class="c-button-unstyled c-date_picker_calendar__date c-button-unstyled c-date_picker_calendar__date--month_end"
                            type="button"
                            data-value="1990-04-30"
                            tabindex="-1"
                            aria-current="false"
                            aria-label="30, April 1990, Monday"
                            data-qa="false"
                            data-qa-date="1990-04-30"
                          >
                            30
                          </button>
                        </td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        ></td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        ></td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        ></td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        ></td>
                        <td
                          class="c-calendar_month__date_container"
                          data-qa="calendar_month_date_container"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
    props: ['location'],
    mounted() {
        document.body.append(this.$el);
    }
};
</script>

<style scoped></style>
