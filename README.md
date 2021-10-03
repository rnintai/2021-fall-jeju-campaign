# 2021 가을 인생제주 캠페인

By Kim, Min tae


## 3주차

### 작업 순서

![Untitled](/assets/image/readme_image/3rd%20(1).png)

- `Home` , `Locations`과 `Tickets`  컴포넌트 생성.  
[Link](https://github.com/rnintai/2021-fall-jeju-campaign/commit/cf2f8724a8f085affb9837362279735e9f27ca27)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%201.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%202.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%203.png)

- `Home` 과 `Location` 의 마크업 및 CSS 작성  
[Link1](https://github.com/rnintai/2021-fall-jeju-campaign/commit/8047a976829081b8dd07d9fc312cb90b76462bbb), [Link2](https://github.com/rnintai/2021-fall-jeju-campaign/commit/9dd21781068d7e369a1ce788743c6877a10c02ce)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%204.png)

- **styled-component**를 파일을 분리하여 작성하는 방법으로 `Home` 컴포넌트 구현.
이전에 한 파일에 통으로 작성한 `Location` 컴포넌트를 분리하는 리팩토링 작업.  
[Link1](https://github.com/rnintai/2021-fall-jeju-campaign/commit/ed5460677a0f24a3a63c3516feb00dec23b717b8), [Link2](https://github.com/rnintai/2021-fall-jeju-campaign/commit/afd66b8f780a79691d0f96ac2b7b466df6fa0e4e), [Link3](https://github.com/rnintai/2021-fall-jeju-campaign/commit/3af96b23ca4ab4ea3642672d5e0cc9274dd926cf)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%205.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%206.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%207.png)

- `Tickets`컴포넌트의 마크업 및 CSS 작성  
[Link](https://github.com/rnintai/2021-fall-jeju-campaign/commit/8c6843c872ecda0955cf6cc0970c38c10519bdfd)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%208.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%209.png)

- `Tickets` 컴포넌트에서 티켓 할인 여부 따라 달리 표시해주는 로직 구현.  
[Link](https://github.com/rnintai/2021-fall-jeju-campaign/commit/8926b117cfbf49f963ede4c51e7ce100e4b6c254)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2010.png)

```jsx
function DiscountRatio({ ratio }) {
  return ratio !== undefined ? (
    <StyledDiscountRatio>{ratio * 100 + "%"}</StyledDiscountRatio>
  ) : null;
}
```

- `Tickets` 컴포넌트에 더 보기 버튼을 추가  
[Link](https://github.com/rnintai/2021-fall-jeju-campaign/commit/695c53b8520ac5cf33349e8ba6411c94a3613a25)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2011.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2012.png)

- `Locations` 의 지역 별 관광지의 개수가 4개 이상일 때에 **등**을 표시해주는 로직 구현  
[Link](https://github.com/rnintai/2021-fall-jeju-campaign/commit/5927f3c4139dad83ccd2ab7306ec5ce412a4f027)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2013.png)

- `Intro` 와 `Map` 컴포넌트 생성. (인생제주 포스터, 쉬기좋은 지역별 안내)  
[Link1](https://github.com/rnintai/2021-fall-jeju-campaign/commit/1cd2a1e7b407abe72c92ea8a285d6b69fc988c63), [Link2](https://github.com/rnintai/2021-fall-jeju-campaign/commit/c1cac0c94bc04101e1d68a5a5c1a71cb797db6b2)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2014.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2015.png)

- `Tickets` 에서 `React Hook` 을 이용하여 태그에 따라 티켓들을 표시해주는 로직 구현  
[Link1](https://github.com/rnintai/2021-fall-jeju-campaign/commit/880b72fcbcda49e25deeb6d831a5074d13e083d8), [Link2](https://github.com/rnintai/2021-fall-jeju-campaign/commit/774f28dd6b8f50a042be5284276d41199c8ad2cd)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2016.png)

![Untitled](3%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20636ef44b76e047bc986018c0f2309c78/Untitled%2017.png)
