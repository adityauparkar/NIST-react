import styled from 'styled-components'

const RecommendationStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  height: 100%;

  .recommendation-container {
    height: 100%;
    box-sizing: border-box;

    .title {
      background-color: rgba(255, 255, 255, 0.45);
      padding: 30px;
      font-size: 1.25rem;
      font-weight: 400;
      color: #495057;
      background-color: #f7f9fa;
    }

    .body {
      background-color: #f1f4f6;
      height: 100%;
      padding: 30px;

      .parent-card {
        background-color: #fff;
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
          0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
          0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
          0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        border-radius: 0.25rem;
        border: 1px solid rgba(26, 54, 126, 0.125);
        padding: 1.25rem;

        .recommendation{
            margin-bottom: 1rem;
        }

        .catg-id{
            font-weight: bold;
        }
      }
    }
  }
  `

  export default RecommendationStyles;
