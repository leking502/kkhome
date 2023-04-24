import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const BiliBiliIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
      <path
          d="M711.7824 385.706667H317.860978c-11.963733 0-22.038756 9.12384-22.038756 21.379982v261.158684c0 12.255004 10.073884 21.251413 22.038756 21.251414h393.921422c11.964871 0 20.946489-8.995271 20.946489-21.251414V407.086649c0-12.25728-8.983893-21.379982-20.946489-21.379982z m-367.101724 96.493795l111.015253-21.255964 8.388835 41.665422-109.899093 21.253689-9.504995-41.663147z m171.137706 126.95552c-34.116267 37.19168-69.907342-11.744142-69.907342-11.744142l18.176-11.744142s24.327964 43.902293 51.453724-14.262045c26.006187 56.486116 54.809031 14.821831 54.809032 15.099449l16.500053 10.62912c-0.002276-0.003413-30.762098 49.212302-71.031467 12.02176z m164.706987-85.291235l-110.176711-21.251414 8.669866-41.66656 110.73536 21.255965-9.228515 41.662009z"
          fill="currentColor"></path>
      <path
          d="M512 115.456c-219.005156 0-396.544 177.539982-396.544 396.542862 0 219.005156 177.539982 396.545138 396.544 396.545138S908.544 731.004018 908.544 512c0-219.005156-177.538844-396.544-396.544-396.544z m208.828871 626.904178c-27.71968-0.877227-37.05856 0-37.05856 0s-2.042311 31.806578-29.177173 32.38912c-27.428409 0.291271-31.514169-22.177564-32.391396-30.63808-16.630898 0-216.512284 0.873813-216.512284 0.873813s-3.500942 29.47072-30.63808 29.47072c-27.428409 0-28.889316-24.511147-30.63808-29.47072-17.801671 0-41.729138-0.584818-41.729138-0.584818s-60.109938-12.541724-67.987911-90.744604c0.874951-78.201742 0-232.8576 0-232.8576s-5.544391-72.071396 66.239147-92.790329c22.173013-0.873813 70.03136-1.16736 125.471857-1.16736l-51.065742-49.605973s-7.877973-9.921422 5.544391-21.009067c13.717049-11.086507 14.296178-6.568391 18.966756-3.35872 4.66944 3.208533 76.160569 73.672249 76.160569 73.672249h-9.629014c27.427271 0 55.732907 0.444871 82.868907 0.444871 10.502827-10.505102 70.322631-69.082453 74.407253-71.99744 4.668302-2.9184 5.542116-7.841564 18.967894 3.244942 13.422364 11.087644 5.543253 21.028409 5.543253 21.028409l-49.898382 48.155307c68.572729 0.584818 121.387236 0.878364 121.387235 0.878364s67.694364 14.885547 69.446543 92.500196c-0.874951 77.6192 0.291271 233.732551 0.291271 233.732551s-3.7888 75.867022-68.569316 87.834169z"
          fill="currentColor"></path>
  </Icon>
));
BiliBiliIcon.displayName = "biliIcon"
export default BiliBiliIcon;
